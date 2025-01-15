import { connectWallet, findUserById } from "@/lib/api/user";
import { EthereumHookFactory } from "@/types/hooks";
import { DEFAULT_ETH_ADDRESS } from "@/utils";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type UseAccountResponse = {
  connect: () => void;
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

    const requestAccount = async () => {
      const accounts = (await ethereum?.request({ method: "eth_requestAccounts" })) as string[];
      return accounts;
    };

    const updateWalletAddress = async (walletAddress: string) => {
      const promise = connectWallet(walletAddress);
      await toast.promise(promise, {
        pending: "Waiting for wallet to connect...",
      });
    };

    const connect = async () => {
      try {
        const accounts = await requestAccount();

        debugger;

        if (walletAddress === DEFAULT_ETH_ADDRESS) {
          await updateWalletAddress(accounts[0]);
        }

        mutate(accounts[0]);
        toast.success("Connected successfully");
      } catch (error: any) {
        toast.error(error.shortMessage || error.message);
      }
    };

    const handleAccountsChanged = (...args: unknown[]) => {
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
      ...swr,
    };
  };
