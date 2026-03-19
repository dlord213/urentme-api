import { prisma } from '../../utils/prisma.js'

export class BankReconciliationService {
  static async list() {
    return prisma.bankReconciliation.findMany({
      include: {
        bankAccount: true,
      },
    })
  }

  static async getById(id: string) {
    return prisma.bankReconciliation.findUnique({
      where: { id },
      include: {
        bankAccount: true,
      },
    })
  }

  static async create(data: any) {
    return prisma.bankReconciliation.create({ data })
  }

  static async update(id: string, data: any) {
    return prisma.bankReconciliation.update({
      where: { id },
      data,
    })
  }

  static async delete(id: string) {
    return prisma.bankReconciliation.delete({
      where: { id },
    })
  }
}
