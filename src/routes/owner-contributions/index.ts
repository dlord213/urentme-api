import { FastifyPluginAsync } from "fastify";
import { OwnerContributionController } from "./controller.js";

const ownerContributions: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", OwnerContributionController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    OwnerContributionController.getById,
  );

  fastify.post<{ Body: any }>("/", OwnerContributionController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    OwnerContributionController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    OwnerContributionController.delete,
  );
};

export default ownerContributions;
