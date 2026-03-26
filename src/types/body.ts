import { z } from "zod";
import {
  registerSchemaZod,
  loginSchemaZod,
  refreshSchemaZod,
} from "../routes/auth/schemas";

export type RegisterBody = z.infer<typeof registerSchemaZod>;
export type LoginBody = z.infer<typeof loginSchemaZod>;
export type RefreshBody = z.infer<typeof refreshSchemaZod>;
