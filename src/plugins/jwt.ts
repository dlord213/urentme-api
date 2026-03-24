import fp from "fastify-plugin";
import jwt from "@fastify/jwt";
import {
  type FastifyInstance,
  type FastifyReply,
  type FastifyRequest,
} from "fastify";

/**
 * JWT authentication plugin.
 *
 * Decorates fastify with:
 *   - `fastify.authenticate`  — preHandler hook to guard routes
 *
 * Tokens are signed with the JWT_SECRET env var.
 * Access tokens expire in 15 minutes; use refresh tokens (handled in routes)
 * for long-lived sessions.
 *
 * @see https://github.com/fastify/fastify-jwt
 */
export default fp(async (fastify: FastifyInstance) => {
  fastify.register(jwt, {
    secret: fastify.config.JWT_SECRET,
    sign: {
      expiresIn: "15m",
    },
    cookie: {
      cookieName: "access_token",
      signed: false,
    },
  });

  /**
   * Reusable preHandler that verifies a JWT from either:
   *   1. The `Authorization: Bearer <token>` header, or
   *   2. The `access_token` cookie.
   */
  fastify.decorate(
    "authenticate",
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        await request.jwtVerify();
      } catch (err) {
        reply.send(err);
      }
    },
  );
});

declare module "fastify" {
  interface FastifyInstance {
    authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void>;
  }
}

declare module "@fastify/jwt" {
  interface FastifyJWT {
    payload: {
      id: string;
      email: string;
    };
    user: {
      id: string;
      email: string;
    };
  }
}
