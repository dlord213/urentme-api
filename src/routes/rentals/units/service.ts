import { prisma } from "../../../utils/prisma.ts";

export class UnitService {
  static async list(userId: string) {
    return prisma.unit.findMany({
      include: {
        property: true,
        leases: {
          include: {
            tenant: true,
          },
        },
      },
      where: {
        property: {
          is: {
            ownerId: userId,
          },
        },
      },
    });
  }

  static async getById(id: string) {
    return prisma.unit.findUnique({
      where: { id },
      include: { property: true, leases: true },
    });
  }

  static async create(data: any) {
    return prisma.unit.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.unit.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.unit.delete({
      where: { id },
    });
  }
}
