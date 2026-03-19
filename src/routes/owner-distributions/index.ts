import { FastifyPluginAsync } from "fastify";
import { OwnerDistributionController } from "./controller.js";

const ownerDistributions: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", OwnerDistributionController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    OwnerDistributionController.getById,
  );

  fastify.post<{ Body: any }>("/", OwnerDistributionController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    OwnerDistributionController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    OwnerDistributionController.delete,
  );
};

export default ownerDistributions;
