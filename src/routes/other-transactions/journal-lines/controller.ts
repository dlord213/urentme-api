import { type FastifyReply, type FastifyRequest } from "fastify";
import { JournalLineService } from "./service.ts";

export class JournalLineController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await JournalLineService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const entry = await JournalLineService.getById(request.params.id);
    if (!entry) return reply.notFound();
    return entry;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const entry = await JournalLineService.create(request.body);
    return reply.status(201).send(entry);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const entry = await JournalLineService.update(
      request.params.id,
      request.body,
    );
    return entry;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await JournalLineService.delete(request.params.id);
    return reply.status(204).send();
  }
}
