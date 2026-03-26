import { type FastifyPluginAsync } from "fastify";
import { type ZodTypeProvider } from "fastify-type-provider-zod";
import {
  registerSchemaZod,
  loginSchemaZod,
  refreshSchemaZod,
} from "./schemas.js";
import {
  registerHandler,
  loginHandler,
  refreshHandler,
  logoutHandler,
  meHandler,
} from "./auth.controller.js";

const auth: FastifyPluginAsync = async (fastify) => {
  const server = fastify.withTypeProvider<ZodTypeProvider>();

  server.post(
    "/register",
    {
      config: { rateLimit: { max: 10, timeWindow: "1 minute" } },
    },
    registerHandler,
  );

  server.post(
    "/login",
    {
      config: { rateLimit: { max: 10, timeWindow: "1 minute" } },
    },
    loginHandler,
  );

  server.post(
    "/refresh",
    {
      config: { rateLimit: { max: 20, timeWindow: "1 minute" } },
    },
    refreshHandler,
  );

  server.post("/logout", logoutHandler);

  server.get("/me", { preHandler: fastify.authenticate }, meHandler);
};

export default auth;
