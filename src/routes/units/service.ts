import { prisma } from "../../utils/prisma.ts";

export class UnitService {
  static async list() {
    return prisma.unit.findMany({
      select: {
        id: true,
        unitNumber: true,
        monthlyRentAmount: true,
        bedrooms: true,
        status: true,
        isActive: true,
        isUnderRepair: true,
        isUnderRenovation: true,

        property: {
          select: {
            id: true,
            name: true,
          },
        },

        leases: {
          select: {
            id: true,

            tenant: {
              select: {
                id: true,
                firstName: true,
                lastName: true,
              },
            },
          },
        },
      },
    });
  }

  static async getById(id: string) {
    return prisma.unit.findUnique({
      where: { id },
      include: {
        property: true,
        leases: {
          include: { tenant: true },
        },
        unitAnnouncements: {
          include: { announcement: true },
        },
      },
    });
  }

  static async create(data: any) {
    return prisma.unit.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.unit.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.unit.delete({ where: { id } });
  }
}
