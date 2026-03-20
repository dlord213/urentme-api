import { type FastifyPluginAsync } from "fastify";
import { BillController } from "./controller.ts";

const bills: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", BillController.list);

  fastify.get<{ Params: { id: string } }>("/:id", BillController.getById);

  fastify.post<{ Body: any }>("/", BillController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    BillController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", BillController.delete);
};

export default bills;
