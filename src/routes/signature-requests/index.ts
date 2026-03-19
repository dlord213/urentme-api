import { FastifyPluginAsync } from "fastify";
import { SignatureRequestController } from "./controller.js";

const signatureRequests: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", SignatureRequestController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    SignatureRequestController.getById,
  );

  fastify.post<{ Body: any }>("/", SignatureRequestController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    SignatureRequestController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    SignatureRequestController.delete,
  );
};

export default signatureRequests;
