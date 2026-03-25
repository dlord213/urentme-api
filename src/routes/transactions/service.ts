import { prisma } from "../../utils/prisma";

export class TransactionService {
  static async list() {
    return prisma.transaction.findMany({
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
    });
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
