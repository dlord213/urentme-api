import { prisma } from "../../utils/prisma.ts";

export class TenantPortalService {
  // ─── Financials ─────────────────────────────────────────────────────────────

  /**
   * Calculate the tenant's current balance.
   * Charges / bills increase the balance (amount owed).
   * Payments / credits decrease it.
   */
  static async getBalance(tenantId: string) {
    const transactions = await prisma.transaction.findMany({
      where: { tenantId },
      select: { type: true, amount: true, status: true },
    });

    let balance = 0;
    for (const tx of transactions) {
      if (["CHARGE"].includes(tx.type)) {
        balance += tx.amount;
      } else if (["LEASE_PAYMENT", "CREDIT", "REFUND"].includes(tx.type)) {
        balance -= tx.amount;
      } else if (tx.type === "DEPOSIT_WITHHOLD") {
        balance += tx.amount;
      }
    }

    return { tenantId, balance };
  }

  /**
   * Returns pending/unpaid charge transactions — "My Bills".
   */
  static async getBills(tenantId: string) {
    return prisma.transaction.findMany({
      where: {
        tenantId,
        type: { in: ["CHARGE"] },
        status: { in: ["PENDING"] },
      },
      include: { lease: { select: { id: true, startDate: true, endDate: true } } },
      orderBy: { date: "desc" },
    });
  }

  /**
   * Returns completed payment transactions — "Payment History".
   */
  static async getPaymentHistory(tenantId: string) {
    return prisma.transaction.findMany({
      where: {
        tenantId,
        type: { in: ["LEASE_PAYMENT", "CREDIT", "REFUND"] },
      },
      include: { lease: { select: { id: true } } },
      orderBy: { date: "desc" },
    });
  }

  /**
   * Returns completed LEASE_PAYMENT transactions usable as receipts.
   */
  static async getReceipts(tenantId: string) {
    return prisma.transaction.findMany({
      where: {
        tenantId,
        type: "LEASE_PAYMENT",
        status: "COMPLETED",
      },
      include: {
        lease: {
          include: {
            unit: {
              include: { property: { select: { id: true, name: true, address: true } } },
            },
          },
        },
      },
      orderBy: { date: "desc" },
    });
  }

  // ─── Maintenance ─────────────────────────────────────────────────────────────

  /**
   * Creates a TENANT_REQUEST task tied to the tenant and their active unit.
   */
  static async reportIssue(tenantId: string, data: {
    title: string;
    description?: string;
    priority?: string;
    imageUrls?: string[];
  }) {
    // Resolve tenant's current active lease to get the unit
    const activeLease = await prisma.lease.findFirst({
      where: { tenantId, status: "ACTIVE" },
      select: { unitId: true },
    });

    return prisma.task.create({
      data: {
        type: "TENANT_REQUEST",
        status: "UNASSIGNED",
        priority: (data.priority as any) ?? "MEDIUM",
        title: data.title,
        description: data.description,
        imageUrls: data.imageUrls ?? [],
        tenantId,
        unitId: activeLease?.unitId ?? undefined,
      },
    });
  }

  /**
   * Returns all TENANT_REQUEST tasks for this tenant.
   */
  static async getMaintenanceRequests(tenantId: string) {
    return prisma.task.findMany({
      where: { tenantId, type: "TENANT_REQUEST" },
      include: {
        unit: { select: { id: true, unitNumber: true } },
        assignedTo: { select: { id: true, firstName: true, lastName: true } },
        repairStatusUpdates: { orderBy: { createdAt: "asc" } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  /**
   * Returns the status update timeline for a single task.
   */
  static async getRepairStatusUpdates(taskId: string) {
    return prisma.repairStatusUpdate.findMany({
      where: { taskId },
      orderBy: { createdAt: "asc" },
    });
  }

  // ─── Documents ───────────────────────────────────────────────────────────────

  /**
   * Returns the tenant's currently active lease with full context.
   */
  static async getActiveLease(tenantId: string) {
    return prisma.lease.findFirst({
      where: { tenantId, status: "ACTIVE" },
      include: {
        unit: {
          include: { property: true },
        },
        signatureRequests: true,
      },
    });
  }

  /**
   * Returns all documents attached to the tenant's active lease.
   */
  static async getLeaseDocuments(tenantId: string) {
    const lease = await prisma.lease.findFirst({
      where: { tenantId, status: "ACTIVE" },
      select: { id: true },
    });
    if (!lease) return [];

    return prisma.leaseDocument.findMany({
      where: { leaseId: lease.id },
      orderBy: { createdAt: "desc" },
    });
  }

  /**
   * Returns PUBLISHED announcements scoped to the tenant's property and/or unit.
   */
  static async getAnnouncements(tenantId: string) {
    // Resolve active lease → unit → property
    const activeLease = await prisma.lease.findFirst({
      where: { tenantId, status: "ACTIVE" },
      include: { unit: { select: { id: true, propertyId: true } } },
    });

    if (!activeLease) return [];

    const { propertyId } = activeLease.unit;
    const unitId = activeLease.unit.id;

    return prisma.announcement.findMany({
      where: {
        status: "PUBLISHED",
        OR: [
          { propertyId, unitId: null }, // property-wide broadcast
          { propertyId, unitId },       // unit-specific broadcast
        ],
      },
      orderBy: { publishedAt: "desc" },
    });
  }
}
