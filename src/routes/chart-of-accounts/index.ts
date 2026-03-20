import { type FastifyPluginAsync } from "fastify";
import { ChartOfAccountController } from "./controller.ts";

const chartOfAccounts: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", ChartOfAccountController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    ChartOfAccountController.getById,
  );

  fastify.post<{ Body: any }>("/", ChartOfAccountController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    ChartOfAccountController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    ChartOfAccountController.delete,
  );
};

export default chartOfAccounts;
