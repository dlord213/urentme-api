import { prisma } from "../../utils/prisma.js";

const PAGE_SIZE = 10;

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
    return prisma.lease.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.lease.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.lease.delete({ where: { id } });
  }
}
