import { prisma } from "../../../utils/prisma.ts";

export class ChartOfAccountService {
  static async list() {
    return prisma.chartOfAccount.findMany();
  }

  static async getById(id: string) {
    return prisma.chartOfAccount.findUnique({
      where: { id },
    });
  }

  static async create(data: any) {
    return prisma.chartOfAccount.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.chartOfAccount.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.chartOfAccount.delete({
      where: { id },
    });
  }
}
