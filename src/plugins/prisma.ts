import fp from "fastify-plugin";
import { type FastifyInstance } from "fastify";
import { PrismaClient } from "../generated/prisma/client.js";
import { prisma } from "../utils/prisma.js";

/**
 * Prisma client plugin.
 *
 * Decorates fastify with `fastify.prisma` so every route
 * and plugin can access the database without instantiating
 * their own client (one connection pool for the whole app).
 */
export default fp(async (fastify: FastifyInstance) => {
  await prisma.$connect();

  fastify.decorate("prisma", prisma);

  fastify.addHook("onClose", async () => {
    await prisma.$disconnect();
  });
});

declare module "fastify" {
  interface FastifyInstance {
    prisma: PrismaClient;
  }
}
