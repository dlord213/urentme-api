import { prisma } from "../../utils/prisma.js";

export class PortalService {
  /** Find ALL active leases for a given tenant (supports multi-unit tenants) */
  private static async getActiveLeases(tenantId: string) {
    return prisma.lease.findMany({
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
   * - all active leases with full property/unit data
   * - per-lease balance & next due date
   * - global totals
   * - property images, unit images, house rules
   * - announcements
   */
  static async getDashboard(tenantId: string) {
    const leases = await this.getActiveLeases(tenantId);

    let totalAmountOwed = 0;
    let earliestNextDue: Date | null = null;

    const leaseDetails = leases.map((lease) => {
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
      const amountOwed = Math.max(0, totalContract - totalPaid);

      totalAmountOwed += amountOwed;

      // Next due = 1st of next month after last payment (or move-in month)
      const lastTx = lease.transactions[0];
      const baseDate = lastTx
        ? new Date(lastTx.transactionDate)
        : new Date(lease.leaseStartDate);
      const nextDueDate = new Date(
        baseDate.getFullYear(),
        baseDate.getMonth() + 1,
        1,
      );

      if (!earliestNextDue || nextDueDate < earliestNextDue) {
        earliestNextDue = nextDueDate;
      }

      const unit = lease.unit;
      const property = unit.property;

      return {
        id: lease.id,
        status: lease.status,
        leaseStart: lease.leaseStartDate,
        leaseEnd: lease.leaseEndDate,
        terms: lease.terms,
        signedAt: lease.signedAt,
        amountOwed,
        totalPaid,
        totalContract,
        nextDueDate,
        monthlyRent,
        // Unit details
        unit: {
          id: unit.id,
          unitNumber: unit.unitNumber,
          floor: unit.floor,
          bedrooms: unit.bedrooms,
          bathrooms: unit.bathrooms,
          squareFeet: unit.squareFeet,
          description: unit.description,
          imageUrls: unit.imageUrls,
          features: unit.features,
          status: unit.status,
        },
        // Property details
        property: {
          id: property.id,
          name: property.name,
          type: property.type,
          street: property.street,
          barangay: property.barangay,
          city: property.city,
          province: property.province,
          region: property.region,
          description: property.description,
          imageUrls: property.imageUrls,
          houseRules: property.houseRules,
        },
        // Recent maintenance requests for this lease
        maintenanceRequests: lease.maintenanceRequests.slice(0, 5).map((mr) => ({
          id: mr.id,
          title: mr.title,
          description: mr.description,
          status: mr.status,
          createdAt: mr.createdAt,
        })),
      };
    });

    // Fetch recent announcements
    const announcements = await prisma.announcement.findMany({
      where: { isActive: true, publishedAt: { not: null } },
      orderBy: { publishedAt: "desc" },
      take: 5,
      select: { id: true, title: true, body: true, publishedAt: true },
    });

    return {
      leases: leaseDetails,
      totalAmountOwed,
      nextDueDate: earliestNextDue,
      announcements,
    };
  }

  /** Full transaction ledger for all active leases */
  static async getPayments(tenantId: string) {
    const leases = await this.getActiveLeases(tenantId);
    if (!leases.length) return { leases: [], transactions: [], totalPaid: 0, totalOwed: 0 };

    let totalPaid = 0;
    let totalOwed = 0;
    const allTransactions: any[] = [];

    const leaseBreakdown = leases.map((lease) => {
      const monthlyRent = lease.unit.monthlyRentAmount;
      const leasePaid = lease.transactions.reduce(
        (sum, t) => sum + t.amount,
        0,
      );

      const start = new Date(lease.leaseStartDate);
      const end = new Date(lease.leaseEndDate);
      let months =
        (end.getFullYear() - start.getFullYear()) * 12 +
        (end.getMonth() - start.getMonth());
      if (end.getDate() < start.getDate()) months -= 1;
      const totalContract = Math.round(months) * monthlyRent;
      const amountOwed = Math.max(0, totalContract - leasePaid);

      totalPaid += leasePaid;
      totalOwed += amountOwed;

      // Enrich each transaction with lease context
      lease.transactions.forEach((t) => {
        allTransactions.push({
          ...t,
          unitNumber: lease.unit.unitNumber,
          propertyName: lease.unit.property.name,
        });
      });

      return {
        id: lease.id,
        unitNumber: lease.unit.unitNumber,
        propertyName: lease.unit.property.name,
        monthlyRent,
        leaseStart: lease.leaseStartDate,
        leaseEnd: lease.leaseEndDate,
        totalPaid: leasePaid,
        totalContract,
        amountOwed,
      };
    });

    // Sort all transactions by date desc
    allTransactions.sort(
      (a, b) =>
        new Date(b.transactionDate).getTime() -
        new Date(a.transactionDate).getTime(),
    );

    return {
      leases: leaseBreakdown,
      transactions: allTransactions,
      totalPaid,
      totalOwed,
    };
  }

  /** Get a single transaction for tenant receipt */
  static async getTransaction(tenantId: string, transactionId: string) {
    const transaction = await prisma.transaction.findFirst({
      where: {
        id: transactionId,
        lease: {
          tenantId, // Ensure it belongs to this tenant
        },
      },
      include: {
        lease: {
          include: {
            tenant: { select: { firstName: true, lastName: true, email: true } },
            unit: {
              include: {
                property: { select: { name: true } },
              },
            },
          },
        },
      },
    });

    return transaction;
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

  /** Fetch maintenance request history for all active leases */
  static async getMaintenanceHistory(tenantId: string) {
    const leases = await prisma.lease.findMany({
      where: { tenantId, status: "active" },
      select: { id: true, unit: { select: { unitNumber: true, property: { select: { name: true } } } } },
    });

    if (!leases.length) return { requests: [] };

    const leaseIds = leases.map((l) => l.id);
    const leaseMap = new Map(leases.map((l) => [l.id, l]));

    const requests = await prisma.maintenanceRequest.findMany({
      where: { leaseId: { in: leaseIds } },
      orderBy: { createdAt: "desc" },
    });

    return {
      requests: requests.map((r) => {
        const lease = leaseMap.get(r.leaseId);
        return {
          ...r,
          unitNumber: lease?.unit?.unitNumber ?? "N/A",
          propertyName: lease?.unit?.property?.name ?? "N/A",
        };
      }),
    };
  }

  /** Fetch lease documents */
  static async getDocuments(tenantId: string) {
    const leases = await prisma.lease.findMany({
      where: { tenantId, status: "active" },
      include: {
        documents: { orderBy: { createdAt: "asc" } },
        unit: { select: { unitNumber: true, property: { select: { name: true } } } },
      },
    });

    const allDocuments = leases.flatMap((lease) =>
      lease.documents.map((doc) => ({
        ...doc,
        unitNumber: lease.unit?.unitNumber ?? "N/A",
        propertyName: lease.unit?.property?.name ?? "N/A",
      })),
    );

    return {
      documents: allDocuments,
    };
  }
}
