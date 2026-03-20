import fp from "fastify-plugin";
import cookie from "@fastify/cookie";
import { type FastifyInstance } from "fastify";

/**
 * Parses and sets cookies on requests / responses.
 * The secret is used to sign cookies so they can't be tampered with.
 *
 * @see https://github.com/fastify/fastify-cookie
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(cookie, {
    secret: fastify.config["COOKIE_SECRET"] ?? "",
    parseOptions: {
      httpOnly: true,
      secure: fastify.config["NODE_ENV"] === "production",
      sameSite: "lax",
      path: "/",
    },
  });
});
