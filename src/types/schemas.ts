import { z } from "zod";
import { loginSchema, registerSchema, verifyAccountSchema, forgetPasswordSchema, nftSchema, nftMetaSchema } from "@/lib/schemas";
import { updateOrganizationalSchema, updatePersonalSchema } from "@/lib/schemas/update-user-schema";
import { uploadImageSchema } from "@/lib/schemas/upload-image-schema";

export type LoginData = z.output<typeof loginSchema>;
export type RegisterData = z.output<typeof registerSchema>;
export type VerifyAccountData = z.output<typeof verifyAccountSchema>;
export type ForgetPasswordData = z.output<typeof forgetPasswordSchema>;

export type NftData = z.output<typeof nftSchema>;
export type NftMetaData = z.output<typeof nftMetaSchema>;

export type UpdatePersonalData = z.output<typeof updatePersonalSchema>;
export type UpdateOrganizationalData = z.output<typeof updateOrganizationalSchema>;

export type UploadImageData = z.output<typeof uploadImageSchema>;
