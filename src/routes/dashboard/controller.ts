import type { FastifyReply, FastifyRequest } from "fastify";
import { DashboardService } from "./service.js";

export class DashboardController {
  static async getOverview(request: FastifyRequest, reply: FastifyReply) {
    try {
      const overview = await DashboardService.getOverview();
      return reply.send(overview);
    } catch (error: any) {
      request.log.error(error);
      return reply.status(500).send({
        error: "Internal Server Error",
        message: "Failed to fetch dashboard overview",
      });
    }
  }
}
