import fp from "fastify-plugin";
import env from "@fastify/env";
import { type FastifyInstance } from "fastify";

const schema = {
  type: "object",
  required: ["DATABASE_URL", "JWT_SECRET"],
  properties: {
    NODE_ENV: {
      type: "string",
      default: "development",
    },
    HOST: {
      type: "string",
      default: "0.0.0.0",
    },
    PORT: {
      type: "integer",
      default: 3000,
    },
    DATABASE_URL: { type: "string" },
    JWT_SECRET: { type: "string" },
    COOKIE_SECRET: {
      type: "string",
      default: "a-super-secret-cookie-key-change-me",
    },
    CORS_ORIGIN: {
      type: "string",
      default: "*",
    },
  },
};

/**
 * Validates and exposes environment variables via `fastify.config`.
 * Register this plugin before all others so env vars are available
 * across the entire plugin chain.
 *
 * @see https://github.com/fastify/fastify-env
 */
export default fp(async (fastify: FastifyInstance) => {
  await fastify.register(env, {
    confKey: "config",
    schema,
    dotenv: true,
  });
});

declare module "fastify" {
  interface FastifyInstance {
    config: {
      NODE_ENV: string;
      HOST: string;
      PORT: number;
      DATABASE_URL: string;
      JWT_SECRET: string;
      COOKIE_SECRET: string;
      CORS_ORIGIN: string;
    };
  }
}
