import { FastifyReply, FastifyRequest } from "fastify";
import { OwnerDistributionService } from "./service.js";

export class OwnerDistributionController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await OwnerDistributionService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const entry = await OwnerDistributionService.getById(request.params.id);
    if (!entry) return reply.notFound();
    return entry;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const entry = await OwnerDistributionService.create(request.body);
    return reply.status(201).send(entry);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const entry = await OwnerDistributionService.update(
      request.params.id,
      request.body,
    );
    return entry;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await OwnerDistributionService.delete(request.params.id);
    return reply.status(204).send();
  }
}
