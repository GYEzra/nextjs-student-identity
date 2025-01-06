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
