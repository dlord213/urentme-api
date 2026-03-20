import { prisma } from "../../utils/prisma.ts";

export class PropertyTaxService {
  static async list() {
    return prisma.propertyTax.findMany({
      include: {
        property: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.propertyTax.findUnique({
      where: { id },
      include: {
        property: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.propertyTax.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.propertyTax.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.propertyTax.delete({
      where: { id },
    });
  }
}
