import { prisma } from "../../utils/prisma.js";

export class BankAccountService {
  static async list() {
    return prisma.bankAccount.findMany();
  }

  static async getById(id: string) {
    return prisma.bankAccount.findUnique({
      where: { id },
      include: {
        transactions: true,
        bankReconciliations: true,
        distributions: true,
        contributions: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.bankAccount.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.bankAccount.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.bankAccount.delete({
      where: { id },
    });
  }
}
