import type { FastifyInstance } from "fastify";

// Routes
import announcementRoutes from "./routes/announcements/index.js";
import authRoutes from "./routes/auth/index.js";
import leaseRoutes from "./routes/leases/index.js";
import ownerRoutes from "./routes/people/owners/index.js";
import tenantRoutes from "./routes/people/tenants/index.js";
import propertyRoutes from "./routes/properties/index.js";
import transactionRoutes from "./routes/transactions/index.js";
import unitRoutes from "./routes/units/index.js";

// Plugins
import envPlugin from "./plugins/00-env.js";
import compressPlugin from "./plugins/compress.js";
import cookiePlugin from "./plugins/cookie.js";
import corsPlugin from "./plugins/cors.js";
import csrfPlugin from "./plugins/csrf.js";
import helmetPlugin from "./plugins/helmet.js";
import jwtPlugin from "./plugins/jwt.js";
import multipartPlugin from "./plugins/multipart.js";
import prismaPlugin from "./plugins/prisma.js";
import rateLimitPlugin from "./plugins/rate-limit.js";
import sensiblePlugin from "./plugins/sensible.js";
import supportPlugin from "./plugins/support.js";

class FastifyConfig {
  server: FastifyInstance;

  constructor(server: FastifyInstance) {
    this.server = server;
  }

  public static async initializeServerRoutes(server: FastifyInstance) {
    await server.register(announcementRoutes, { prefix: "api/announcements" });
    await server.register(authRoutes, { prefix: "api/auth" });
    await server.register(leaseRoutes, { prefix: "api/leases" });
    await server.register(ownerRoutes, { prefix: "api/owners" });
    await server.register(tenantRoutes, { prefix: "api/tenants" });
    await server.register(propertyRoutes, { prefix: "api/properties" });
    await server.register(transactionRoutes, { prefix: "api/transactions" });
    await server.register(unitRoutes, { prefix: "api/units" });
  }

  public static async initializeTestRoutes(server: FastifyInstance) {
    server.get("/ping", async (_request, _reply) => {
      return "pong\n";
    });
  }

  public static async initializePlugins(server: FastifyInstance) {
    await server.register(envPlugin);
    await server.register(prismaPlugin);
    await server.register(jwtPlugin);
    await server.register(cookiePlugin);
    await server.register(corsPlugin);
    await server.register(csrfPlugin);
    await server.register(helmetPlugin);
    await server.register(compressPlugin);
    await server.register(multipartPlugin);
    await server.register(rateLimitPlugin);
    await server.register(sensiblePlugin);
    await server.register(supportPlugin);
  }
}

export default FastifyConfig;
