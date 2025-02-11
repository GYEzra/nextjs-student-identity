import { z } from "zod";

export const nftSchema = z.object({
  tokenURI: z.string({ invalid_type_error: "Token URI must be a string" }).min(1, { message: "Token URI is required" }).url({ message: "Invalid URL" }),
  addressTo: z.string().length(42, { message: "Invalid Ethereum address" }),
  price: z
    .string()
    .min(1, { message: "Price is required" })
    .regex(/^\d+(\.\d{0,6})?$/, { message: "Prices can only have a maximum of 6 decimal places" })
    .pipe(z.number({ coerce: true, invalid_type_error: "Price is invalid" }).finite().gte(0, { message: "Price must be a positive number" }).lte(1000000, { message: "Price must be less than or equal to 1,000,000" })),
  isListed: z.boolean().default(false),
});
