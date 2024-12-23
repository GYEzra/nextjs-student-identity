"use client";
import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { BrowserProvider } from "ethers";
import React from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Web3State } from "@/types/web3";
import { NftMarketplace } from "@/types/contract-type";
import { loadContract } from "@/lib/contract";
import { createDefaultWeb3State, createWeb3State } from "./utils";

type Web3ProviderProps = {
  children: React.ReactNode;
};

const pageReload = () => location.reload();

const setGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
  ethereum.on("chainChanged", pageReload);
  ethereum.on("accountsChanged", handleAccountsChanged(ethereum));
};
const removeGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
  ethereum?.removeListener("chainChanged", pageReload);
  ethereum?.removeListener("accountsChanged", handleAccountsChanged);
};

const handleAccountsChanged = (ethereum: MetaMaskInpageProvider) => async () => {
  const isLocked = !(await ethereum._metamask.isUnlocked());
  if (isLocked) {
    pageReload();
  }
}

const Web3Context = createContext<Web3State>(createDefaultWeb3State());

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3State>(createDefaultWeb3State());

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const ethereum = window.ethereum;
        const provider = new BrowserProvider(ethereum);
        const contract = await loadContract(provider, 'NftMarketplace');

        setTimeout(() => setGlobalListeners(ethereum), 500);
        setWeb3(
          createWeb3State({
            ethereum: ethereum,
            contract: contract as unknown as NftMarketplace,
            provider,
            isLoading: false,
          })
        );
      } catch (error: any) {
        setWeb3((api: any) => createWeb3State({ ...(api as any), isLoading: false, ethereum: window.ethereum || null }));
      }
    }

    initWeb3();

    return () => removeGlobalListeners(window.ethereum);
  }, []);

  return <Web3Context.Provider value={web3}>{children}</Web3Context.Provider>;
};

export function useWeb3() {
  return useContext(Web3Context);
}

export function useHooks() {
  const { hooks } = useWeb3();
  return hooks;
}

export default Web3Provider;
