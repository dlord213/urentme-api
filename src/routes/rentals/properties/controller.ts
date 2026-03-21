import { type FastifyReply, type FastifyRequest } from "fastify";
import { PropertyService } from "./service.ts";

export class PropertyController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await PropertyService.list();
    return list;
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
    const property = await PropertyService.update(
      request.params.id,
      request.body,
    );
    return property;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await PropertyService.delete(request.params.id);
    return reply.status(204).send();
  }
}
