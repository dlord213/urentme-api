import fp from "fastify-plugin";
import cors from "@fastify/cors";
import { type FastifyInstance } from "fastify";

/**
 * Enables Cross-Origin Resource Sharing (CORS).
 * Origin is driven by the CORS_ORIGIN env var (defaults to '*').
 *
 * @see https://github.com/fastify/fastify-cors
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(cors, {
    origin:
      fastify.config.CORS_ORIGIN === "*"
        ? true
        : fastify.config.CORS_ORIGIN.split(","),
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-CSRF-Token"],
    credentials: true,
  });
});
