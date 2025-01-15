import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider } from "ethers";
import { SWRResponse } from "swr";
import { NftMarketplace } from "./contract-type";
import { Session } from "next-auth";

export type SessionDependencies = {
  session: Session | null;
};

export type Web3Dependencies = {
  ethereum: MetaMaskInpageProvider;
  provider: BrowserProvider;
  contract: NftMarketplace;
  isLoading: boolean;
} & SessionDependencies;

export type EthereumHookFactory<D = any, R = any, P = any> = (deps: Partial<Web3Dependencies>) => EthereumHandlerHook<D, R, P>;

export type EthereumHandlerHook<D = any, R = any, P = any> = (params?: P) => EthereumSWRResponse<D, R>;

export type EthereumSWRResponse<D = any, R = any> = SWRResponse<D> & R;
