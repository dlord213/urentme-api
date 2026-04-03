import { type FastifyRequest, type FastifyReply } from "fastify";
import { MaintenanceService } from "./service.js";

export class MaintenanceController {
  static async list(
    request: FastifyRequest<{
      Querystring: { status?: string; search?: string };
    }>,
    reply: FastifyReply,
  ) {
    const { id: ownerId } = request.user as { id: string };
    const { status, search } = request.query;
    const filters: { status?: string; search?: string } = {};
    if (status) filters.status = status;
    if (search) filters.search = search;
    return MaintenanceService.list(ownerId, filters);
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const { id: ownerId } = request.user as { id: string };
    const result = await MaintenanceService.getById(request.params.id, ownerId);
    if (!result) return reply.notFound("Maintenance request not found");
    return result;
  }

  static async updateStatus(
    request: FastifyRequest<{
      Params: { id: string };
      Body: { status: string };
    }>,
    reply: FastifyReply,
  ) {
    const { id: ownerId } = request.user as { id: string };
    const { status } = request.body;

    const validStatuses = ["open", "in-progress", "resolved"];
    if (!validStatuses.includes(status)) {
      return reply.badRequest(`Invalid status. Must be one of: ${validStatuses.join(", ")}`);
    }

    const result = await MaintenanceService.updateStatus(request.params.id, ownerId, status);
    return result;
  }
}
