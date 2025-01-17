"use client";
import { createContext, FunctionComponent, useContext, useEffect, useState } from "react";
import { BrowserProvider, Contract, ethers, InfuraProvider } from "ethers";
import React from "react";
import { MetaMaskInpageProvider } from "@metamask/providers";
import { Web3State } from "@/types/web3";
import { NftMarketplace } from "@/types/contract-type";
import { createDefaultWeb3State, createWeb3State } from "./utils";
import { useSession } from "next-auth/react";
import { getArtifact } from "@/lib/api/contract";

type Web3ProviderProps = {
  children: React.ReactNode;
};

const pageReload = () => location.reload();

const Web3Context = createContext<Web3State>(createDefaultWeb3State());

const Web3Provider: FunctionComponent<Web3ProviderProps> = ({ children }) => {
  const [web3, setWeb3] = useState<Web3State>(createDefaultWeb3State());
  const { data: session } = useSession();

  useEffect(() => {
    const initWeb3 = async () => {
      try {
        const ethereum = window.ethereum;
        const provider = new BrowserProvider(ethereum);

        const { address, abi } = await getArtifact();
        const contract = new ethers.Contract(address, abi, provider);

        setTimeout(() => setListeners(ethereum, contract, provider), 500);
        setWeb3(
          createWeb3State({
            ethereum: ethereum,
            contract: contract as unknown as NftMarketplace,
            provider,
            session,
            isLoading: false,
          })
        );

        handleSignedContract(contract, provider);
      } catch (error: any) {
        setWeb3((api: any) => createWeb3State({ ...(api as any), isLoading: false, session }));
      }
    };

    initWeb3();
    return () => removeListeners(window.ethereum);
  }, []);

  const handleSignedContract = async (contract: Contract, provider: BrowserProvider) => {
    const accounts = await provider?.listAccounts();

    if (accounts.length === 0) return;

    const signer = await provider?.getSigner(session?.user.walletAddress);
    const signedContract = contract?.connect(signer);

    setWeb3((api: any) => createWeb3State({ ...(api as any), contract: signedContract as unknown as NftMarketplace }));
  };

  const setListeners = (ethereum: MetaMaskInpageProvider, contract: Contract, provider: BrowserProvider) => {
    ethereum?.on("chainChanged", pageReload);
    ethereum?.on("accountsChanged", handleAccountsChanged(ethereum, contract, provider));
  };

  const removeListeners = (ethereum: MetaMaskInpageProvider) => {
    ethereum?.removeListener("chainChanged", pageReload);
    ethereum?.removeListener("accountsChanged", handleAccountsChanged);
  };

  const handleAccountsChanged = (ethereum: MetaMaskInpageProvider, contract: Contract, provider: BrowserProvider) => async () => {
    const isLocked = !(await ethereum._metamask.isUnlocked());
    if (isLocked) {
      pageReload();
    } else {
      await handleSignedContract(contract, provider);
    }
  };

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
