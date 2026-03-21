import { prisma } from "../../../utils/prisma.ts";

export class PublicUtilityService {
  static async list() {
    return prisma.publicUtility.findMany({
      include: {
        property: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.publicUtility.findUnique({
      where: { id },
      include: {
        property: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.publicUtility.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.publicUtility.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.publicUtility.delete({
      where: { id },
    });
  }
}
