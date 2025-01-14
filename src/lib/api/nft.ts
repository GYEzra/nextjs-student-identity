"use server";
import { getAuthSession } from "@/auth";
import { INft, INftMeta } from "@/types/nft";
import { IMessageResponse, IPinata, ISigned } from "@/types/response";
import { ISignedData } from "@/types/web3";
import { BACKEND_URL, sendRequest, sendRequestFile } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";

export const getNfts = async (qs?: string): Promise<IModelPaginate<INft[]>> => {
  const response = await sendRequest<IBackendRes<IModelPaginate<INft[]>>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts${qs ? `?${qs}` : ""}`,
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

export const getSignature = async (): Promise<ISigned> => {
  const session = await getAuthSession();
  const signatureResponse = await sendRequest<IBackendRes<ISigned>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/message-signature`,
    headers: {
      Authorization: `Bearer ${session!.access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 200) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
};

export const verifySignature = async (signedData: ISignedData): Promise<IMessageResponse> => {
  const session = await getAuthSession();
  const signatureResponse = await sendRequest<IBackendRes<IMessageResponse>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/verify-signature`,
    body: {
      signature: signedData.signedData,
      signerAddress: signedData.account,
    },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 201) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
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
