import { z } from "zod";
import { emailSchema } from "./email-schema";
import { passwordSchema } from "./password-schema";
import { AccountType } from "@/types/user";

export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    accountType: z.nativeEnum(AccountType, { message: "Invalid account type" }),
  })
  .refine((values) => values.password === values.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });
