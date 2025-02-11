import { z } from "zod";
import { emailSchema } from "./email-schema";
import { passwordSchema } from "./password-schema";

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string().min(1, { message: "Password is required" }),
});
