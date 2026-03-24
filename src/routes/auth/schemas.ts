import { z } from "zod";

export const registerSchemaZod = z.object({
  email: z.string().email(),
  password: z.string().min(8),
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  celNum: z.string().optional(),
});

export const loginSchemaZod = z.object({
  email: z.string().email(),
  password: z.string(),
});

export const refreshSchemaZod = z.object({
  refreshToken: z.string(),
});
