import nodemailer from "nodemailer";

export class EmailService {
  private static transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.placeholder.com",
    port: parseInt(process.env.SMTP_PORT || "587", 10),
    secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || "placeholder-user",
      pass: process.env.SMTP_PASS || "placeholder-password",
    },
  });

  static async sendEmail(to: string, subject: string, text: string, html?: string) {
    try {
      const info = await this.transporter.sendMail({
        from: `"${process.env.SMTP_FROM_NAME || "URentMe"}" <${process.env.SMTP_FROM_EMAIL || "noreply@urentme.com"}>`,
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
}
