import { type FastifyPluginAsync } from "fastify";
import { PortalController } from "./controller.js";

const portal: FastifyPluginAsync = async (fastify) => {
  // All portal routes require tenant auth
  fastify.addHook("preHandler", fastify.authenticateTenant);

  fastify.get("/dashboard", PortalController.dashboard);
  fastify.get("/payments", PortalController.payments);
  fastify.post<{
    Body: {
      title: string;
      description: string;
      photoUrl?: string;
      permissionToEnter?: boolean;
    };
  }>("/maintenance", PortalController.createMaintenance);
  fastify.get("/documents", PortalController.documents);
};

export default portal;
