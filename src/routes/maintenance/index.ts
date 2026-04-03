import { type FastifyPluginAsync } from "fastify";
import { MaintenanceController } from "./controller.js";

const maintenance: FastifyPluginAsync = async (fastify) => {
  // All maintenance routes require owner auth
  fastify.addHook("preHandler", fastify.authenticate);

  fastify.get<{
    Querystring: { status?: string; search?: string };
  }>("/", MaintenanceController.list);

  fastify.get<{
    Params: { id: string };
  }>("/:id", MaintenanceController.getById);

  fastify.patch<{
    Params: { id: string };
    Body: { status: string };
  }>("/:id/status", MaintenanceController.updateStatus);
};

export default maintenance;
