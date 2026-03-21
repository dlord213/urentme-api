import { prisma } from "../../../utils/prisma.ts";

export class RentalApplicationService {
  static async list() {
    return prisma.rentalApplication.findMany({
      include: {
        unit: true,
        prospect: true,
        tenant: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.rentalApplication.findUnique({
      where: { id },
      include: {
        unit: true,
        prospect: true,
        tenant: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.rentalApplication.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.rentalApplication.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.rentalApplication.delete({
      where: { id },
    });
  }
}
