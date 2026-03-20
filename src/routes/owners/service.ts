import { prisma } from "../../utils/prisma.ts";

export class OwnerService {
  static async list() {
    return prisma.owner.findMany({
      include: {
        properties: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.owner.findUnique({
      where: { id },
      include: {
        properties: true,
        contributions: true,
        distributions: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.owner.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.owner.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.owner.delete({
      where: { id },
    });
  }
}
