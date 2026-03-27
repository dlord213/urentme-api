import { type FastifyPluginAsync } from "fastify";
import { UnitController } from "./controller.js";

const units: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", UnitController.list);

  fastify.get<{ Params: { id: string } }>("/:id", UnitController.getById);

  fastify.post<{ Body: any }>("/", UnitController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    UnitController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", UnitController.delete);

  fastify.post<{ Params: { id: string }; Body: any }>(
    "/:id/reserve",
    UnitController.reserve,
  );
};

export default units;
