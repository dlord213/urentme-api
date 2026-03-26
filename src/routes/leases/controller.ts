import { type FastifyReply, type FastifyRequest } from "fastify";
import { LeaseService } from "./service.js";

export class LeaseController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    return LeaseService.list();
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const lease = await LeaseService.getById(request.params.id);
    if (!lease) return reply.notFound();
    return lease;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const lease = await LeaseService.create(request.body);
    return reply.status(201).send(lease);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return LeaseService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await LeaseService.delete(request.params.id);
    return reply.status(204).send();
  }
}
