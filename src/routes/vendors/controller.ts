import { FastifyReply, FastifyRequest } from "fastify";
import { VendorService } from "./service.js";

export class VendorController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await VendorService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const vendor = await VendorService.getById(request.params.id);
    if (!vendor) return reply.notFound();
    return vendor;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const vendor = await VendorService.create(request.body);
    return reply.status(201).send(vendor);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const vendor = await VendorService.update(request.params.id, request.body);
    return vendor;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await VendorService.delete(request.params.id);
    return reply.status(204).send();
  }
}
