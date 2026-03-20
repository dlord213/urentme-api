import fp from "fastify-plugin";
import { PrismaClient } from "@prisma/client";
import { type FastifyInstance } from "fastify";

/**
 * Prisma client plugin.
 *
 * Decorates fastify with `fastify.prisma` so every route
 * and plugin can access the database without instantiating
 * their own client (one connection pool for the whole app).
 */
export default fp(async (fastify: FastifyInstance) => {
  const prisma = new PrismaClient();

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
