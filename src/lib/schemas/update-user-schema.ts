import { z } from "zod";
import { phoneSchema } from "./phone-schema";

const nameSchema = z.string().min(1, { message: "Name is required" }).max(255, { message: "Name must be between 1 and 255 characters" });
const bioSchema = z.string().max(2000, { message: "Bio must be between 0 and 2000 characters" });

export const updatePersonalSchema = z.object({
  name: nameSchema,
  bio: bioSchema,
  phone: phoneSchema,
  identity_card: z.coerce.string(),
});

export const updateOrganizationalSchema = z.object({
  name: nameSchema,
  bio: bioSchema,
  adddress: z.string().max(255, { message: "Address only contains 255 characters" }),
  establish_license: z.string().max(255, { message: "Establish license only contains 255 characters" }),
  operate_license: z.string().max(255, { message: "Operate license only contains 255 characters" }),
});
