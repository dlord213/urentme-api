import { type FastifyPluginAsync } from "fastify";
import { OwnerController } from "./controller.js";

const owners: FastifyPluginAsync = async (fastify, opts): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", OwnerController.list);

  fastify.get<{ Params: { id: string } }>("/:id", OwnerController.getById);

  fastify.post<{ Body: any }>("/", OwnerController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    OwnerController.update,
  );

  fastify.delete<{ Params: { id: string } }>("/:id", OwnerController.delete);

  // Profile self-edit routes
  fastify.get<{ Params: { id: string } }>("/profile/:id", OwnerController.getProfile);

  fastify.put<{ Params: { id: string }; Body: any }>("/profile/:id", OwnerController.updateProfile);
};

export default owners;
