import { type FastifyPluginAsync } from "fastify";
import { TenantPortalController } from "./controller.ts";

const tenantPortal: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  // ─── Financials ─────────────────────────────────────────────────────────────

  /** GET /api/tenant-portal/:tenantId/balance
   *  Returns the tenant's current net balance. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/balance",
    TenantPortalController.getBalance,
  );

  /** GET /api/tenant-portal/:tenantId/bills
   *  Returns outstanding charges ("My Bills"). */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/bills",
    TenantPortalController.getBills,
  );

  /** GET /api/tenant-portal/:tenantId/payment-history
   *  Returns all completed payments. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/payment-history",
    TenantPortalController.getPaymentHistory,
  );

  /** GET /api/tenant-portal/:tenantId/receipts
   *  Returns downloadable receipts for past payments. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/receipts",
    TenantPortalController.getReceipts,
  );

  // ─── Maintenance ─────────────────────────────────────────────────────────────

  /** POST /api/tenant-portal/:tenantId/maintenance
   *  Report a new maintenance issue. Body: { title, description?, priority?, imageUrls? } */
  fastify.post<{ Params: { tenantId: string }; Body: any }>(
    "/:tenantId/maintenance",
    TenantPortalController.reportIssue,
  );

  /** GET /api/tenant-portal/:tenantId/maintenance
   *  List all maintenance requests submitted by this tenant. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/maintenance",
    TenantPortalController.getMaintenanceRequests,
  );

  /** GET /api/tenant-portal/:tenantId/maintenance/:taskId/status-updates
   *  Uber-style real-time repair status updates for a specific task. */
  fastify.get<{ Params: { tenantId: string; taskId: string } }>(
    "/:tenantId/maintenance/:taskId/status-updates",
    TenantPortalController.getRepairStatusUpdates,
  );

  // ─── Documents ───────────────────────────────────────────────────────────────

  /** GET /api/tenant-portal/:tenantId/lease
   *  Returns the tenant's active lease with unit and property details. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/lease",
    TenantPortalController.getActiveLease,
  );

  /** GET /api/tenant-portal/:tenantId/lease/documents
   *  Returns all documents attached to the tenant's active lease. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/lease/documents",
    TenantPortalController.getLeaseDocuments,
  );

  /** GET /api/tenant-portal/:tenantId/announcements
   *  Returns published announcements for the tenant's property and unit. */
  fastify.get<{ Params: { tenantId: string } }>(
    "/:tenantId/announcements",
    TenantPortalController.getAnnouncements,
  );
};

export default tenantPortal;
