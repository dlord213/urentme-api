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

  /**
   * Tenant-only preHandler. Reads `tenant_access_token` cookie and
   * asserts role === "tenant".
   */
  fastify.decorate(
    "authenticateTenant",
    async function (request: FastifyRequest, reply: FastifyReply) {
      try {
        const token = request.cookies["tenant_access_token"];
        if (!token) throw new Error("No tenant token");
        const payload = fastify.jwt.verify<{
          tenantId: string;
          email: string;
          role: string;
        }>(token);
        if (payload.role !== "tenant") throw new Error("Forbidden");
        request.tenantUser = payload;
      } catch {
        reply.status(401).send({ error: "Unauthorized" });
      }
    },
  );
});

declare module "fastify" {
  interface FastifyInstance {
    authenticate(request: FastifyRequest, reply: FastifyReply): Promise<void>;
    authenticateTenant(
      request: FastifyRequest,
      reply: FastifyReply,
    ): Promise<void>;
  }
  interface FastifyRequest {
    tenantUser?: { tenantId: string; email: string; role: string };
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
