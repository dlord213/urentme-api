import crypto from "crypto";
import bcrypt from "bcrypt";
import { prisma } from "../../utils/prisma.js";

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

    return {
      inviteUrl: `${baseUrl}/tenant/accept-invite?token=${token}`,
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
