import { type FastifyReply, type FastifyRequest } from "fastify";
import { AnnouncementService } from "./service";

export class AnnouncementController {
  static async list(request: FastifyRequest, reply: FastifyReply) {
    return AnnouncementService.list();
  }

  static async getById(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    const announcement = await AnnouncementService.getById(request.params.id);
    if (!announcement) return reply.notFound();
    return announcement;
  }

  static async create(
    request: FastifyRequest<{ Body: any }>,
    reply: FastifyReply,
  ) {
    const announcement = await AnnouncementService.create(request.body);
    return reply.status(201).send(announcement);
  }

  static async update(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    return AnnouncementService.update(request.params.id, request.body);
  }

  static async delete(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    await AnnouncementService.delete(request.params.id);
    return reply.status(204).send();
  }

  // ── Property Announcements ──

  static async listPropertyAnnouncements(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    return AnnouncementService.listPropertyAnnouncements(request.params.id);
  }

  static async addPropertyAnnouncement(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const result = await AnnouncementService.addPropertyAnnouncement({
      announcementId: request.params.id,
      propertyId: (request.body as any).propertyId,
    });
    return reply.status(201).send(result);
  }

  static async removePropertyAnnouncement(
    request: FastifyRequest<{ Params: { linkId: string } }>,
    reply: FastifyReply,
  ) {
    await AnnouncementService.removePropertyAnnouncement(
      request.params.linkId,
    );
    return reply.status(204).send();
  }

  // ── Unit Announcements ──

  static async listUnitAnnouncements(
    request: FastifyRequest<{ Params: { id: string } }>,
    reply: FastifyReply,
  ) {
    return AnnouncementService.listUnitAnnouncements(request.params.id);
  }

  static async addUnitAnnouncement(
    request: FastifyRequest<{ Params: { id: string }; Body: any }>,
    reply: FastifyReply,
  ) {
    const result = await AnnouncementService.addUnitAnnouncement({
      announcementId: request.params.id,
      unitId: (request.body as any).unitId,
    });
    return reply.status(201).send(result);
  }

  static async removeUnitAnnouncement(
    request: FastifyRequest<{ Params: { linkId: string } }>,
    reply: FastifyReply,
  ) {
    await AnnouncementService.removeUnitAnnouncement(request.params.linkId);
    return reply.status(204).send();
  }
}
