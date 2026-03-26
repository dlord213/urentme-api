import { type FastifyPluginAsync } from "fastify";
import { TransactionController } from "./controller.js";

const transactions: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.get("/", TransactionController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    TransactionController.getById,
  );

  fastify.post<{ Body: any }>("/", TransactionController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    TransactionController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    TransactionController.delete,
  );
};

export default transactions;
