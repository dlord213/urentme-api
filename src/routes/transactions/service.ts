import { prisma } from "../../utils/prisma.js";

const PAGE_SIZE = 10;

export class TransactionService {
  static async list(page: number = 1, search?: string, month?: string) {
    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      const parts = search.split(/\s+/).filter(Boolean);
      where.OR = [
        { reference: { contains: search, mode: "insensitive" } },
        { lease: { tenant: { firstName: { contains: search, mode: "insensitive" } } } },
        { lease: { tenant: { lastName: { contains: search, mode: "insensitive" } } } },
      ];

      if (parts.length > 1) {
        const first = parts[0];
        const last = parts.slice(1).join(" ");
        where.OR.push({
          lease: {
            tenant: {
              AND: [
                { firstName: { contains: first, mode: "insensitive" } },
                { lastName: { contains: last, mode: "insensitive" } },
              ],
            },
          },
        });
      }
    }

    if (month) {
      // month format: "YYYY-MM"
      const [year, mon] = month.split("-").map(Number);
      if (year && mon) {
        const startDate = new Date(year, mon - 1, 1);
        const endDate = new Date(year, mon, 1);
        where.transactionDate = {
          gte: startDate,
          lt: endDate,
        };
      }
    }

    const [data, total] = await Promise.all([
      prisma.transaction.findMany({
        where,
        skip,
        take: PAGE_SIZE,
        select: {
          id: true,
          amount: true,
          notes: true,
          reference: true,
          transactionDate: true,

          lease: {
            select: {
              id: true,

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

              tenant: {
                select: {
                  id: true,
                  firstName: true,
                  lastName: true,
                },
              },
            },
          },
        },
      }),
      prisma.transaction.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  }

  static async getById(id: string) {
    return prisma.transaction.findUnique({
      where: { id },
      select: {
        id: true,
        amount: true,
        notes: true,
        reference: true,
        transactionDate: true,

        lease: {
          select: {
            id: true,
            notes: true,

            unit: {
              select: {
                id: true,
                unitNumber: true,
                floor: true,

                property: {
                  select: {
                    id: true,
                    name: true,

                    owner: {
                      select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                      },
                    },
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
          },
        },
      },
    });
  }

  static async create(data: any) {
    return prisma.transaction.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.transaction.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.transaction.delete({ where: { id } });
  }
}
