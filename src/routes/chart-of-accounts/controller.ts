import { type FastifyReply, type FastifyRequest } from "fastify";
import { ChartOfAccountService } from "./service.ts";

export class ChartOfAccountController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await ChartOfAccountService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const account = await ChartOfAccountService.getById(request.params.id);
    if (!account) return reply.notFound();
    return account;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const account = await ChartOfAccountService.create(request.body);
    return reply.status(201).send(account);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const account = await ChartOfAccountService.update(
      request.params.id,
      request.body,
    );
    return account;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await ChartOfAccountService.delete(request.params.id);
    return reply.status(204).send();
  }
}
