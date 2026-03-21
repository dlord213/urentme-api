import { prisma } from "../../../utils/prisma.ts";

export class VendorService {
  static async list() {
    return prisma.vendor.findMany({
      include: {
        workOrders: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.vendor.findUnique({
      where: { id },
      include: {
        workOrders: true,
        bills: true,
        vendorTransactions: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.vendor.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.vendor.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.vendor.delete({
      where: { id },
    });
  }
}
