import fp from "fastify-plugin";
import csrf from "@fastify/csrf-protection";
import { type FastifyInstance } from "fastify";

/**
 * CSRF protection using the Synchroniser Token pattern.
 * Requires @fastify/cookie (registered first via autoload alpha sort).
 *
 * Usage:
 *   - GET  /csrf-token  → return fastify.generateCsrfToken(request, reply)
 *   - All mutating routes automatically validate the X-CSRF-Token header
 *     or the _csrf body field.
 *
 * @see https://github.com/fastify/csrf-protection
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(csrf, {
    sessionPlugin: "@fastify/cookie",
    cookieOpts: {
      httpOnly: true,
      secure: fastify.config.NODE_ENV === "production",
      sameSite: "lax",
      signed: true,
    },
  });
});
