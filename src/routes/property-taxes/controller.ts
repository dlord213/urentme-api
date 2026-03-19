import { FastifyReply, FastifyRequest } from "fastify";
import { PropertyTaxService } from "./service.js";

export class PropertyTaxController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await PropertyTaxService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const tax = await PropertyTaxService.getById(request.params.id);
    if (!tax) return reply.notFound();
    return tax;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const tax = await PropertyTaxService.create(request.body);
    return reply.status(201).send(tax);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const tax = await PropertyTaxService.update(
      request.params.id,
      request.body,
    );
    return tax;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await PropertyTaxService.delete(request.params.id);
    return reply.status(204).send();
  }
}
