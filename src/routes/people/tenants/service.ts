import { prisma } from "../../../utils/prisma.ts";

export class TenantService {
  static async list(userId: string) {
    const tenants = await prisma.tenant.findMany({
      include: {
        tenantTransactions: true,
        leases: {
          include: {
            unit: {
              include: {
                property: true,
              },
            },
          },
        },
      },
      where: {
        leases: {
          some: {
            unit: {
              is: {
                property: {
                  is: {
                    managedByUserId: userId,
                  },
                },
              },
            },
          },
        },
      },
    });

    return tenants.map((tenant) => {
      const balanceDue = tenant.tenantTransactions.reduce(
        (acc, transaction) => {
          if (transaction.status !== "COMPLETED" && transaction.status !== "PENDING") {
             return acc;
          }
          if (transaction.type === "CHARGE") {
            return acc + transaction.amount;
          } else if (
            transaction.type === "LEASE_PAYMENT" ||
            transaction.type === "CREDIT"
          ) {
            return acc - transaction.amount;
          } else if (transaction.type === "REFUND") {
            return acc + transaction.amount;
          }
          return acc;
        },
        0
      );

      return {
        ...tenant,
        balanceDue,
      };
    });
  }

  static async getById(id: string) {
    return prisma.tenant.findUnique({
      where: { id },
      include: {
        leases: true,
        rentalApplications: true,
        tenantTransactions: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.tenant.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.tenant.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.tenant.delete({
      where: { id },
    });
  }
}
