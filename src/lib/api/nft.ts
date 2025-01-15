"use server";
import { getAuthSession } from "@/auth";
import { INft, INftMeta } from "@/types/nft";
import { IPinata } from "@/types/response";
import { BACKEND_URL, sendRequest, sendRequestFile } from "@/utils/api";

export const getNfts = async (queryParams?: Object): Promise<IModelPaginate<INft[]>> => {
  const response = await sendRequest<IBackendRes<IModelPaginate<INft[]>>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts`,
    queryParams: queryParams,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const getNftById = async (id: string): Promise<INft> => {
  const response = await sendRequest<IBackendRes<INft>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/${id}`,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const getOwnedNfts = async (): Promise<INft[]> => {
  const session = await getAuthSession();
  const response = await sendRequest<IBackendRes<INft[]>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/owned-nfts`,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const uploadNftImage = async (formData: FormData): Promise<IPinata> => {
  const session = await getAuthSession();
  const response = await sendRequestFile<IBackendRes<IPinata>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/upload-image`,
    body: formData,
    headers: {
      ContentType: "application/form-data",
      Authorization: `Bearer ${session?.access_token}`,
    },
    useCredentials: true,
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};

export const uploadNftMeta = async (nftMeta: INftMeta): Promise<IPinata> => {
  const session = await getAuthSession();
  const uploadResponse = await sendRequest<IBackendRes<IPinata>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/upload-metadata`,
    body: nftMeta,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
  });

  if (uploadResponse.statusCode === 201) return uploadResponse.data!;

  throw new Error(uploadResponse.message);
};
