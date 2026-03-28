import { type FastifyPluginAsync } from "fastify";
import { EmailController } from "./controller.js";

const emailRoutes: FastifyPluginAsync = async (
  fastify,
  opts,
): Promise<void> => {
  fastify.post<{ Body: any }>("/send", EmailController.send);
};

export default emailRoutes;
