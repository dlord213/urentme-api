import { type FastifyReply, type FastifyRequest } from "fastify";
import { EmailService } from "./service.js";

type SendEmailBody = {
  to: string;
  subject: string;
  text: string;
  html?: string;
};

export class EmailController {
  static async send(
    request: FastifyRequest<{ Body: SendEmailBody }>,
    reply: FastifyReply,
  ) {
    try {
      const { to, subject, text, html } = request.body;
      
      if (!to || !subject || !text) {
        return reply.status(400).send({ error: "Missing required fields: to, subject, or text." });
      }

      const info = await EmailService.sendEmail(to, subject, text, html);
      return reply.status(200).send({ success: true, messageId: info.messageId });
    } catch (error: any) {
      return reply.status(500).send({ error: "Failed to send email", details: error.message });
    }
  }
}
