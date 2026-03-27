import { type FastifyReply, type FastifyRequest } from "fastify";
import { UnitService } from "./service.js";

export class UnitController {
  static async list(request: FastifyRequest<{ Querystring: { page?: string; search?: string; status?: string } }>, reply: FastifyReply) {
    const page = Math.max(1, parseInt(request.query.page || "1", 10) || 1);
    const search = request.query.search || undefined;
    const status = request.query.status || undefined;
    return UnitService.list(page, search, status);
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const unit = await UnitService.getById(request.params.id);
    if (!unit) return reply.notFound();
    return unit;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const unit = await UnitService.create(request.body);
    return reply.status(201).send(unit);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return UnitService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await UnitService.delete(request.params.id);
    return reply.status(204).send();
  }

  static async reserve(
    request: FastifyRequest<{ Params: { id: string }; Body: { tenantId: string; leaseStartDate: string; leaseEndDate: string } }>,
    reply: FastifyReply,
  ) {
    try {
      const { tenantId, leaseStartDate, leaseEndDate } = request.body;
      if (!tenantId || !leaseStartDate || !leaseEndDate) {
        return reply.status(400).send({ error: "tenantId, leaseStartDate, and leaseEndDate are required" });
      }
      const result = await UnitService.reserve(request.params.id, tenantId, leaseStartDate, leaseEndDate);
      return result;
    } catch (err: any) {
      return reply.status(400).send({ error: err.message });
    }
  }
}
