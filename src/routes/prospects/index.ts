import { type FastifyPluginAsync } from "fastify";
import { ProspectController } from "./controller.ts";

const prospects: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", ProspectController.list);

  fastify.get<{ Params: { id: string } }>("/:id", ProspectController.getById);

  fastify.post<{ Body: any }>("/", ProspectController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    ProspectController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", ProspectController.delete);
};

export default prospects;
