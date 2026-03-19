import { prisma } from '../../utils/prisma.js'

export class BillService {
  static async list() {
    return prisma.bill.findMany({
      include: {
        vendor: true,
      },
    })
  }

  static async getById(id: string) {
    return prisma.bill.findUnique({
      where: { id },
      include: {
        vendor: true,
      },
    })
  }

  static async create(data: any) {
    return prisma.bill.create({ data })
  }

  static async update(id: string, data: any) {
    return prisma.bill.update({
      where: { id },
      data,
    })
  }

  static async delete(id: string) {
    return prisma.bill.delete({
      where: { id },
    })
  }
}
