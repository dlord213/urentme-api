import fp from "fastify-plugin";
import helmet from "@fastify/helmet";
import { type FastifyInstance } from "fastify";

/**
 * Adds common security HTTP headers via Helmet.
 * Content-Security-Policy is relaxed for the API — tighten for prod as needed.
 *
 * @see https://github.com/fastify/fastify-helmet
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(helmet, {
    // APIs typically don't serve HTML, so CSP is minimal here.
    // Tighten this if you ever serve a front-end from this server.
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  });
});
