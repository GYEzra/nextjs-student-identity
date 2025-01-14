import { setupHooks } from "@/hooks/web3/setupHooks";
import { Web3Dependencies } from "@/types/hooks";
import { Web3State } from "@/types/web3";
import { Session } from "next-auth";

export const createDefaultWeb3State = (): Web3State => {
  return {
    isLoading: true,
    isLoggedIn: false,
    ethereum: null,
    contract: null,
    provider: null,
    hooks: setupHooks({ isLoading: true } as any),
    session: null,
  };
};

export const createWeb3State = ({ ethereum, provider, contract, session, isLoading, isLoggedIn }: Web3Dependencies): Web3State => {
  return {
    isLoading,
    ethereum,
    contract,
    provider,
    hooks: setupHooks({ ethereum, provider, contract, isLoading, session, isLoggedIn }),
    session,
    isLoggedIn: session ? true : false,
  };
};
