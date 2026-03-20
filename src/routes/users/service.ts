import { prisma } from "../../utils/prisma.ts";

export class UserService {
  static async list() {
    return prisma.user.findMany({
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        role: true,
        isActive: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.user.findUnique({
      where: { id },
      include: {
        ownedProperties: true,
        tasksAssigned: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.user.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.user.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.user.delete({
      where: { id },
    });
  }
}
