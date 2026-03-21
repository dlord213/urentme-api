import { type FastifyReply, type FastifyRequest } from "fastify";
import { PublicUtilityService } from "./service.ts";

export class PublicUtilityController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await PublicUtilityService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const util = await PublicUtilityService.getById(request.params.id);
    if (!util) return reply.notFound();
    return util;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const util = await PublicUtilityService.create(request.body);
    return reply.status(201).send(util);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const util = await PublicUtilityService.update(
      request.params.id,
      request.body,
    );
    return util;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await PublicUtilityService.delete(request.params.id);
    return reply.status(204).send();
  }
}
