import { ResponseData } from "@/types/api";
import { NftMeta, PinataRes } from "@/types/nft";
import { SignedData, SignedRes, VerifyRes } from "@/types/web3";
import { sendRequest, sendRequestFile } from "@/utils/api";
import { MetaMaskInpageProvider } from "@metamask/providers";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const getSignedData = async (ethereum: MetaMaskInpageProvider, accessToken: string): Promise<ResponseData<SignedData>> => {
  try {
    const res = await sendRequest<IBackendRes<SignedRes>>({
      method: "GET",
      url: `${BACKEND_URL}/api/v1/nfts/message-signature`,
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      useCredentials: true,
    });

    if (res.statusCode === 200 && res.data) {
      const accounts = (await ethereum?.request({ method: "eth_requestAccounts" })) as string[];
      const account = accounts[0];
      const signedData = await ethereum?.request({
        method: "personal_sign",
        params: [JSON.stringify(res.data), account, res.data.id],
      });

      return {
        EC: 0,
        data: { account, signedData },
      };
    } else {
      return {
        EC: -1,
        error: res.message,
      };
    }
  } catch (error: any) {
    return {
      EC: -2,
      error: error.message,
    };
  }
};

export const verifySignature = async (signature: string, signerAddress: string, accessToken: string): Promise<ResponseData<VerifyRes>> => {
  try {
    const res = await sendRequest<IBackendRes<VerifyRes>>({
      method: "POST",
      url: `${BACKEND_URL}/api/v1/nfts/verify-signature`,
      body: {
        signature,
        signerAddress,
      },
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      useCredentials: true,
    });

    if (res.statusCode === 201) {
      return {
        EC: 0,
        data: res.data!,
      };
    } else {
      return {
        EC: -1,
        error: res.message,
      };
    }
  } catch (error: any) {
    return {
      EC: -2,
      error: error.message,
    };
  }
};

export const uploadNftImage = async (formData: FormData, token?: string): Promise<ResponseData<PinataRes>> => {
  try {
    const res = await sendRequestFile<IBackendRes<PinataRes>>({
      method: "POST",
      url: `${BACKEND_URL}/api/v1/nfts/upload-image`,
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.statusCode === 201) {
      return {
        EC: 0,
        data: res.data,
      };
    } else {
      return {
        EC: -1,
        error: res.message,
      };
    }
  } catch (error: any) {
    return {
      EC: -2,
      error: error.message,
    };
  }
};

export const uploadNftMeta = async (nftMeta: NftMeta, token: string) => {
  try {
    const res = await sendRequest<IBackendRes<PinataRes>>({
      method: "POST",
      url: `${BACKEND_URL}/api/v1/nfts/upload-metadata`,
      body: {
        name: nftMeta.name,
        image: nftMeta.image,
        description: nftMeta.description,
        properties: nftMeta.properties,
      },
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (res.statusCode === 201) {
      return {
        EC: 0,
        data: res.data,
      };
    }

    return {
      EC: -1,
      error: res.message,
    };
  } catch (error: any) {
    return {
      EC: -2,
      error: error.message,
    };
  }
};
