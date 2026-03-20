import { prisma } from "../../utils/prisma.ts";

export class TenantService {
  static async list() {
    return prisma.tenant.findMany({
      include: {
        leases: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.tenant.findUnique({
      where: { id },
      include: {
        leases: true,
        rentalApplications: true,
        tenantTransactions: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.tenant.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.tenant.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.tenant.delete({
      where: { id },
    });
  }
}
