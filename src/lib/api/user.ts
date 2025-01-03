"use server";
import { getAuthSession } from "@/auth";
import { Organizational, Personal } from "@/types/user";
import { BACKEND_URL, sendRequest } from "@/utils/api";

export const findUserById = async (id: string) => {
  try {
    const session = await getAuthSession();

    const response = await sendRequest<IBackendRes<Personal | Organizational>>({
      method: "GET",
      url: `${BACKEND_URL}/api/v1/users/${id}`,
      headers: {
        Authorization: `Bearer ${session?.access_token}`,
      },
    });

    if (response.statusCode === 200) {
      return response.data;
    }

    return null;
  } catch (error: any) {}
};
