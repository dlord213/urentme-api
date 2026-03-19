import { FastifyPluginAsync } from "fastify";
import { LeaseController } from "./controller.js";

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
