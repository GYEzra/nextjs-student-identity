import { z } from "zod";
import { emailSchema } from "./email-schema";
import { passwordSchema } from "./password-schema";

export const forgetPasswordSchema = z.object({
  email: emailSchema,
  codeId: z.string().min(1, { message: "Code is required" }),
  password: passwordSchema,
});
