import { prisma } from "../../utils/prisma";

export class AnnouncementService {
  static async list() {
    return prisma.announcement.findMany({
      include: {
        propertyAnnouncements: { include: { property: true } },
        unitAnnouncements: { include: { unit: true } },
      },
    });
  }

  static async getById(id: string) {
    return prisma.announcement.findUnique({
      where: { id },
      include: {
        propertyAnnouncements: { include: { property: true } },
        unitAnnouncements: { include: { unit: true } },
      },
    });
  }

  static async create(data: any) {
    return prisma.announcement.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.announcement.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.announcement.delete({ where: { id } });
  }

  // ── Property Announcements ──

  static async listPropertyAnnouncements(announcementId: string) {
    return prisma.propertyAnnouncement.findMany({
      where: { announcementId },
      include: { property: true },
    });
  }

  static async addPropertyAnnouncement(data: {
    announcementId: string;
    propertyId: string;
  }) {
    return prisma.propertyAnnouncement.create({ data });
  }

  static async removePropertyAnnouncement(id: string) {
    return prisma.propertyAnnouncement.delete({ where: { id } });
  }

  // ── Unit Announcements ──

  static async listUnitAnnouncements(announcementId: string) {
    return prisma.unitAnnouncement.findMany({
      where: { announcementId },
      include: { unit: true },
    });
  }

  static async addUnitAnnouncement(data: {
    announcementId: string;
    unitId: string;
  }) {
    return prisma.unitAnnouncement.create({ data });
  }

  static async removeUnitAnnouncement(id: string) {
    return prisma.unitAnnouncement.delete({ where: { id } });
  }
}
