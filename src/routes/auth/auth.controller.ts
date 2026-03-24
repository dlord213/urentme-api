import {
  type FastifyRequest,
  type FastifyReply,
  type FastifyInstance,
} from "fastify";
import {
  registerOwner,
  validateCredentials,
  buildTokenPayload,
} from "./auth.service.ts";
import {
  type RegisterBody,
  type LoginBody,
  type RefreshBody,
} from "../../types/body.ts";

const ACCESS_TOKEN_TTL = "15m";
const REFRESH_TOKEN_TTL = "7d";

function setAuthCookies(
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
    .setCookie("access_token", accessToken, { ...base, maxAge: 15 * 60 })
    .setCookie("refresh_token", refreshToken, {
      ...base,
      maxAge: 7 * 24 * 60 * 60,
    });
}

export const registerHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: RegisterBody }>,
  reply: FastifyReply,
) {
  const owner = await registerOwner(this.prisma, request.body);

  const payload = buildTokenPayload(owner);
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken);

  return reply.code(201).send({
    user: owner,
    accessToken,
    refreshToken,
  });
};

export const loginHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: LoginBody }>,
  reply: FastifyReply,
) {
  const owner = await validateCredentials(this.prisma, request.body);
  if (!owner) {
    return reply.unauthorized("Invalid email or password");
  }

  const payload = buildTokenPayload(owner);
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken);

  return reply.send({
    user: owner,
    accessToken,
    refreshToken,
  });
};

export const refreshHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: RefreshBody }>,
  reply: FastifyReply,
) {
  let decoded: { sub: string; email: string };

  try {
    decoded = this.jwt.verify<{ sub: string; email: string }>(
      request.body.refreshToken,
    );
  } catch {
    return reply.unauthorized("Invalid or expired refresh token");
  }

  const owner = await this.prisma.owner.findUnique({
    where: { id: decoded.sub },
    select: { id: true, email: true, isActive: true },
  });

  if (!owner || !owner.isActive) {
    return reply.unauthorized("Invalid or expired refresh token");
  }

  const payload = { id: owner.id, email: owner.email };
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken);

  return reply.send({ accessToken, refreshToken });
};

export const logoutHandler = async function (
  this: FastifyInstance,
  _request: FastifyRequest,
  reply: FastifyReply,
) {
  reply
    .clearCookie("access_token", { path: "/" })
    .clearCookie("refresh_token", { path: "/" });
  return reply.send({ message: "Logged out successfully" });
};

export const meHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { id } = request.user;

  const owner = await this.prisma.owner.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      celNum: true,
      isActive: true,
      isFlagged: true,
      profilePictureUrl: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!owner) return reply.notFound("Owner not found");

  return reply.send({ user: owner });
};
