import { type FastifyReply, type FastifyRequest } from "fastify";
import { TaskService } from "./service.ts";

export class TaskController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    const list = await TaskService.list();
    return list;
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const task = await TaskService.getById(request.params.id);
    if (!task) return reply.notFound();
    return task;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const task = await TaskService.create(request.body);
    return reply.status(201).send(task);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const task = await TaskService.update(request.params.id, request.body);
    return task;
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await TaskService.delete(request.params.id);
    return reply.status(204).send();
  }

  static async getStatusUpdates(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    return TaskService.getStatusUpdates(request.params.id);
  }

  static async addStatusUpdate(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const update = await TaskService.addStatusUpdate(
      request.params.id,
      request.body,
    );
    return reply.status(201).send(update);
  }
}
