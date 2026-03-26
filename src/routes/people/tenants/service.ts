import { prisma } from "../../../utils/prisma.js";

export class TenantService {
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
    return prisma.tenant.findMany({
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        celNum: true,
        isActive: true,
        isFlagged: true,

        leases: {
          select: {
            id: true,
            status: true,
            leaseEndDate: true,

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
        },
      },
    });
  }

  static async getById(id: string) {
    await this.checkAndExpireLeases();
    return prisma.tenant.findUnique({
      where: { id },
      include: {
        leases: {
          include: {
            unit: {
              include: {
                property: true,
              },
            },
            transactions: true,
          },
        },
      },
    });
  }

  static async create(data: any) {
    return prisma.tenant.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.tenant.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.tenant.delete({ where: { id } });
  }
}
