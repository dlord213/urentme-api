import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { RegisterInput, LoginInput } from "../../types/input.js";

const SALT_ROUNDS = 12;

export async function registerUser(prisma: PrismaClient, input: RegisterInput) {
  const existing = await prisma.user.findUnique({
    where: { email: input.email },
  });
  if (existing) {
    const err = new Error("Email already in use") as Error & {
      statusCode: number;
    };
    err.statusCode = 409;
    throw err;
  }

  const passwordHash = await bcrypt.hash(input.password, SALT_ROUNDS);

  const user = await prisma.user.create({
    data: {
      email: input.email,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
      phone: input.phone,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      phone: true,
      role: true,
      isActive: true,
      profilePictureUrl: true,
      createdAt: true,
    },
  });

  return user;
}

export async function validateCredentials(
  prisma: PrismaClient,
  input: LoginInput,
) {
  const user = await prisma.user.findUnique({ where: { email: input.email } });

  if (!user) return null;

  const match = await bcrypt.compare(input.password, user.passwordHash);
  if (!match) return null;

  if (!user.isActive) {
    const err = new Error("Account is deactivated") as Error & {
      statusCode: number;
    };
    err.statusCode = 403;
    throw err;
  }

  const { passwordHash: _ph, ...safeUser } = user;
  return safeUser;
}

export function buildTokenPayload(user: {
  id: string;
  email: string;
  role: string;
}) {
  return { sub: user.id, email: user.email, role: user.role };
}
