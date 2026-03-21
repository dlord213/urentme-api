import { type FastifyReply, type FastifyRequest } from "fastify";
import { TenantPortalService } from "./service.ts";

type TenantParams = { tenantId: string };
type TaskParams = { tenantId: string; taskId: string };

export class TenantPortalController {
  // ─── Financials ─────────────────────────────────────────────────────────────

  static async getBalance(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getBalance(request.params.tenantId);
  }

  static async getBills(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getBills(request.params.tenantId);
  }

  static async getPaymentHistory(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getPaymentHistory(request.params.tenantId);
  }

  static async getReceipts(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getReceipts(request.params.tenantId);
  }

  // ─── Maintenance ─────────────────────────────────────────────────────────────

  static async reportIssue(
    request: FastifyRequest<{ Params: TenantParams; Body: any }>,
    reply: FastifyReply,
  ) {
    const task = await TenantPortalService.reportIssue(
      request.params.tenantId,
      request.body,
    );
    return reply.status(201).send(task);
  }

  static async getMaintenanceRequests(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getMaintenanceRequests(request.params.tenantId);
  }

  static async getRepairStatusUpdates(
    request: FastifyRequest<{ Params: TaskParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getRepairStatusUpdates(request.params.taskId);
  }

  // ─── Documents ───────────────────────────────────────────────────────────────

  static async getActiveLease(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    const lease = await TenantPortalService.getActiveLease(request.params.tenantId);
    if (!lease) return reply.notFound("No active lease found for this tenant");
    return lease;
  }

  static async getLeaseDocuments(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getLeaseDocuments(request.params.tenantId);
  }

  static async getAnnouncements(
    request: FastifyRequest<{ Params: TenantParams }>,
    reply: FastifyReply,
  ) {
    return TenantPortalService.getAnnouncements(request.params.tenantId);
  }
}
