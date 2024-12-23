import { Web3Hooks } from "@/hooks/web3/setupHooks";
import { Web3Dependencies } from "@/types/hooks";
import { MetaMaskInpageProvider } from "@metamask/providers";

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

export type SignedRes = {
  id: string;
  timestamp: Date;
};

export type SignedData = {
  account: string;
  signedData: any;
};

export type VerifyRes = {
  message: string;
};
