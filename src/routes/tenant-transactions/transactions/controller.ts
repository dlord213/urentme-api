import { type FastifyReply, type FastifyRequest } from "fastify";
import { TransactionService } from "./service.ts";

export class TransactionController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await TransactionService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const transaction = await TransactionService.getById(request.params.id);
    if (!transaction) return reply.notFound();
    return transaction;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const transaction = await TransactionService.create(request.body);
    return reply.status(201).send(transaction);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const transaction = await TransactionService.update(
      request.params.id,
      request.body,
    );
    return transaction;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await TransactionService.delete(request.params.id);
    return reply.status(204).send();
  }
}
