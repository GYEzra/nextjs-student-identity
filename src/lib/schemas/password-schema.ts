import { z } from "zod";

export const passwordSchema = z.string().min(1, { message: "Password is required" }).regex(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$"), {
  message: "Password must be at least 8 characters and contain an uppercase letter, lowercase letter, and number",
});
