import { MetaMaskInpageProvider } from "@metamask/providers";
import { BrowserProvider, InfuraProvider } from "ethers";
import { SWRResponse } from "swr";
import { NftMarketplace } from "./contract-type";

export type Web3Dependencies = {
  ethereum: MetaMaskInpageProvider;
  provider: BrowserProvider | InfuraProvider;
  contract: NftMarketplace;
  isLoading: boolean;
};

export type EthereumHookFactory<D = any, R = any, P = any> = (deps: Partial<Web3Dependencies>) => EthereumHandlerHook<D, R, P>;

export type EthereumHandlerHook<D = any, R = any, P = any> = (params?: P) => EthereumSWRResponse<D, R>;

export type EthereumSWRResponse<D = any, R = any> = SWRResponse<D> & R;
