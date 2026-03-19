import { prisma } from '../../utils/prisma.js'

export class TransactionService {
  static async list() {
    return prisma.transaction.findMany({
      include: {
        lease: true,
        tenant: true,
        vendor: true,
        owner: true,
        task: true,
        chartAccount: true,
        bankAccount: true,
      },
    })
  }

  static async getById(id: string) {
    return prisma.transaction.findUnique({
      where: { id },
      include: {
        lease: true,
        tenant: true,
        vendor: true,
        owner: true,
        task: true,
        chartAccount: true,
        bankAccount: true,
        journalEntries: true,
      },
    })
  }

  static async create(data: any) {
    return prisma.transaction.create({ data })
  }

  static async update(id: string, data: any) {
    return prisma.transaction.update({
      where: { id },
      data,
    })
  }

  static async delete(id: string) {
    return prisma.transaction.delete({
      where: { id },
    })
  }
}
