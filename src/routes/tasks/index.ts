import { type FastifyPluginAsync } from "fastify";
import { TaskController } from "./controller.ts";

const tasks: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", TaskController.list);

  fastify.get<{ Params: { id: string } }>("/:id", TaskController.getById);

  fastify.post<{ Body: any }>("/", TaskController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    TaskController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", TaskController.delete);

  /** GET /api/tasks/:id/status-updates
   *  Returns all Uber-style repair status updates for a task. */
  fastify.get<{ Params: { id: string } }>(
    "/:id/status-updates",
    TaskController.getStatusUpdates,
  );

  /** POST /api/tasks/:id/status-updates
   *  Adds a new repair status update (e.g., "Technician Assigned"). */
  fastify.post<{ Params: { id: string }; Body: any }>(
    "/:id/status-updates",
    TaskController.addStatusUpdate,
  );
};

export default tasks;
