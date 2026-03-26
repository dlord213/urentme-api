import { type FastifyReply, type FastifyRequest } from "fastify";
import { TenantService } from "./service.js";

export class TenantController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    return TenantService.list();
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const tenant = await TenantService.getById(request.params.id);
    if (!tenant) return reply.notFound();
    return tenant;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const tenant = await TenantService.create(request.body);
    return reply.status(201).send(tenant);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return TenantService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await TenantService.delete(request.params.id);
    return reply.status(204).send();
  }
}
