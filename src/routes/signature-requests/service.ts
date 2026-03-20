import { prisma } from "../../utils/prisma.ts";

export class SignatureRequestService {
  static async list() {
    return prisma.signatureRequest.findMany({
      include: {
        lease: true,
        requestedBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async getById(id: string) {
    return prisma.signatureRequest.findUnique({
      where: { id },
      include: {
        lease: true,
        requestedBy: { select: { id: true, firstName: true, lastName: true } },
      },
    });
  }

  static async create(data: any) {
    return prisma.signatureRequest.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.signatureRequest.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.signatureRequest.delete({
      where: { id },
    });
  }
}
