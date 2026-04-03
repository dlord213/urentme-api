import { prisma } from "../../utils/prisma.js";

export class MaintenanceService {
  /** List all maintenance requests for the owner's properties */
  static async list(ownerId: string, filters?: { status?: string; search?: string }) {
    const where: any = {
      lease: {
        unit: {
          property: {
            ownerId,
          },
        },
      },
    };

    if (filters?.status) {
      where.status = filters.status;
    }

    if (filters?.search) {
      where.OR = [
        { title: { contains: filters.search, mode: "insensitive" } },
        { description: { contains: filters.search, mode: "insensitive" } },
      ];
    }

    const requests = await prisma.maintenanceRequest.findMany({
      where,
      include: {
        lease: {
          include: {
            tenant: {
              select: { id: true, firstName: true, lastName: true, email: true, celNum: true },
            },
            unit: {
              include: {
                property: {
                  select: { id: true, name: true },
                },
              },
            },
          },
        },
      },
      orderBy: { createdAt: "desc" },
    });

    // Compute stats
    const stats = {
      total: requests.length,
      open: requests.filter((r: any) => r.status === "open").length,
      inProgress: requests.filter((r: any) => r.status === "in-progress").length,
      resolved: requests.filter((r: any) => r.status === "resolved").length,
    };

    return { requests, stats };
  }

  /** Get a single maintenance request */
  static async getById(id: string, ownerId: string) {
    const request = await prisma.maintenanceRequest.findFirst({
      where: {
        id,
        lease: {
          unit: {
            property: {
              ownerId,
            },
          },
        },
      },
      include: {
        lease: {
          include: {
            tenant: {
              select: { id: true, firstName: true, lastName: true, email: true, celNum: true },
            },
            unit: {
              include: {
                property: {
                  select: { id: true, name: true },
                },
              },
            },
          },
        },
      },
    });

    return request;
  }

  /** Update the status of a maintenance request */
  static async updateStatus(id: string, ownerId: string, status: string) {
    // First verify ownership
    const existing = await this.getById(id, ownerId);
    if (!existing) {
      const e = new Error("Maintenance request not found") as Error & { statusCode: number };
      e.statusCode = 404;
      throw e;
    }

    return prisma.maintenanceRequest.update({
      where: { id },
      data: { status },
    });
  }
}
