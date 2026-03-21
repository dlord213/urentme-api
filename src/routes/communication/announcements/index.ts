import { type FastifyPluginAsync } from "fastify";
import { AnnouncementService } from "./service.ts";

const announcements: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // fastify.addHook('preHandler', fastify.authenticate)

  fastify.get<{ Querystring: { propertyId?: string; unitId?: string } }>(
    "/",
    async function (request, reply) {
      const { propertyId, unitId } = request.query;
      const list = await AnnouncementService.list({ propertyId, unitId });
      return list;
    },
  );

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    async function (request, reply) {
      const announcement = await AnnouncementService.getById(request.params.id);
      if (!announcement) return reply.notFound();
      return announcement;
    },
  );

  fastify.post<{ Body: any }>("/", async function (request, reply) {
    const announcement = await AnnouncementService.create(request.body);
    return reply.status(201).send(announcement);
  });

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    async function (request, reply) {
      const announcement = await AnnouncementService.update(
        request.params.id,
        request.body,
      );
      return announcement;
    },
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    async function (request, reply) {
      await AnnouncementService.delete(request.params.id);
      return reply.status(204).send();
    },
  );
};

export default announcements;
