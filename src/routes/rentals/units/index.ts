import { type FastifyPluginAsync } from "fastify";
import { UnitController } from "./controller.ts";

const units: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", UnitController.list);

  fastify.get<{ Params: { id: string } }>("/:id", UnitController.getById);

  fastify.post<{ Body: any }>("/", UnitController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    UnitController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", UnitController.delete);
};

export default units;
