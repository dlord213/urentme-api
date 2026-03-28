import { type FastifyPluginAsync } from "fastify";
import {
  inviteHandler,
  acceptInviteHandler,
  tenantLoginHandler,
  tenantMeHandler,
  tenantLogoutHandler,
} from "./controller.js";

const tenantAuth: FastifyPluginAsync = async (fastify) => {
  // Owner-authenticated: send invite
  fastify.post<{ Params: { tenantId: string } }>(
    "/invite/:tenantId",
    { preHandler: fastify.authenticate },
    inviteHandler,
  );

  // Public: accept invite & set password
  fastify.post<{ Body: { token: string; password: string } }>(
    "/accept-invite",
    acceptInviteHandler,
  );

  // Public: tenant login
  fastify.post<{ Body: { email: string; password: string } }>(
    "/login",
    {
      config: { rateLimit: { max: 10, timeWindow: "1 minute" } },
    },
    tenantLoginHandler,
  );

  // Tenant-authenticated
  fastify.get(
    "/me",
    { preHandler: fastify.authenticateTenant },
    tenantMeHandler,
  );

  fastify.post("/logout", tenantLogoutHandler);
};

export default tenantAuth;
