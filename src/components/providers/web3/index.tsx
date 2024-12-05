"use client";
import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { createDefaultWeb3State, createWeb3State, loadContract, Web3State } from "./utils";
import { BrowserProvider } from "ethers";
import React from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { NftMarketplace } from "@/types/contract-type";

type Web3ProviderProps = {
  children: React.ReactNode;
};

const pageReload = () => location.reload();

const setGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
  ethereum.on("chainChanged", pageReload);
  ethereum.on("accountsChanged", pageReload);
};
const removeGlobalListeners = (ethereum: MetaMaskInpageProvider) => {
  ethereum?.removeListener("chainChanged", pageReload);
  ethereum?.removeListener("accountsChanged", pageReload);
};

const Web3Context = createContext<Web3State>(createDefaultWeb3State());

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3State>(createDefaultWeb3State());

  useEffect(() => {
    (async () => {
      try {
        const ethereum = window.ethereum;
        const provider = new BrowserProvider(ethereum);
        const contract = await loadContract("NftMarketplace", provider);

        const accounts = await provider.listAccounts();
        let signedContract;

        if (accounts.length !== 0) {
          const signer = await provider.getSigner();
          signedContract = contract.connect(signer);
        }

        setTimeout(() => setGlobalListeners(ethereum), 500);
        setWeb3(
          createWeb3State({
            ethereum: ethereum,
            contract: (signedContract ?? contract) as unknown as NftMarketplace,
            provider,
            isLoading: false,
          })
        );
      } catch (error) {
        console.error("Failed to load contract: ", error);
        console.error("Failed to load web3, make sure you have Metamask installed and connected to the Ethereum network.");
        setWeb3((api: any) => createWeb3State({ ...(api as any), isLoading: false, ethereum: window.ethereum || null }));
      }
    })();
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
