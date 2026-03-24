import { prisma } from "../../utils/prisma.ts";

export class TransactionService {
  static async list() {
    return prisma.transaction.findMany({
      include: {
        lease: {
          include: {
            tenant: true,
            unit: true,
          },
        },
      },
    });
  }

  static async getById(id: string) {
    return prisma.transaction.findUnique({
      where: { id },
      include: {
        lease: {
          include: {
            tenant: true,
            unit: { include: { property: true } },
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
