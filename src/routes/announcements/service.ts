import { prisma } from "../../utils/prisma.js";

const PAGE_SIZE = 10;

export class AnnouncementService {
  static async list(page: number = 1, search?: string, status?: string) {
    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      where.OR = [
        { title: { contains: search, mode: "insensitive" } },
        { body: { contains: search, mode: "insensitive" } },
      ];
    }

    if (status === "sent") {
      where.publishedAt = { not: null };
    } else if (status === "draft") {
      where.publishedAt = null;
    }

    const [data, total] = await Promise.all([
      prisma.announcement.findMany({
        where,
        skip,
        take: PAGE_SIZE,
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
      }),
      prisma.announcement.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
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

    return prisma.$transaction(async (tx) => {
      const announcement = await tx.announcement.update({
        where: { id },
        data: rest,
      });

      if (propertyAnnouncements) {
        await tx.propertyAnnouncement.deleteMany({
          where: { announcementId: id },
        });

        if (propertyAnnouncements.create) {
          await tx.propertyAnnouncement.createMany({
            data: propertyAnnouncements.create.map((p: any) => ({
              ...p,
              announcementId: id,
            })),
          });
        }
      }

      if (unitAnnouncements) {
        await tx.unitAnnouncement.deleteMany({
          where: { announcementId: id },
        });

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
      await tx.propertyAnnouncement.deleteMany({
        where: { announcementId: id },
      });

      await tx.unitAnnouncement.deleteMany({
        where: { announcementId: id },
      });

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
