import { z } from "zod";
import { imageSchema } from "./image-schema";

export const uploadImageSchema = z.object({
  images: imageSchema,
});
