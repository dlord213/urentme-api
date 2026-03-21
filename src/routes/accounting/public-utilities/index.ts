import { type FastifyPluginAsync } from "fastify";
import { PublicUtilityController } from "./controller.ts";

const publicUtilities: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", PublicUtilityController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    PublicUtilityController.getById,
  );

  fastify.post<{ Body: any }>("/", PublicUtilityController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    PublicUtilityController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    PublicUtilityController.delete,
  );
};

export default publicUtilities;
