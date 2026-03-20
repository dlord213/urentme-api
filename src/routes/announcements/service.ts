import { prisma } from "../../utils/prisma.ts";

export class AnnouncementService {
  static async list() {
    return prisma.announcement.findMany({
      include: {
        property: true,
        createdBy: { select: { id: true, firstName: true, lastName: true } },
      },
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
