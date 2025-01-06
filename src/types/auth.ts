import { loginSchema, registerSchema, verifyAccountSchema } from "@/lib/schemas";
import { z } from "zod";

export type LoginData = z.output<typeof loginSchema>;
export type RegisterData = z.output<typeof registerSchema>;
export type VerifyAccountData = z.output<typeof verifyAccountSchema>;
