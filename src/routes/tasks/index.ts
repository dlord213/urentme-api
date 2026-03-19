import { FastifyPluginAsync } from "fastify";
import { TaskController } from "./controller.js";

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
};

export default tasks;
