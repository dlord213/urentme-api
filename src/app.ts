import fastify, { type FastifyReply, type FastifyRequest } from "fastify";

import FastifyConfig from "./server.config.js";
import { prisma as _PRISMA_INSTANCE } from "./utils/prisma.js";

export const server = fastify({
  logger: true,
});

const start = async () => {
  try {
    server.decorate(
      "isVerified",
      async function (request: FastifyRequest, reply: FastifyReply) {
        const { id } = request.user as { id: string };

        try {
          const owner = await _PRISMA_INSTANCE.owner.findUnique({
            where: { id },
          });

          if (!owner?.isActive) {
            reply.status(403).send({
              error: "Forbidden",
              message: "Account is not active",
            });
          }
        } catch (err: any) {
          reply.status(500).send({
            error: "Internal Server Error",
            message: "Failed to verify account status",
          });
        }
      },
    );

    await FastifyConfig.initializePlugins(server);
    await FastifyConfig.initializeServerRoutes(server);
    await FastifyConfig.initializeTestRoutes(server);

    if (process.env.NODE_ENV !== "production" || !process.env.VERCEL) {
      const _PORT = Number(process.env.PORT) || 3000;

      await server.listen({ port: _PORT, host: "0.0.0.0" }, (err, address) => {
        if (err) {
          console.error(err);
          process.exit(1);
        }

        console.log(`Server listening at ${address}`);
      });
    }
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

const setupPromise = start();

export default async (req: any, res: any) => {
  await setupPromise;
  await server.ready();
  server.server.emit("request", req, res);
};
