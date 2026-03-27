import { prisma } from "../../utils/prisma.js";

const PAGE_SIZE = 10;

export class UnitService {
  static async list(page: number = 1, search?: string, status?: string) {
    const skip = (page - 1) * PAGE_SIZE;

    const where: any = {};

    if (search) {
      const parts = search.split(/\s+/).filter(Boolean);
      where.OR = [
        { unitNumber: { contains: search, mode: "insensitive" } },
        { property: { name: { contains: search, mode: "insensitive" } } },
        { leases: { some: { tenant: { firstName: { contains: search, mode: "insensitive" } } } } },
        { leases: { some: { tenant: { lastName: { contains: search, mode: "insensitive" } } } } },
      ];

      if (parts.length > 1) {
        const first = parts[0];
        const last = parts.slice(1).join(" ");
        where.OR.push({
          leases: {
            some: {
              tenant: {
                AND: [
                  { firstName: { contains: first, mode: "insensitive" } },
                  { lastName: { contains: last, mode: "insensitive" } },
                ],
              },
            },
          },
        });
      }
    }

    if (status) {
      where.status = status;
    }

    const [data, total] = await Promise.all([
      prisma.unit.findMany({
        where,
        skip,
        take: PAGE_SIZE,
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
            where: {
              status: { in: ["active", "draft"] },
            },
            orderBy: { leaseStartDate: "desc" },
            select: {
              id: true,
              status: true,
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
      }),
      prisma.unit.count({ where }),
    ]);

    return {
      data,
      total,
      page,
      totalPages: Math.ceil(total / PAGE_SIZE),
    };
  }

  static async getById(id: string) {
    return prisma.unit.findUnique({
      where: { id },
      select: {
        id: true,
        unitNumber: true,
        floor: true,
        monthlyRentAmount: true,
        imageUrls: true,
        description: true,
        squareFeet: true,
        bedrooms: true,
        bathrooms: true,
        status: true,
        isActive: true,
        isUnderRepair: true,
        isUnderRenovation: true,

        property: {
          select: {
            id: true,
            name: true,
            street: true,
            barangay: true,
            city: true,
            province: true,
            region: true,
          },
        },

        leases: {
          select: {
            id: true,
            status: true,
            leaseStartDate: true,
            leaseEndDate: true,

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

  static async create(data: any) {
    return prisma.unit.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.unit.update({ where: { id }, data });
  }

  static async delete(id: string) {
    return prisma.unit.delete({ where: { id } });
  }

  /**
   * Reserve a vacant unit for a tenant.
   * Sets unit status to "reserved" and creates a draft lease.
   */
  static async reserve(
    unitId: string,
    tenantId: string,
    leaseStartDate: string,
    leaseEndDate: string,
  ) {
    // Validate unit exists and is vacant
    const unit = await prisma.unit.findUnique({ where: { id: unitId } });
    if (!unit) throw new Error("Unit not found");
    if (unit.status !== "vacant") throw new Error("Only vacant units can be reserved");

    // Atomic transaction: update unit + create draft lease
    const [updatedUnit, lease] = await prisma.$transaction([
      prisma.unit.update({
        where: { id: unitId },
        data: { status: "reserved" },
      }),
      prisma.lease.create({
        data: {
          unitId,
          tenantId,
          status: "draft",
          leaseStartDate: new Date(leaseStartDate),
          leaseEndDate: new Date(leaseEndDate),
        },
        include: {
          tenant: { select: { id: true, firstName: true, lastName: true } },
        },
      }),
    ]);

    return { unit: updatedUnit, lease };
  }
}
