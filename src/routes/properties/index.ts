import { type FastifyPluginAsync } from "fastify";
import { PropertyController } from "./controller.ts";

const properties: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", PropertyController.list);

  fastify.get<{ Params: { id: string } }>("/:id", PropertyController.getById);

  fastify.post<{ Body: any }>("/", PropertyController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    PropertyController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    PropertyController.delete,
  );
};

export default properties;
