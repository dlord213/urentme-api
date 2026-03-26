import { prisma } from "../../utils/prisma";

export class PropertyService {
  static async list() {
    return prisma.property.findMany({
      select: {
        id: true,
        name: true,
        type: true,
        street: true,
        barangay: true,
        city: true,
        province: true,
        region: true,
        isActive: true,
        isUnderRepair: true,
        isUnderRenovation: true,

        units: {
          select: {
            id: true,
            status: true,
          },
        },
      },
    });
  }

  static async getById(id: string) {
    return prisma.property.findUnique({
      where: { id },
      select: {
        name: true,
        type: true,
        street: true,
        barangay: true,
        city: true,
        province: true,
        region: true,
        yearBuilt: true,
        description: true,
        imageUrls: true,
        houseRules: true,
        isActive: true,
        isUnderRepair: true,
        isUnderRenovation: true,

        units: {
          select: {
            id: true,
            unitNumber: true,
            floor: true,
            monthlyRentAmount: true,
            status: true,
            isActive: true,
            isUnderRepair: true,
            isUnderRenovation: true,
          },
        },
      },
    });
  }

  static async create(data: any) {
    return prisma.property.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.property.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.property.delete({ where: { id } });
  }
}
