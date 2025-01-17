"use server";
import { getAuthSession } from "@/auth";
import { IUploadFile } from "@/types/response";
import { BACKEND_URL, sendRequestFile } from "@/utils/api";

export const uploadFile = async (data: FormData): Promise<IUploadFile> => {
  const session = await getAuthSession();
  const response = await sendRequestFile<IBackendRes<IUploadFile>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/files/upload`,
    body: data,
    headers: {
      ContentType: "application/form-data",
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};
