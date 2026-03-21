import { prisma } from "../../../utils/prisma.ts";

export class JournalLineService {
  static async list() {
    return prisma.journalLine.findMany({
      include: {
        chartAccount: true,
        transaction: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.journalLine.findUnique({
      where: { id },
      include: {
        chartAccount: true,
        transaction: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.journalLine.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.journalLine.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.journalLine.delete({
      where: { id },
    });
  }
}
