import { prisma } from "../../utils/prisma.ts";

export class LeaseService {
  static async list() {
    return prisma.lease.findMany({
      include: {
        unit: true,
        tenant: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.lease.findUnique({
      where: { id },
      include: {
        unit: true,
        tenant: true,
        transactions: true,
        leaseDocuments: true,
        renewals: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.lease.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.lease.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.lease.delete({
      where: { id },
    });
  }
}
