import { prisma } from "../../utils/prisma.ts";

export class PropertyService {
  static async list() {
    return prisma.property.findMany({
      include: { owner: true, units: true },
    });
  }

  static async getById(id: string) {
    return prisma.property.findUnique({
      where: { id },
      include: { owner: true, units: true },
    });
  }

  static async create(data: any) {
    return prisma.property.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.property.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.property.delete({
      where: { id },
    });
  }
}
