import { prisma } from "../../utils/prisma.js";
import { EmailService } from "../email/service.js";

const PAGE_SIZE = 10;

export class UnitService {
  static async list(page: number = 1, search?: string, status?: string, limit: number = PAGE_SIZE) {
    const skip = (page - 1) * limit;

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
        take: limit,
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
      totalPages: Math.ceil(total / limit),
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
        features: true,
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
    if (data.status === "vacant") {
      const oldUnit = await prisma.unit.findUnique({ where: { id } });
      if (oldUnit?.status === "reserved") {
        // Automatically delete the draft lease (assigned tenant) to fully cancel the reservation
        await prisma.lease.deleteMany({
          where: { unitId: id, status: "draft" }
        });
      }
    }

    const { propertyId, sqm, ...updateData } = data;
    if (propertyId) {
      updateData.property = { connect: { id: propertyId } };
    }
    if (sqm !== undefined) {
      updateData.squareFeet = sqm;
    }

    return prisma.unit.update({ where: { id }, data: updateData });
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
    const unit = await prisma.unit.findUnique({ 
      where: { id: unitId },
      include: { property: true }
    });
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
          tenant: { select: { id: true, firstName: true, lastName: true, email: true } },
        },
      }),
    ]);

    if (lease.tenant?.email) {
      const html = EmailService.generateUrentMeEmail(
        lease.tenant.firstName,
        "Unit Reserved",
        [
          `Great news! The unit <strong>${unit.property?.name || "Property"} - Unit ${unit.unitNumber}</strong> has been successfully reserved for you.`,
          `Your property manager is currently processing the documentation. You will be notified once the final lease is ready for review and signing.`
        ]
      );
      EmailService.sendEmail(lease.tenant.email, "Your Unit is Reserved", "Your unit has been reserved.", html).catch(console.error);
    }

    return { unit: updatedUnit, lease };
  }
}
