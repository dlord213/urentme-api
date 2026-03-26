import { type FastifyPluginAsync } from "fastify";
import { TenantController } from "./controller.js";

const tenants: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  fastify.get("/", TenantController.list);

  fastify.get<{ Params: { id: string } }>("/:id", TenantController.getById);

  fastify.post<{ Body: any }>("/", TenantController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    TenantController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", TenantController.delete);
};

export default tenants;
