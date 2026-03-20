import { type FastifyPluginAsync } from "fastify";
import { registerSchema, loginSchema, refreshSchema } from "./schemas.ts";
import {
  registerHandler,
  loginHandler,
  refreshHandler,
  logoutHandler,
  meHandler,
} from "./auth.controller.ts";

const auth: FastifyPluginAsync = async (fastify) => {
  fastify.post(
    "/register",
    {
      schema: registerSchema,
      config: { rateLimit: { max: 10, timeWindow: "1 minute" } },
    },
    registerHandler,
  );

  fastify.post(
    "/login",
    {
      schema: loginSchema,
      config: { rateLimit: { max: 10, timeWindow: "1 minute" } },
    },
    loginHandler,
  );

  fastify.post(
    "/refresh",
    {
      schema: refreshSchema,
      config: { rateLimit: { max: 20, timeWindow: "1 minute" } },
    },
    refreshHandler,
  );

  fastify.post("/logout", logoutHandler);

  fastify.get("/me", { preHandler: fastify.authenticate }, meHandler);
};

export default auth;
