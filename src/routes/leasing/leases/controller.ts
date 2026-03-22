import { type FastifyReply, type FastifyRequest } from "fastify";
import { LeaseService } from "./service.ts";

export class LeaseController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await LeaseService.list(request.user.id);
    return list;
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
    const lease = await LeaseService.update(request.params.id, request.body);
    return lease;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await LeaseService.delete(request.params.id);
    return reply.status(204).send();
  }
}
