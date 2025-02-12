"use client";
import { useWeb3 } from "@/providers/web3";
import { IMessageResponse, ISigned } from "@/types/response";
import { ISignedData } from "@/types/web3";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";

export const handleVerifySignature = async (ethereum: MetaMaskInpageProvider, access_token: string) => {
  const signature = await getSignature(access_token);
  const signedData = await requestToSignature(signature, ethereum!);
  const verifySignaturePromise = verifySignature(signedData, access_token);

  await toast.promise(verifySignaturePromise, {
    pending: "Waiting for verifying signature...",
    success: "Signature verified successfully",
  });
};

const getSignature = async (access_token: string): Promise<ISigned> => {
  const signatureResponse = await sendRequest<IBackendRes<ISigned>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/message-signature`,
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 200) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
};

const verifySignature = async (signedData: ISignedData, access_token: string): Promise<IMessageResponse> => {
  const signatureResponse = await sendRequest<IBackendRes<IMessageResponse>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/verify-signature`,
    body: {
      signature: signedData.signedData,
      signerAddress: signedData.account,
    },
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 201) return signatureResponse.data!;
  throw new Error(signatureResponse.message);
};

const requestToSignature = async (signature: ISigned, ethereum: MetaMaskInpageProvider) => {
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
