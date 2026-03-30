import { prisma } from "../../utils/prisma.js";

export class PortalService {
  /** Find the active lease for a given tenant */
  private static async getActiveLease(tenantId: string) {
    return prisma.lease.findFirst({
      where: { tenantId, status: "active" },
      include: {
        unit: { include: { property: true } },
        transactions: { orderBy: { transactionDate: "desc" } },
        documents: true,
        maintenanceRequests: {
          orderBy: { createdAt: "desc" },
        },
      },
    });
  }

  /**
   * Dashboard overview:
   * - active lease summary
   * - amount owed & next due date
   * - last 5 announcements relevant to the unit/property
   */
  static async getDashboard(tenantId: string) {
    const lease = await this.getActiveLease(tenantId);

    let amountOwed = 0;
    let nextDueDate: Date | null = null;
    let unitInfo: Record<string, any> | null = null;

    if (lease) {
      const monthlyRent = lease.unit.monthlyRentAmount;
      const totalPaid = lease.transactions.reduce(
        (sum, t) => sum + t.amount,
        0,
      );

      // Calculate total contract value
      const start = new Date(lease.leaseStartDate);
      const end = new Date(lease.leaseEndDate);
      let months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
      if (end.getDate() < start.getDate()) months -= 1;
      const totalContract = Math.round(months) * monthlyRent;
      amountOwed = Math.max(0, totalContract - totalPaid);

      // Next due = 1st of next month after last payment (or move-in month if no payments)
      const lastTx = lease.transactions[0];
      const baseDate = lastTx
        ? new Date(lastTx.transactionDate)
        : new Date(lease.leaseStartDate);
      nextDueDate = new Date(
        baseDate.getFullYear(),
        baseDate.getMonth() + 1,
        1,
      );

      unitInfo = {
        unitNumber: lease.unit.unitNumber,
        floor: lease.unit.floor,
        propertyName: lease.unit.property.name,
        monthlyRent,
        leaseStart: lease.leaseStartDate,
        leaseEnd: lease.leaseEndDate,
      };
    }

    // Fetch recent announcements
    const announcements = await prisma.announcement.findMany({
      where: { isActive: true },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: { id: true, title: true, body: true, publishedAt: true },
    });

    return {
      lease: lease
        ? {
            id: lease.id,
            status: lease.status,
            ...unitInfo,
          }
        : null,
      amountOwed,
      nextDueDate,
      announcements,
    };
  }

  /** Full transaction ledger for active lease */
  static async getPayments(tenantId: string) {
    const lease = await this.getActiveLease(tenantId);
    if (!lease) return { lease: null, transactions: [], totalPaid: 0 };

    const totalPaid = lease.transactions.reduce(
      (sum, t) => sum + t.amount,
      0,
    );

    return {
      lease: {
        id: lease.id,
        unitNumber: lease.unit.unitNumber,
        propertyName: lease.unit.property.name,
        monthlyRent: lease.unit.monthlyRentAmount,
        leaseStart: lease.leaseStartDate,
        leaseEnd: lease.leaseEndDate,
      },
      transactions: lease.transactions,
      totalPaid,
    };
  }

  /** Create a maintenance request */
  static async createMaintenanceRequest(data: {
    tenantId: string;
    title: string;
    description: string;
    photoUrl?: string;
    permissionToEnter: boolean;
  }) {
    const lease = await prisma.lease.findFirst({
      where: { tenantId: data.tenantId, status: "active" },
    });
    if (!lease) {
      const e = new Error("No active lease found") as Error & {
        statusCode: number;
      };
      e.statusCode = 400;
      throw e;
    }

    return prisma.maintenanceRequest.create({
      data: {
        leaseId: lease.id,
        title: data.title,
        description: data.description,
        photoUrl: data.photoUrl ?? null,
        permissionToEnter: data.permissionToEnter,
      },
    });
  }

  /** Fetch lease documents */
  static async getDocuments(tenantId: string) {
    const lease = await prisma.lease.findFirst({
      where: { tenantId, status: "active" },
      include: { documents: { orderBy: { createdAt: "asc" } } },
    });
    return {
      lease: lease ? { id: lease.id } : null,
      documents: lease?.documents ?? [],
    };
  }
}
