import { type FastifyReply, type FastifyRequest } from "fastify";
import { RentalApplicationService } from "./service.ts";

export class RentalApplicationController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await RentalApplicationService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const app = await RentalApplicationService.getById(request.params.id);
    if (!app) return reply.notFound();
    return app;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const app = await RentalApplicationService.create(request.body);
    return reply.status(201).send(app);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const app = await RentalApplicationService.update(
      request.params.id,
      request.body,
    );
    return app;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await RentalApplicationService.delete(request.params.id);
    return reply.status(204).send();
  }
}
