import { prisma } from "../../utils/prisma.ts";

export class OwnerContributionService {
  static async list() {
    return prisma.ownerContribution.findMany({
      include: { owner: true, bankAccount: true },
    });
  }

  static async getById(id: string) {
    return prisma.ownerContribution.findUnique({
      where: { id },
      include: { owner: true, bankAccount: true },
    });
  }

  static async create(data: any) {
    return prisma.ownerContribution.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.ownerContribution.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.ownerContribution.delete({
      where: { id },
    });
  }
}
