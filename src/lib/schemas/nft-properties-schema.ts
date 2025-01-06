import { z } from "zod";

export const nftPropertiesSchema = z.object({
  key: z.string({ invalid_type_error: "Key must be a string" }).min(1, { message: "Key is required" }),
  value: z.string({ invalid_type_error: "Value must be a string" }).min(1, { message: "Value is required" }),
});
