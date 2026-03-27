import { prisma } from "../../../utils/prisma.js";

const PAGE_SIZE = 10;

export class OwnerService {
  static async list(page: number = 1, search?: string) {
    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      const parts = search.split(/\s+/).filter(Boolean);
      where.OR = [
        { firstName: { contains: search, mode: "insensitive" } },
        { lastName: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];

      if (parts.length > 1) {
        const first = parts[0];
        const last = parts.slice(1).join(" ");
        where.OR.push({
          AND: [
            { firstName: { contains: first, mode: "insensitive" } },
            { lastName: { contains: last, mode: "insensitive" } },
          ],
        });
      }
    }

    const [data, total] = await Promise.all([
      prisma.owner.findMany({
        where,
        skip,
        take: PAGE_SIZE,
        include: { properties: true },
      }),
      prisma.owner.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  }

  static async getById(id: string) {
    return prisma.owner.findUnique({
      where: { id },
      include: { properties: true },
    });
  }

  static async create(data: any) {
    return prisma.owner.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.owner.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.owner.delete({ where: { id } });
  }

  /** Returns personal profile fields only — no passwordHash. */
  static async getProfile(id: string) {
    return prisma.owner.findUnique({
      where: { id },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        celNum: true,
        street: true,
        barangay: true,
        city: true,
        province: true,
        region: true,
        profilePictureUrl: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  }

  /** Only allows editing personal/contact fields. Admin fields are stripped. */
  static async updateProfile(id: string, data: any) {
    const {
      // Strip fields owners must not self-edit
      passwordHash,
      isActive,
      isFlagged,
      flagReason,
      createdAt,
      updatedAt,
      id: _id,
      ...safe
    } = data;

    return prisma.owner.update({
      where: { id },
      data: safe,
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        celNum: true,
        street: true,
        barangay: true,
        city: true,
        province: true,
        region: true,
        profilePictureUrl: true,
        updatedAt: true,
      },
    });
  }
}
