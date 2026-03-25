import { prisma } from "../../utils/prisma.ts";

export class LeaseService {
  private static async checkAndExpireLeases() {
    const now = new Date();
    await prisma.lease.updateMany({
      where: {
        status: "active",
        leaseEndDate: {
          lte: now,
        },
      },
      data: {
        status: "expired",
      },
    });
  }

  static async list() {
    await this.checkAndExpireLeases();
    return prisma.lease.findMany({
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
    });
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
    return prisma.lease.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.lease.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.lease.delete({ where: { id } });
  }
}
