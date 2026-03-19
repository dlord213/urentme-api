import { FastifyPluginAsync } from "fastify";
import { BankAccountController } from "./controller.js";

const bankAccounts: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", BankAccountController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    BankAccountController.getById,
  );

  fastify.post<{ Body: any }>("/", BankAccountController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    BankAccountController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    BankAccountController.delete,
  );
};

export default bankAccounts;
