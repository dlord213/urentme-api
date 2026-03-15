import { FastifyRequest, FastifyReply, FastifyInstance } from "fastify";
import {
  registerUser,
  validateCredentials,
  buildTokenPayload,
} from "./auth.service.js";
import { RegisterBody, LoginBody, RefreshBody } from "../../types/body.js";

const ACCESS_TOKEN_TTL = "15m";
const REFRESH_TOKEN_TTL = "7d";

function setAuthCookies(
  reply: FastifyReply,
  accessToken: string,
  refreshToken: string,
  isProduction: boolean,
) {
  const base = {
    httpOnly: true,
    secure: isProduction,
    sameSite: "lax" as const,
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
  const isProd = this.config.NODE_ENV === "production";
  const user = await registerUser(this.prisma, request.body);

  const payload = buildTokenPayload(user);
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken, isProd);

  return reply.code(201).send({
    user,
    accessToken,
    refreshToken,
  });
};

export const loginHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: LoginBody }>,
  reply: FastifyReply,
) {
  const isProd = this.config.NODE_ENV === "production";
  const user = await validateCredentials(this.prisma, request.body);
  if (!user) {
    return reply.unauthorized("Invalid email or password");
  }

  const payload = buildTokenPayload(user);
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken, isProd);

  return reply.send({
    user,
    accessToken,
    refreshToken,
  });
};

export const refreshHandler = async function (
  this: FastifyInstance,
  request: FastifyRequest<{ Body: RefreshBody }>,
  reply: FastifyReply,
) {
  const isProd = this.config.NODE_ENV === "production";
  let decoded: { sub: string; email: string; role: string };

  try {
    decoded = this.jwt.verify<{ sub: string; email: string; role: string }>(
      request.body.refreshToken,
    );
  } catch {
    return reply.unauthorized("Invalid or expired refresh token");
  }

  // Confirm user still exists and is active
  const user = await this.prisma.user.findUnique({
    where: { id: decoded.sub },
    select: { id: true, email: true, role: true, isActive: true },
  });

  if (!user || !user.isActive) {
    return reply.unauthorized("Invalid or expired refresh token");
  }

  const payload = { sub: user.id, email: user.email, role: user.role };
  const accessToken = this.jwt.sign(payload, { expiresIn: ACCESS_TOKEN_TTL });
  const refreshToken = this.jwt.sign(payload, { expiresIn: REFRESH_TOKEN_TTL });

  setAuthCookies(reply, accessToken, refreshToken, isProd);

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
  const { sub } = request.user;

  const user = await this.prisma.user.findUnique({
    where: { id: sub },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      isActive: true,
      isFlagged: true,
      profilePictureUrl: true,
      createdAt: true,
      updatedAt: true,
    },
  });

  if (!user) return reply.notFound("User not found");

  return reply.send({ user });
};
