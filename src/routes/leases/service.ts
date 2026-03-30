import { prisma } from "../../utils/prisma.js";
import { EmailService } from "../email/service.js";

const PAGE_SIZE = 10;

export class LeaseService {
  private static async checkAndExpireLeases() {
    const now = new Date();
    const sevenDaysFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);

    // 1. Handle actual expirations (past leaseEndDate)
    const toExpire = await prisma.lease.findMany({
      where: {
        status: { in: ["active", "expiring"] },
        leaseEndDate: { lte: now },
      },
      include: { tenant: true, unit: { include: { property: true } } },
    });

    if (toExpire.length > 0) {
      await prisma.lease.updateMany({
        where: { id: { in: toExpire.map((l) => l.id) } },
        data: { status: "expired" },
      });

      for (const lease of toExpire) {
        if (lease.tenant.email) {
          const html = EmailService.generateUrentMeEmail(
             lease.tenant.firstName,
             "Lease Ended",
             [
               `This is a formal notification that your lease agreement for <strong>${lease.unit.property.name} - Unit ${lease.unit.unitNumber}</strong> has officially ended as of ${now.toLocaleDateString()}.`,
               `Thank you for renting with us. Please ensure all move-out procedures are completed, and contact your property manager if you have any questions regarding your deposit or lease renewal.`
             ]
          );
          EmailService.sendEmail(lease.tenant.email, "Your Lease Has Expired", "Your lease has ended.", html).catch(console.error);
        }
      }
    }

    // 2. Handle 1-week expiring notices
    const toExpiring = await prisma.lease.findMany({
      where: {
        status: "active",
        leaseEndDate: { lte: sevenDaysFromNow, gt: now },
      },
      include: { tenant: true, unit: { include: { property: true } } },
    });

    if (toExpiring.length > 0) {
      await prisma.lease.updateMany({
        where: { id: { in: toExpiring.map((l) => l.id) } },
        data: { status: "expiring" },
      });

      for (const lease of toExpiring) {
        if (lease.tenant.email) {
          const endStr = new Date(lease.leaseEndDate).toLocaleDateString();
           const html = EmailService.generateUrentMeEmail(
             lease.tenant.firstName,
             "Lease Expiring Soon",
             [
               `This is a reminder that your lease agreement for <strong>${lease.unit.property.name} - Unit ${lease.unit.unitNumber}</strong> is expiring in less than 7 days, on <strong>${endStr}</strong>.`,
               `If you wish to renew your lease or discuss move-out arrangements, please contact your property manager immediately.`
             ]
          );
          EmailService.sendEmail(lease.tenant.email, "Your Lease is Expiring Soon", "Your lease is expiring in 7 days.", html).catch(console.error);
        }
      }
    }
  }

  static async list(page: number = 1, search?: string, status?: string) {
    await this.checkAndExpireLeases();

    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      const parts = search.split(/\s+/).filter(Boolean);
      where.OR = [
        { tenant: { firstName: { contains: search, mode: "insensitive" } } },
        { tenant: { lastName: { contains: search, mode: "insensitive" } } },
        { unit: { unitNumber: { contains: search, mode: "insensitive" } } },
        { unit: { property: { name: { contains: search, mode: "insensitive" } } } },
      ];

      if (parts.length > 1) {
        const first = parts[0];
        const last = parts.slice(1).join(" ");
        where.OR.push({
          tenant: {
            AND: [
              { firstName: { contains: first, mode: "insensitive" } },
              { lastName: { contains: last, mode: "insensitive" } },
            ],
          },
        });
      }
    }

    if (status) {
      where.status = status;
    }

    const [data, total] = await Promise.all([
      prisma.lease.findMany({
        where,
        skip,
        take: PAGE_SIZE,
        select: {
          id: true,
          leaseStartDate: true,
          leaseEndDate: true,
          status: true,

          tenant: {
            select: {
              id: true,
              firstName: true,
              lastName: true,
            },
          },

          unit: {
            select: {
              id: true,
              unitNumber: true,
              floor: true,

              property: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      }),
      prisma.lease.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  }

  static async getById(id: string) {
    await this.checkAndExpireLeases();
    return prisma.lease.findUnique({
      where: { id },
      select: {
        id: true,
        leaseStartDate: true,
        leaseEndDate: true,
        terms: true,
        notes: true,
        status: true,
        signedAt: true,
        terminatedAt: true,
        terminationReason: true,

        unit: {
          select: {
            id: true,
            unitNumber: true,
            floor: true,
            monthlyRentAmount: true,

            property: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },

        tenant: {
          select: {
            id: true,
            firstName: true,
            lastName: true,
            email: true,
          },
        },

        transactions: {
          select: {
            id: true,
            amount: true,
            reference: true,
            transactionDate: true,
          },
        },
      },
    });
  }

  static async create(data: any) {
    const lease = await prisma.lease.create({ 
      data,
      include: { tenant: true, unit: { include: { property: true } } }
    });

    return lease;
  }

  static async update(id: string, data: any) {
    const oldLease = await prisma.lease.findUnique({ where: { id } });

    const lease = await prisma.lease.update({ 
      where: { id }, 
      data,
      include: { tenant: true, unit: { include: { property: true } } }
    });

    if (oldLease && oldLease.status !== lease.status) {
      if (lease.status === "terminated" && lease.tenant?.email) {
        const html = EmailService.generateUrentMeEmail(
          lease.tenant.firstName,
          "Lease Terminated",
          [
            `This is an official notice that your lease agreement for <strong>${lease.unit.property.name} - Unit ${lease.unit.unitNumber}</strong> has been terminated by the property manager.`,
            `Reason provided: <i>${lease.terminationReason || "No specific reason provided."}</i>`,
            `Please contact the administration immediately to discuss the move-out process and final settlement.`
          ]
        );
        EmailService.sendEmail(lease.tenant.email, "Lease Terminated Notice", "Your lease has been terminated.", html).catch(console.error);
      }
    }

    return lease;
  }

  static async delete(id: string) {
    return prisma.lease.delete({ where: { id } });
  }
}
