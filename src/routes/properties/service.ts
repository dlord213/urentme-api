import { prisma } from "../../utils/prisma.js";

const PAGE_SIZE = 10;

export class PropertyService {
  static async list(page: number = 1, search?: string, type?: string) {
    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { street: { contains: search, mode: "insensitive" } },
        { city: { contains: search, mode: "insensitive" } },
        { barangay: { contains: search, mode: "insensitive" } },
        { province: { contains: search, mode: "insensitive" } },
      ];
    }

    if (type) {
      where.type = type;
    }

    const [data, total] = await Promise.all([
      prisma.property.findMany({
        where,
        skip,
        take: PAGE_SIZE,
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
      }),
      prisma.property.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
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
