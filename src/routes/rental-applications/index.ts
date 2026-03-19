import { FastifyPluginAsync } from "fastify";
import { RentalApplicationController } from "./controller.js";

const rentalApplications: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", RentalApplicationController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    RentalApplicationController.getById,
  );

  fastify.post<{ Body: any }>("/", RentalApplicationController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    RentalApplicationController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    RentalApplicationController.delete,
  );
};

export default rentalApplications;
