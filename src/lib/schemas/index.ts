import { z } from "zod";

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png"];
const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes

export const imageSchema =
  typeof window === "undefined"
    ? z.any()
    : z
        .instanceof(FileList)
        .refine((file) => file?.length == 1, "File is required.")
        .refine((file) => ACCEPTED_IMAGE_TYPES.includes(file?.[0]?.type), "Invalid file. choose either JPEG or PNG image")
        .refine((file) => file[0]?.size <= MAX_FILE_SIZE, "Max file size allowed is 4MB.");

const propertiesSchema = z.object({
  key: z.string({ invalid_type_error: "Key must be a string" }).min(1, { message: "Key is required" }),
  value: z.string({ invalid_type_error: "Value must be a string" }).min(1, { message: "Value is required" }),
});

export const nftMetaSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be a string" }).min(1, { message: "Name is required" }),
  description: z.string({ invalid_type_error: "Description must be a string" }).min(1, { message: "Description is required" }),
  image: imageSchema,
  properties: z.array(propertiesSchema),
});

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

export * from "./auth";
