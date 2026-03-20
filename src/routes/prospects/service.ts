import { prisma } from "../../utils/prisma.ts";

export class ProspectService {
  static async list() {
    return prisma.prospect.findMany({
      include: {
        interestedUnit: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.prospect.findUnique({
      where: { id },
      include: {
        interestedUnit: true,
        rentalApplications: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.prospect.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.prospect.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.prospect.delete({
      where: { id },
    });
  }
}
