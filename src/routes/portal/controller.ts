import { type FastifyRequest, type FastifyReply } from "fastify";
import { PortalService } from "./service.js";

export class PortalController {
  static async dashboard(request: FastifyRequest, reply: FastifyReply) {
    const { tenantId } = request.tenantUser!;
    return PortalService.getDashboard(tenantId);
  }

  static async payments(request: FastifyRequest, reply: FastifyReply) {
    const { tenantId } = request.tenantUser!;
    return PortalService.getPayments(tenantId);
  }

  static async createMaintenance(
    request: FastifyRequest<{
      Body: {
        title: string;
        description: string;
        photoUrl?: string;
        permissionToEnter?: boolean;
      };
    }>,
    reply: FastifyReply,
  ) {
    const { tenantId } = request.tenantUser!;
    const { title, description, photoUrl, permissionToEnter } = request.body;
    if (!title || !description) {
      return reply.badRequest("title and description are required");
    }
    const result = await PortalService.createMaintenanceRequest({
      tenantId,
      title,
      description,
      ...(photoUrl !== undefined ? { photoUrl } : {}),
      permissionToEnter: permissionToEnter ?? false,
    });
    return reply.status(201).send(result);
  }

  static async maintenanceHistory(request: FastifyRequest, reply: FastifyReply) {
    const { tenantId } = request.tenantUser!;
    return PortalService.getMaintenanceHistory(tenantId);
  }

  static async documents(request: FastifyRequest, reply: FastifyReply) {
    const { tenantId } = request.tenantUser!;
    return PortalService.getDocuments(tenantId);
  }

  static async getTransaction(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const { tenantId } = request.tenantUser!;
    const transaction = await PortalService.getTransaction(tenantId, request.params.id);
    if (!transaction) return reply.notFound("Transaction not found");
    return transaction;
  }
}
