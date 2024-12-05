import { EthereumHookFactory } from "@/types/hooks";
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
  ({ provider, ethereum, isLoading }) =>
  () => {
    const { data, mutate, isValidating, ...swr } = useSWR(
      provider ? "web3/useAccount" : null,
      async () => {
        const accounts = await provider!.listAccounts();
        const account = accounts[0];

        if (!account) throw new Error("No Ethereum account detected");

        return account.address;
      },

      { revalidateOnFocus: false, shouldRetryOnError: false }
    );

    const connect = async () => {
      try {
        const promise = ethereum?.request({ method: "eth_requestAccounts" });

        await toast.promise(promise!, {
          pending: "Đang kết nối ví",
          success: "Kết nối ví thành công",
          error: {
            type: "warning",
          },
        });
      } catch (error) {
        console.error("Error connecting to Ethereum:", error);
      }
    };

    return {
      ...swr,
      data,
      isValidating,
      isLoading: isLoading as boolean,
      isInstalled: ethereum?.isMetaMask || false,
      mutate,
      connect,
    };
  };
