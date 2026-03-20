import { type FastifyPluginAsync } from "fastify";
import { VendorController } from "./controller.ts";

const vendors: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", VendorController.list);

  fastify.get<{ Params: { id: string } }>("/:id", VendorController.getById);

  fastify.post<{ Body: any }>("/", VendorController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    VendorController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", VendorController.delete);
};

export default vendors;
