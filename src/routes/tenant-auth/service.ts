import crypto from "crypto";
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma.js";
import { EmailService } from "../email/service.js";

const SALT_ROUNDS = 12;
const INVITE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export class TenantAuthService {
  /** Owner triggers this to generate an invite token for a tenant */
  static async createInvite(tenantId: string, baseUrl: string) {
    const tenant = await prisma.tenant.findUnique({ where: { id: tenantId } });
    if (!tenant) {
      const e = new Error("Tenant not found") as Error & { statusCode: number };
      e.statusCode = 404;
      throw e;
    }

    const token = crypto.randomBytes(32).toString("hex");
    const expiry = new Date(Date.now() + INVITE_TTL_MS);

    await prisma.tenant.update({
      where: { id: tenantId },
      data: { inviteToken: token, inviteTokenExpiry: expiry },
    });

    const inviteUrl = `${baseUrl}/tenant/accept-invite?token=${token}`;

    if (tenant.email) {
      EmailService.sendEmail(
        tenant.email,
        "You've been invited to URENTME Tenant Portal",
        `Hello ${tenant.firstName},\n\nYou have been invited to join the URENTME Tenant Portal to manage your lease and payments.\n\nPlease click the following link to set up your password and access your account:\n${inviteUrl}\n\nThis link will expire in 24 hours.\n\nThank you,\nThe URENTME Team`,
        `
          <div style="background-color: #f3f4f6; padding: 40px 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
            <div style="background-color: #ffffff; margin: 0 auto; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">URENTME</h1>
                <p style="color: rgba(255,255,255,0.8); font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px; margin-bottom: 0; font-weight: 700;">Tenant Portal</p>
              </div>

              <!-- Body -->
              <div style="padding: 40px 30px; color: #374151; line-height: 1.6;">
                <h2 style="color: #111827; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 20px; letter-spacing: -0.5px;">Welcome aboard, ${tenant.firstName}!</h2>
                
                <p style="font-size: 16px; margin-bottom: 24px; color: #4b5563;">Your property manager has invited you to access the <strong>URENTME Tenant Portal</strong>. Here you can easily manage your lease, track your transactions securely, and maintain your occupancy history online.</p>
                <p style="font-size: 16px; margin-bottom: 24px; color: #4b5563;">To securely set up your password and access your new dashboard, please click the button below:</p>
                
                <div style="text-align: center; margin: 40px 0;">
                  <a href="${inviteUrl}" style="background-color: #059669; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 99px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.2);">Accept Invitation</a>
                </div>

                <!-- Fallback Link -->
                <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; text-align: center; margin-top: 20px; word-break: break-all;">
                  <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Or paste this link into your browser:</p>
                  <a href="${inviteUrl}" style="color: #059669; font-size: 14px; text-decoration: none;">${inviteUrl}</a>
                </div>
              </div>

              <!-- Footer -->
              <div style="padding: 30px; text-align: center; background-color: #f9fafb; border-top: 1px dashed #e5e7eb;">
                <p style="margin: 0 0 8px 0; font-size: 12px; color: #9ca3af; font-weight: normal;">Security Notice: This link automatically expires in 24 hours.</p>
                <p style="margin: 0; font-size: 12px; color: #9ca3af; font-weight: normal;">If you did not expect this invitation, please ignore this email.</p>
              </div>

            </div>
          </div>
        `
      ).catch((err: any) => {
        console.error("Failed to send invite email to tenant:", err);
      });
    }

    return {
      inviteUrl,
      expiresAt: expiry,
    };
  }

  /** Tenant calls this to set their password using the invite token */
  static async acceptInvite(token: string, password: string) {
    const tenant = await prisma.tenant.findUnique({
      where: { inviteToken: token },
    });

    if (!tenant) {
      const e = new Error("Invalid invite token") as Error & { statusCode: number };
      e.statusCode = 400;
      throw e;
    }

    if (!tenant.inviteTokenExpiry || tenant.inviteTokenExpiry < new Date()) {
      const e = new Error("Invite token has expired") as Error & { statusCode: number };
      e.statusCode = 400;
      throw e;
    }

    const passwordHash = await bcrypt.hash(password, SALT_ROUNDS);

    const updated = await prisma.tenant.update({
      where: { id: tenant.id },
      data: {
        passwordHash,
        inviteToken: null,
        inviteTokenExpiry: null,
        portalEnabled: true,
      },
      select: { id: true, email: true, firstName: true, lastName: true },
    });

    return updated;
  }

  /** Validate tenant email + password, return safe tenant */
  static async validateCredentials(email: string, password: string) {
    const tenant = await prisma.tenant.findUnique({ where: { email } });
    if (!tenant || !tenant.passwordHash || !tenant.portalEnabled) return null;

    const match = await bcrypt.compare(password, tenant.passwordHash);
    if (!match) return null;

    const { passwordHash: _ph, inviteToken: _it, inviteTokenExpiry: _ite, ...safe } = tenant;
    return safe;
  }

  /** Get tenant by id (for /me) */
  static async getById(id: string) {
    const tenant = await prisma.tenant.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        celNum: true,
        portalEnabled: true,
        isActive: true,
      },
    });
    return tenant;
  }
}
