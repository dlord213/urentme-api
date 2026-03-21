import { prisma } from "../../../utils/prisma.ts";

export class TaskService {
  static async list() {
    return prisma.task.findMany({
      include: {
        unit: true,
        assignedTo: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true } },
        vendor: true,
      },
    });
  }

  static async getById(id: string) {
    return prisma.task.findUnique({
      where: { id },
      include: {
        unit: true,
        assignedTo: { select: { id: true, firstName: true, lastName: true } },
        createdBy: { select: { id: true, firstName: true, lastName: true } },
        vendor: true,
      },
    });
  }

  static async create(data: any) {
    return prisma.task.create({ data });
  }

  static async update(id: string, data: any) {
    return prisma.task.update({
      where: { id },
      data,
    });
  }

  static async delete(id: string) {
    return prisma.task.delete({
      where: { id },
    });
  }

  static async getStatusUpdates(taskId: string) {
    return prisma.repairStatusUpdate.findMany({
      where: { taskId },
      orderBy: { createdAt: "asc" },
    });
  }

  static async addStatusUpdate(
    taskId: string,
    data: { label: string; description?: string },
  ) {
    return prisma.repairStatusUpdate.create({
      data: {
        taskId,
        label: data.label,
        description: data.description,
      },
    });
  }
}
