import { FastifyReply, FastifyRequest } from "fastify";
import { OwnerService } from "./service.js";

export class OwnerController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await OwnerService.list();
    return list;
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
    const owner = await OwnerService.update(request.params.id, request.body);
    return owner;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await OwnerService.delete(request.params.id);
    return reply.status(204).send();
  }
}
