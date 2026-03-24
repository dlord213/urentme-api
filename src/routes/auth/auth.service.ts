import bcrypt from "bcrypt";
import { PrismaClient } from "@prisma/client";
import { type RegisterInput, type LoginInput } from "../../types/input.ts";

const SALT_ROUNDS = 12;

export async function registerOwner(
  prisma: PrismaClient,
  input: RegisterInput,
) {
  const existing = await prisma.owner.findUnique({
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

  const owner = await prisma.owner.create({
    data: {
      email: input.email,
      passwordHash,
      firstName: input.firstName,
      lastName: input.lastName,
      celNum: input.celNum,
    },
    select: {
      id: true,
      email: true,
      firstName: true,
      lastName: true,
      celNum: true,
      isActive: true,
      profilePictureUrl: true,
      createdAt: true,
    },
  });

  return owner;
}

export async function validateCredentials(
  prisma: PrismaClient,
  input: LoginInput,
) {
  const owner = await prisma.owner.findUnique({
    where: { email: input.email },
  });

  if (!owner) return null;

  const match = await bcrypt.compare(input.password, owner.passwordHash);
  if (!match) return null;

  if (!owner.isActive) {
    const err = new Error("Account is deactivated") as Error & {
      statusCode: number;
    };
    err.statusCode = 403;
    throw err;
  }

  const { passwordHash: _ph, ...safeOwner } = owner;
  return safeOwner;
}

export function buildTokenPayload(owner: { id: string; email: string }) {
  return { id: owner.id, email: owner.email };
}
