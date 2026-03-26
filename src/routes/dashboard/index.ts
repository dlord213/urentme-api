import { type FastifyPluginAsync } from "fastify";
import { DashboardController } from "./controller.js";

const dashboardRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.get("/overview", DashboardController.getOverview);
};

export default dashboardRoutes;
