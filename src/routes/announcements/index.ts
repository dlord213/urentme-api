import { type FastifyPluginAsync } from "fastify";
import { AnnouncementController } from "./controller.js";

const announcements: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  // ── Core CRUD ──
  fastify.get("/", AnnouncementController.list);

  fastify.get<{ Params: { id: string } }>(
    "/:id",
    AnnouncementController.getById,
  );

  fastify.post<{ Body: any }>("/", AnnouncementController.create);

  fastify.put<{ Params: { id: string }; Body: any }>(
    "/:id",
    AnnouncementController.update,
  );

  fastify.delete<{ Params: { id: string } }>(
    "/:id",
    AnnouncementController.delete,
  );

  // ── Property Announcements ──
  fastify.get<{ Params: { id: string } }>(
    "/:id/properties",
    AnnouncementController.listPropertyAnnouncements,
  );

  fastify.post<{ Params: { id: string }; Body: any }>(
    "/:id/properties",
    AnnouncementController.addPropertyAnnouncement,
  );

  fastify.delete<{ Params: { linkId: string } }>(
    "/property-links/:linkId",
    AnnouncementController.removePropertyAnnouncement,
  );

  // ── Unit Announcements ──
  fastify.get<{ Params: { id: string } }>(
    "/:id/units",
    AnnouncementController.listUnitAnnouncements,
  );

  fastify.post<{ Params: { id: string }; Body: any }>(
    "/:id/units",
    AnnouncementController.addUnitAnnouncement,
  );

  fastify.delete<{ Params: { linkId: string } }>(
    "/unit-links/:linkId",
    AnnouncementController.removeUnitAnnouncement,
  );
};

export default announcements;
