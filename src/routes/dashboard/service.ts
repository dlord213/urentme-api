import { prisma } from "../../utils/prisma.js";

export class DashboardService {
  static async getOverview() {
    // 1. Total Properties
    const totalProperties = await prisma.property.count();

    // 2. Active Leases
    const activeLeases = await prisma.lease.count({
      where: { status: "active" },
    });

    // 3. Total Tenants
    const totalTenants = await prisma.tenant.count({
      where: { isActive: true },
    });

    // 4. Revenue (MTD)
    const now = new Date();
    const firstDayOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    const mtdTransactions = await prisma.transaction.aggregate({
      _sum: { amount: true },
      where: {
        transactionDate: { gte: firstDayOfMonth },
      },
    });
    const revenueMtd = mtdTransactions._sum.amount || 0;

    // 5. Occupancy metrics
    const totalUnits = await prisma.unit.count();
    const occupiedUnits = await prisma.unit.count({
      where: { status: "occupied" },
    });
    const availableUnits = await prisma.unit.count({
      where: { status: "vacant" },
    });
    const maintenanceUnitsList = await prisma.unit.findMany({
      where: {
        OR: [{ isUnderRepair: true }, { isUnderRenovation: true }],
      },
      select: { id: true },
    });
    const maintenanceUnits = maintenanceUnitsList.length;

    // 6. Alerts
    const newApplications = await prisma.lease.count({
      where: { status: "draft" },
    });
    const thirtyDaysFromNow = new Date();
    thirtyDaysFromNow.setDate(now.getDate() + 30);
    const leaseRenewalsDue = await prisma.lease.count({
      where: {
        status: "active",
        leaseEndDate: { lte: thirtyDaysFromNow, gte: now },
      },
    });
    const overdueRents = 0; // Placeholder until overdue logic is implemented

    // 7. Recent Activity (Recent 5 Transactions)
    const recentTransactions = await prisma.transaction.findMany({
      take: 5,
      orderBy: { transactionDate: "desc" },
      include: {
        lease: {
          include: { tenant: true },
        },
      },
    });

    const formatDistanceToNow = (date: Date) => {
      // Basic relative time formatter
      const diffInSeconds = Math.floor(
        (new Date().getTime() - new Date(date).getTime()) / 1000,
      );
      if (diffInSeconds < 60) return `${diffInSeconds} sec ago`;
      if (diffInSeconds < 3600)
        return `${Math.floor(diffInSeconds / 60)} min ago`;
      if (diffInSeconds < 86400)
        return `${Math.floor(diffInSeconds / 3600)} hr ago`;
      return `${Math.floor(diffInSeconds / 86400)} day ago`;
    };

    const recentActivity = recentTransactions.map((t) => ({
      id: t.id,
      type: "payment",
      desc: `Lease payment received from ${t.lease.tenant.firstName} ${t.lease.tenant.lastName}`,
      amount: `₱${t.amount.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`,
      time: formatDistanceToNow(t.transactionDate),
      status: "success",
    }));

    return {
      stats: {
        totalProperties,
        activeLeases,
        totalTenants,
        revenueMtd,
      },
      occupancy: {
        total: totalUnits,
        occupied: occupiedUnits,
        available: availableUnits,
        maintenance: maintenanceUnits,
      },
      alerts: {
        newApplications,
        leaseRenewalsDue,
        overdueRents,
      },
      recentActivity,
    };
  }
}
