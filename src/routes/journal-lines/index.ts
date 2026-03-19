import { FastifyPluginAsync } from "fastify";
import { JournalLineController } from "./controller.js";

const journalLines: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get("/", JournalLineController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    JournalLineController.getById,
  );

  fastify.post<{ Body: any }>("/", JournalLineController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    JournalLineController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    JournalLineController.delete,
  );
};

export default journalLines;
