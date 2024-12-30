"use client";
import { PinataRes } from "@/types/api";
import { NftMeta } from "@/types/nft";
import { SignedData, SignedRes, VerifyRes } from "@/types/web3";
import { BACKEND_URL, sendRequest, sendRequestFile } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";

export const getSignature = async (token: string): Promise<SignedRes> => {
  const signatureResponse = await sendRequest<IBackendRes<SignedRes>>({
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

export const verifySignature = async (signedData: SignedData, token: string): Promise<VerifyRes> => {
  const signatureResponse = await sendRequest<IBackendRes<VerifyRes>>({
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

export const requestToSignature = async (signature: SignedRes, ethereum: MetaMaskInpageProvider): Promise<SignedData> => {
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

export const uploadNftImage = async (formData: FormData, token: string): Promise<PinataRes> => {
  const response = await sendRequestFile<IBackendRes<PinataRes>>({
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

export const uploadNftMeta = async (nftMeta: NftMeta, token: string): Promise<PinataRes> => {
  const uploadResponse = await sendRequest<IBackendRes<PinataRes>>({
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
