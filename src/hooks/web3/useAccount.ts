import { connectWallet } from "@/lib/api/user";
import { EthereumHookFactory } from "@/types/hooks";
import { DEFAULT_ETH_ADDRESS } from "@/utils";
import { ethers } from "ethers";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type UseAccountResponse = {
  connect: () => Promise<void>;
  getBalance: () => Promise<number>;
  isLoading: boolean;
  isInstalled: boolean;
  isLoggedIn: boolean;
  isConnectedWallet: boolean;
  hasWalletAddress: boolean;
};

type AccountHookFactory = EthereumHookFactory<string | undefined, UseAccountResponse>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: AccountHookFactory =
  ({ provider, ethereum, session }) =>
    () => {
      const walletAddress = session?.user.walletAddress;
      const {
        data: currentAddress,
        mutate,
        isValidating,
        ...swr
      } = useSWR(
        provider && session ? "web3/useAccount" : null,
        async () => {
          const accounts = await provider?.listAccounts();
          const account = accounts?.at(0);

          return account?.address;
        },
        { revalidateOnFocus: false, shouldRetryOnError: false }
      );

      const requestAccount = async (): Promise<string[]> => {
        const accounts = (await ethereum?.request({ method: "eth_requestAccounts" })) as string[];
        return accounts;
      };

      const updateWalletAddress = async (walletAddress: string): Promise<void> => {
        const promise = connectWallet(walletAddress);
        await toast.promise(promise, {
          pending: "Waiting for wallet to connect...",
        });
      };

      const connect = async (): Promise<void> => {
        try {
          const accounts = await requestAccount();

          if (walletAddress === DEFAULT_ETH_ADDRESS) {
            await updateWalletAddress(accounts[0]);
          }

          mutate(accounts[0]);
          toast.success("Connected successfully");
        } catch (error: any) {
          toast.error(error.shortMessage || error.message);
        }
      };

      const getBalance = async (): Promise<number> => {
        if (walletAddress === DEFAULT_ETH_ADDRESS || !provider) return 0;

        const balance = await provider.getBalance(walletAddress!);
        const balanceInEther = ethers.formatEther(balance);

        return Number(balanceInEther);
      };

      const handleAccountsChanged = (...args: unknown[]): void => {
        const accounts = args[0] as string[];
        if (accounts.length > 0 && accounts[0] !== currentAddress) {
          mutate(accounts[0]);
        }
      };

      useEffect(() => {
        ethereum?.on("accountsChanged", handleAccountsChanged);
        return () => {
          ethereum?.removeListener("accountsChanged", handleAccountsChanged);
        };
      });

      return {
        data: walletAddress,
        isConnectedWallet: !!walletAddress && walletAddress === currentAddress,
        hasWalletAddress: !!walletAddress && walletAddress !== DEFAULT_ETH_ADDRESS,
        isInstalled: ethereum?.isMetaMask || false,
        isLoggedIn: !!session,
        isValidating,
        mutate,
        connect,
        getBalance,
        ...swr,
      };
    };
