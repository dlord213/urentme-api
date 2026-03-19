import { FastifyPluginAsync } from "fastify";
import { PropertyTaxController } from "./controller.js";

const propertyTaxes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", PropertyTaxController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    PropertyTaxController.getById,
  );

  fastify.post<{ Body: any }>("/", PropertyTaxController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    PropertyTaxController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    PropertyTaxController.delete,
  );
};

export default propertyTaxes;
