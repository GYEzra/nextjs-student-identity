import { setupHooks } from "@/components/hooks/web3/setupHooks";
import { Web3Dependencies } from "@/types/hooks";
import { Web3State } from "@/types/web3";
import { AddressLike, ethers } from "ethers";

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
