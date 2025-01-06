import { z } from "zod";
import { imageSchema } from "./image-schema";
import { nftPropertiesSchema } from "./nft-properties-schema";

export const nftMetaSchema = z.object({
  name: z.string({ invalid_type_error: "Name must be a string" }).min(1, { message: "Name is required" }),
  description: z.string({ invalid_type_error: "Description must be a string" }).min(1, { message: "Description is required" }),
  image: imageSchema,
  properties: z.array(nftPropertiesSchema),
});
