import { type FastifyReply, type FastifyRequest } from "fastify";
import { PropertyService } from "./service.js";

export class PropertyController {
  static async list(request: FastifyRequest<{ Querystring: { page?: string; search?: string; type?: string } }>, reply: FastifyReply) {
    const page = Math.max(1, parseInt(request.query.page || "1", 10) || 1);
    const search = request.query.search || undefined;
    const type = request.query.type || undefined;
    return PropertyService.list(page, search, type);
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const property = await PropertyService.getById(request.params.id);
    if (!property) return reply.notFound();
    return property;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const property = await PropertyService.create(request.body);
    return reply.status(201).send(property);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return PropertyService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await PropertyService.delete(request.params.id);
    return reply.status(204).send();
  }
}
