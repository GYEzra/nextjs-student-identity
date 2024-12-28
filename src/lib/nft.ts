import { getAuthSession } from "@/auth";
import { PinataRes } from "@/types/api";
import { NftMeta } from "@/types/nft";
import { SignedData, SignedRes, VerifyRes } from "@/types/web3";
import { BACKEND_URL, sendRequest, sendRequestFile } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";

export const getSignedData = async (ethereum: MetaMaskInpageProvider): Promise<SignedData> => {
  const session = await getAuthSession();
  const signatureResponse = await sendRequest<IBackendRes<SignedRes>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/nfts/message-signature`,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode !== 200) throw new Error(signatureResponse.message);

  const accounts = (await ethereum?.request({ method: "eth_requestAccounts" })) as string[];
  const account = accounts[0];
  const signedData = await ethereum?.request({
    method: "personal_sign",
    params: [JSON.stringify(signatureResponse.data), account, signatureResponse.data!.id],
  });

  return { account, signedData };
};

export const verifySignature = async (signature: string, signerAddress: string): Promise<VerifyRes> => {
  const session = await getAuthSession();
  const signatureResponse = await sendRequest<IBackendRes<VerifyRes>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/verify-signature`,
    body: {
      signature,
      signerAddress,
    },
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    useCredentials: true,
  });

  if (signatureResponse.statusCode === 201) return signatureResponse.data!;

  throw new Error(signatureResponse.message);
};

export const uploadNftImage = async (formData: FormData): Promise<PinataRes> => {
  const session = await getAuthSession();
  const uploadResponse = await sendRequestFile<IBackendRes<PinataRes>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/nfts/upload-image`,
    body: formData,
    headers: {
      Authorization: `Bearer ${session?.access_token}`,
    },
    useCredentials: true,
  });

  if (uploadResponse.statusCode === 201) return uploadResponse.data!;
  throw new Error(uploadResponse.message);
};

export const uploadNftMeta = async (nftMeta: NftMeta): Promise<PinataRes> => {
  const session = await getAuthSession();
  const uploadResponse = await sendRequest<IBackendRes<PinataRes>>({
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
