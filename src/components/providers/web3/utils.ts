import { NftMarketplace } from "@/types/contract-type";
import { Web3Dependencies } from "@/types/hooks";
import { sendRequest } from "@/utils/api";
import { setupHooks, Web3Hooks } from "@hooks/web3/setupHooks";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, Contract, ethers } from "ethers";

declare global {
  interface Window {
    ethereum: MetaMaskInpageProvider;
  }
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null;
};

export type Web3State = {
  hooks: Web3Hooks;
  isLoading: boolean;
} & Nullable<Web3Dependencies>;

export const createDefaultWeb3State = (): Web3State => {
  return {
    isLoading: true,
    ethereum: null,
    contract: null,
    provider: null,
    hooks: setupHooks({ isLoading: true } as any),
  };
};

export const createWeb3State = ({ ethereum, provider, contract, isLoading }: Web3Dependencies): Web3State => {
  return {
    isLoading,
    ethereum,
    contract,
    provider,
    hooks: setupHooks({ ethereum, provider, contract, isLoading }),
  };
};

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const loadContract = async (name: string, provider: BrowserProvider): Promise<NftMarketplace> => {
  const defaultChainId = 11155111;
  const chainId = (await provider!.getNetwork()).chainId ?? defaultChainId;

  // if (!NETWORK_ID) return Promise.reject("Network ID không tìm thấy");

  const res = await sendRequest<IBackendRes<NftMarketplace>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/contracts`,
  });

  if (res.statusCode === 200 && res.data) {
    const contract = res.data as NftMarketplace;
    return contract;
  } else {
    throw new Error("Error loading contract");
  }
};
