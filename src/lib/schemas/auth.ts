import { AccountType } from "@/types/user";
import { z } from "zod";

const emailSchema = z.string().min(1, "Email is required").email({ message: "Invalid email" });

const passwordSchema = z.string().min(1, { message: "Password is required" }).regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), {
  message: "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number",
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});

export const registerSchema = z
  .object({
    name: z.string().min(1, "Name is required"),
    email: emailSchema,
    password: passwordSchema,
    confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
    accountType: z.nativeEnum(AccountType, { message: "Invalid account type" }),
  })
  .refine((values) => values.password === values.confirmPassword, { message: "Passwords do not match", path: ["confirmPassword"] });

export const verifyAccountSchema = z.object({
  code: z.string().min(1, { message: "Verification code is required" }),
});
