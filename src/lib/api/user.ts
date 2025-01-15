"use server";
import { getAuthSession } from "@/auth";
import { IMessageResponse } from "@/types/response";
import { Organizational, Personal } from "@/types/user";
import { BACKEND_URL, sendRequest } from "@/utils/api";

export const findUserById = async (id: string): Promise<Personal | Organizational> => {
  const session = await getAuthSession();

  const response = await sendRequest<IBackendRes<Personal | Organizational>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/users/${id}`,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const connectWallet = async (walletAddress: string): Promise<IMessageResponse> => {
  const session = await getAuthSession();

  const response = await sendRequest<IBackendRes<IMessageResponse>>({
    method: "PATCH",
    url: `${BACKEND_URL}/api/v1/users/connect-wallet`,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    body: { walletAddress },
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};
