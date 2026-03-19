import { FastifyReply, FastifyRequest } from "fastify";
import { ProspectService } from "./service.js";

export class ProspectController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await ProspectService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const prospect = await ProspectService.getById(request.params.id);
    if (!prospect) return reply.notFound();
    return prospect;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const prospect = await ProspectService.create(request.body);
    return reply.status(201).send(prospect);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const prospect = await ProspectService.update(
      request.params.id,
      request.body,
    );
    return prospect;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await ProspectService.delete(request.params.id);
    return reply.status(204).send();
  }
}
