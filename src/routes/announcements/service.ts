import { prisma } from "../../utils/prisma.js";

export class AnnouncementService {
  static async list() {
    return prisma.announcement.findMany({
      select: {
        id: true,
        title: true,
        createdAt: true,
        publishedAt: true,
        isActive: true,

        unitAnnouncements: {
          select: {
            id: true,

            unit: {
              select: {
                id: true,
                unitNumber: true,

                property: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },

        propertyAnnouncements: {
          select: {
            id: true,

            property: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  static async getById(id: string) {
    return prisma.announcement.findUnique({
      where: { id },
      select: {
        id: true,
        title: true,
        body: true,
        createdAt: true,
        publishedAt: true,
        updatedAt: true,
        isActive: true,

        unitAnnouncements: {
          select: {
            id: true,

            unit: {
              select: {
                id: true,
                unitNumber: true,

                property: {
                  select: {
                    id: true,
                    name: true,
                  },
                },
              },
            },
          },
        },

        propertyAnnouncements: {
          select: {
            id: true,

            property: {
              select: {
                id: true,
                name: true,
              },
            },
          },
        },
      },
    });
  }

  static async create(data: any) {
    return prisma.announcement.create({ data });
  }

  static async update(id: string, data: any) {
    const { propertyAnnouncements, unitAnnouncements, ...rest } = data;

    // Use a transaction to ensure atomic update
    return prisma.$transaction(async (tx) => {
      // 1. Update basic announcement info
      const announcement = await tx.announcement.update({
        where: { id },
        data: rest,
      });

      // 2. Handle property links if provided
      if (propertyAnnouncements) {
        // Delete all existing
        await tx.propertyAnnouncement.deleteMany({
          where: { announcementId: id },
        });

        // Create new ones (if using nested create syntax or array of IDs)
        if (propertyAnnouncements.create) {
          await tx.propertyAnnouncement.createMany({
            data: propertyAnnouncements.create.map((p: any) => ({
              ...p,
              announcementId: id,
            })),
          });
        }
      }

      // 3. Handle unit links if provided
      if (unitAnnouncements) {
        // Delete all existing
        await tx.unitAnnouncement.deleteMany({
          where: { announcementId: id },
        });

        // Create new ones
        if (unitAnnouncements.create) {
          await tx.unitAnnouncement.createMany({
            data: unitAnnouncements.create.map((u: any) => ({
              ...u,
              announcementId: id,
            })),
          });
        }
      }

      return announcement;
    });
  }

  static async delete(id: string) {
    return prisma.$transaction(async (tx) => {
      // 1. Delete property links
      await tx.propertyAnnouncement.deleteMany({
        where: { announcementId: id },
      });

      // 2. Delete unit links
      await tx.unitAnnouncement.deleteMany({
        where: { announcementId: id },
      });

      // 3. Delete the announcement itself
      return tx.announcement.delete({
        where: { id },
      });
    });
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
