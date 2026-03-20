import { type FastifyReply, type FastifyRequest } from "fastify";
import { BillService } from "./service.ts";

export class BillController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await BillService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const bill = await BillService.getById(request.params.id);
    if (!bill) return reply.notFound();
    return bill;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const bill = await BillService.create(request.body);
    return reply.status(201).send(bill);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const bill = await BillService.update(request.params.id, request.body);
    return bill;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await BillService.delete(request.params.id);
    return reply.status(204).send();
  }
}
