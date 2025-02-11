import { z } from "zod";

export const verifyAccountSchema = z.object({
  _id: z.string().min(1, { message: "ID is required" }),
  codeId: z.string().min(1, { message: "Verification code is required" }),
});
