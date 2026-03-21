import { type FastifyPluginAsync } from "fastify";
import { LeaseController } from "./controller.ts";

const leases: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", LeaseController.list);

  fastify.get<{ Params: { id: string } }>("/:id", LeaseController.getById);

  fastify.post<{ Body: any }>("/", LeaseController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    LeaseController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", LeaseController.delete);
};

export default leases;
