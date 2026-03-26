import { type FastifyReply, type FastifyRequest } from "fastify";
import { OwnerService } from "./service";

export class OwnerController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    return OwnerService.list();
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const owner = await OwnerService.getById(request.params.id);
    if (!owner) return reply.notFound();
    return owner;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const owner = await OwnerService.create(request.body);
    return reply.status(201).send(owner);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return OwnerService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await OwnerService.delete(request.params.id);
    return reply.status(204).send();
  }
}
