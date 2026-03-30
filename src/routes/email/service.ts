import nodemailer from "nodemailer";

export class EmailService {
  private static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: Boolean(process.env.SMTP_SECURE),
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  static async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
      const info = await this.transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME}" <${process.env.SMTP_FROM_EMAIL}>`,
        to,
        subject,
        text,
        html,
      });

      console.log("Message sent: %s", info.messageId);
      return info;
    } catch (error) {
      console.error("Error sending email:", error);
      throw error;
    }
  }
  static generateUrentMeEmail(firstName: string, title: string, paragraphs: string[], cta?: { text: string; url: string }) {
    const ctaHtml = cta ? `
      <div style="text-align: center; margin: 40px 0;">
        <a href="${cta.url}" style="background-color: #059669; color: #ffffff; text-decoration: none; padding: 16px 32px; border-radius: 99px; font-weight: bold; font-size: 16px; display: inline-block; box-shadow: 0 4px 6px -1px rgba(5, 150, 105, 0.2);">${cta.text}</a>
      </div>
      <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 16px; text-align: center; margin-top: 20px; word-break: break-all;">
        <p style="margin: 0 0 8px 0; font-size: 13px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px;">Or paste this link into your browser:</p>
        <a href="${cta.url}" style="color: #059669; font-size: 14px; text-decoration: none;">${cta.url}</a>
      </div>
    ` : "";

    const pTags = paragraphs.map(p => `<p style="font-size: 16px; margin-bottom: 24px; color: #4b5563;">${p}</p>`).join("");

    return `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f3f4f6; -webkit-font-smoothing: antialiased;">
  <div style="background-color: #f3f4f6; padding: 40px 0; width: 100%;">
    <div style="background-color: #ffffff; margin: 0 auto; max-width: 600px; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05);">
      <div style="background: linear-gradient(135deg, #059669 0%, #0d9488 100%); padding: 40px 30px; text-align: center;">
        <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 900; letter-spacing: -1px; text-transform: uppercase;">URENTME</h1>
        <p style="color: rgba(255,255,255,0.8); font-size: 13px; text-transform: uppercase; letter-spacing: 2px; margin-top: 5px; margin-bottom: 0; font-weight: 700;">Tenant Portal</p>
      </div>
      <div style="padding: 40px 30px; color: #374151; line-height: 1.6;">
        <h2 style="color: #111827; font-size: 24px; font-weight: 800; margin-top: 0; margin-bottom: 20px; letter-spacing: -0.5px;">${title}, ${firstName}!</h2>
        ${pTags}
        ${ctaHtml}
      </div>
      <div style="padding: 30px; text-align: center; background-color: #f9fafb; border-top: 1px dashed #e5e7eb;">
        <p style="margin: 0; font-size: 12px; color: #9ca3af; font-weight: normal;">This is an automated notification from URENTME Property Management.</p>
      </div>
    </div>
  </div>
</body>
</html>
    `;
  }
}
