import { FastifyPluginAsync } from "fastify";
import { BankReconciliationController } from "./controller.js";

const bankReconciliations: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", BankReconciliationController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    BankReconciliationController.getById,
  );

  fastify.post<{ Body: any }>("/", BankReconciliationController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    BankReconciliationController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    BankReconciliationController.delete,
  );
};

export default bankReconciliations;
