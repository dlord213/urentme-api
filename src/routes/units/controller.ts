import { type FastifyReply, type FastifyRequest } from "fastify";
import { UnitService } from "./service.js";

export class UnitController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    return UnitService.list();
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const unit = await UnitService.getById(request.params.id);
    if (!unit) return reply.notFound();
    return unit;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const unit = await UnitService.create(request.body);
    return reply.status(201).send(unit);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return UnitService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await UnitService.delete(request.params.id);
    return reply.status(204).send();
  }
}
