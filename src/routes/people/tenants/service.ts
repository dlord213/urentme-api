import { prisma } from "../../../utils/prisma.js";

const PAGE_SIZE = 10;

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

  static async list(page: number = 1, search?: string, status?: string) {
    await this.checkAndExpireLeases();

    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      const parts = search.split(/\s+/).filter(Boolean);
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];

      if (parts.length > 1) {
        const first = parts[0];
        const last = parts.slice(1).join(" ");
        where.OR.push({
          AND: [
            { firstName: { contains: first, mode: "insensitive" } },
            { lastName: { contains: last, mode: "insensitive" } },
          ],
        });
      }
    }

    if (status === "active") {
      where.isActive = true;
    } else if (status === "inactive") {
      where.isActive = false;
    }

    const [data, total] = await Promise.all([
      prisma.tenant.findMany({
        where,
        skip,
        take: PAGE_SIZE,
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
      }),
      prisma.tenant.count({ where }),
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
