import { prisma } from "../../utils/prisma.ts";

export class AnnouncementService {
  static async list(filters?: { propertyId?: string; unitId?: string }) {
    return prisma.announcement.findMany({
      where: {
        ...(filters?.propertyId ? { propertyId: filters.propertyId } : {}),
        ...(filters?.unitId ? { unitId: filters.unitId } : {}),
      },
      include: {
        property: true,
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  }

  static async getById(id: string) {
    return prisma.announcement.findUnique({
      where: { id },
      include: {
        property: true,
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async create(data: any) {
    return prisma.announcement.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.announcement.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.announcement.delete({
      where: { id },
    });
  }
}

