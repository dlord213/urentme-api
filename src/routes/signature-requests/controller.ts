import { type FastifyReply, type FastifyRequest } from "fastify";
import { SignatureRequestService } from "./service.ts";

export class SignatureRequestController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await SignatureRequestService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const sr = await SignatureRequestService.getById(request.params.id);
    if (!sr) return reply.notFound();
    return sr;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const sr = await SignatureRequestService.create(request.body);
    return reply.status(201).send(sr);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const sr = await SignatureRequestService.update(
      request.params.id,
      request.body,
    );
    return sr;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await SignatureRequestService.delete(request.params.id);
    return reply.status(204).send();
  }
}
