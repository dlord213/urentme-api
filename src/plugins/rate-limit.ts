import fp from "fastify-plugin";
import rateLimit from "@fastify/rate-limit";
import { FastifyInstance } from "fastify";

/**
 * Global rate limiter — prevents abuse and brute-force attacks.
 *
 * Defaults (override per-route with route-level config):
 *   - 100 requests per minute per IP
 *
 * Sensitive routes (e.g. /auth/login) should apply a tighter limit:
 * @example
 * fastify.post('/auth/login', {
 *   config: { rateLimit: { max: 10, timeWindow: '1 minute' } },
 *   handler: loginHandler,
 * })
 *
 * @see https://github.com/fastify/fastify-rate-limit
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(rateLimit, {
    global: true,
    max: 100,
    timeWindow: "1 minute",
    errorResponseBuilder: (_req, context) => ({
      statusCode: 429,
      error: "Too Many Requests",
      message: `Rate limit exceeded. Please try again in ${context.after}.`,
    }),
  });
});
