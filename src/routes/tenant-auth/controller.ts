import {
  type FastifyRequest,
  type FastifyReply,
  type FastifyInstance,
} from "fastify";
import { TenantAuthService } from "./service.js";

const ACCESS_TOKEN_TTL = "1d";
const REFRESH_TOKEN_TTL = "7d";

function setTenantCookies(
  reply: FastifyReply,
  accessToken: string,
  refreshToken: string,
) {
  const base = {
    httpOnly: true,
    secure: true,
    sameSite: "none" as const,
    path: "/",
  };
  reply
    .setCookie("tenant_access_token", accessToken, { ...base, maxAge: 1440 * 60 })
    .setCookie("tenant_refresh_token", refreshToken, {
      ...base,
      maxAge: 7 * 24 * 60 * 60,
    });
}

export const inviteHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Params: { tenantId: string } }>,
  reply: FastifyReply,
) {
  const origin =
    request.headers.origin ||
    `${request.protocol}://${request.hostname}`;
  const result = await TenantAuthService.createInvite(
    request.params.tenantId,
    origin,
  );
  return reply.send(result);
};

export const acceptInviteHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: { token: string; password: string } }>,
  reply: FastifyReply,
) {
  const { token, password } = request.body;
  if (!token || !password) {
    return reply.badRequest("token and password are required");
  }
  const tenant = await TenantAuthService.acceptInvite(token, password);
  return reply.send({ message: "Password set successfully", tenant });
};

export const tenantLoginHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: { email: string; password: string } }>,
  reply: FastifyReply,
) {
  const { email, password } = request.body;
  const tenant = await TenantAuthService.validateCredentials(email, password);

  if (!tenant) {
    return reply.unauthorized("Invalid email or password");
  }

  if (!tenant.isActive) {
    return reply.forbidden("Account is deactivated");
  }

  const payload = { tenantId: tenant.id, email: tenant.email, role: "tenant" };
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setTenantCookies(reply, accessToken, refreshToken);

  return reply.send({ tenant, accessToken, refreshToken });
};

export const tenantMeHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const user = request.tenantUser!;
  const tenant = await TenantAuthService.getById(user.tenantId);
  if (!tenant) return reply.notFound("Tenant not found");
  return reply.send({ tenant });
};

export const tenantLogoutHandler = async function (
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  reply
    .clearCookie("tenant_access_token", { path: "/" })
    .clearCookie("tenant_refresh_token", { path: "/" });
  return reply.send({ message: "Logged out successfully" });
};
