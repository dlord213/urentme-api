import { prisma } from '../../utils/prisma.js'

export class OwnerDistributionService {
  static async list() {
    return prisma.ownerDistribution.findMany({
      include: { owner: true, bankAccount: true },
    })
  }

  static async getById(id: string) {
    return prisma.ownerDistribution.findUnique({
      where: { id },
      include: { owner: true, bankAccount: true },
    })
  }

  static async create(data: any) {
    return prisma.ownerDistribution.create({ data })
  }

  static async update(id: string, data: any) {
    return prisma.ownerDistribution.update({
      where: { id },
      data,
    })
  }

  static async delete(id: string) {
    return prisma.ownerDistribution.delete({
      where: { id },
    })
  }
}
