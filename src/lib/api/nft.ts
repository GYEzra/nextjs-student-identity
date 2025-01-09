"use client";
import { INft, INftMeta } from "@/types/nft";
import { IPaginate, IPinata, ISigned, IVerifyRes, IVerifySignature } from "@/types/response";
import { ISignedData } from "@/types/web3";
import { BACKEND_URL, sendRequest, sendRequestFile } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";

export const getNfts = async (qs?: string): Promise<IPaginate<INft[]>> => {
  const response = await sendRequest<IBackendRes<IPaginate<INft[]>>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts${qs ? `?${qs}` : ""}`,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const getSignature = async (token: string): Promise<ISigned> => {
  const signatureResponse = await sendRequest<IBackendRes<ISigned>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/message-signature`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 200) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
};

export const verifySignature = async (signedData: ISignedData, token: string): Promise<IVerifySignature> => {
  const signatureResponse = await sendRequest<IBackendRes<IVerifySignature>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/verify-signature`,
    body: {
      signature: signedData.signedData,
      signerAddress: signedData.account,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 201) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
};

export const requestToSignature = async (signature: ISigned, ethereum: MetaMaskInpageProvider): Promise<ISignedData> => {
  try {
    const accounts = (await ethereum.request({ method: "eth_requestAccounts" })) as string[];
    const account = accounts[0];
    const signedData = (await ethereum.request({
      method: "personal_sign",
      params: [JSON.stringify(signature), account, signature.id],
    })) as string;
    return { account, signedData };
  } catch (error: any) {
    throw new Error(error.reason || "Error signing transaction");
  }
};

export const uploadNftImage = async (formData: FormData, token: string): Promise<IPinata> => {
  const response = await sendRequestFile<IBackendRes<IPinata>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/upload-image`,
    body: formData,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    useCredentials: true,
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};

export const uploadNftMeta = async (nftMeta: INftMeta, token: string): Promise<IPinata> => {
  const uploadResponse = await sendRequest<IBackendRes<IPinata>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/upload-metadata`,
    body: nftMeta,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (uploadResponse.statusCode === 201) return uploadResponse.data!;

  throw new Error(uploadResponse.message);
};
