import { EthereumHookFactory } from "@/types/hooks";
import { useEffect } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type UseAccountResponse = {
  connect: () => void;
  isLoading: boolean;
  isInstalled: boolean;
};

type AccountHookFactory = EthereumHookFactory<string, UseAccountResponse>;

export type UseAccountHook = ReturnType<AccountHookFactory>;

export const hookFactory: AccountHookFactory =
  ({ provider, ethereum, isLoading, contract }) =>
  () => {
    const {
      data: address,
      mutate,
      isValidating,
      ...swr
    } = useSWR(
      provider ? "web3/useAccount" : null,
      async () => {
        const accounts = await provider!.listAccounts();
        const account = accounts[0];

        if (!account) throw new Error("No Ethereum account detected");

        return account.address;
      },

      { revalidateOnFocus: false, shouldRetryOnError: false }
    );

    useEffect(() => {
      ethereum?.on("accountsChanged", handleAccountsChanged);
      return () => {
        ethereum?.removeListener("accountsChanged", handleAccountsChanged);
      };
    });

    const connect = async () => {
      try {
        const promise = ethereum?.request({ method: "eth_requestAccounts" });

        await toast.promise(promise!, {
          pending: "Đang kết nối ví",
          success: "Kết nối ví thành công",
        });
      } catch (error: any) {
        toast.error(error.message);
      }
    };

    const handleAccountsChanged = (...args: unknown[]) => {
      const accounts = args[0] as string[];
      if (accounts.length === 0) {
        toast.error("Please, connect to Web3 wallet");
      } else if (accounts[0] !== address) {
        mutate(accounts[0]);
      }
    };

    return {
      ...swr,
      data: address,
      isValidating,
      isLoading: isLoading as boolean,
      isInstalled: ethereum?.isMetaMask || false,
      mutate,
      connect,
    };
  };
