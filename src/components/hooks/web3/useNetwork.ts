import { EthereumHookFactory } from "@/types/hooks";
import useSWR from "swr";

const NETWORKS: { [k: string]: string } = {
  1: "Ethereum Main Network",
  2: "Expanse mainnet",
  3: "Ropsten Test Network",
  4: "Rinkeby Test Network",
  5: "Goerli Test Network",
  42: "Kovan Test Network",
  56: "Binance Smart Chain",
  1337: "Ganache Test Network",
  11155111: "Sepolia Test Network",
};

const targetId = process.env.NEXT_PUBLIC_TARGET_NETWORK_ID as string;
export const targetNetwork = NETWORKS[targetId];

type UseNetworkResponse = {
  isLoading: boolean;
  isSupported: boolean;
  targetNetwork: string;
  isConnectedToNetwork: boolean;
};
type NetworkHookFactory = EthereumHookFactory<string, UseNetworkResponse>;

export type UseNetworkHook = ReturnType<NetworkHookFactory>;

export const hookFactory: NetworkHookFactory =
  ({ provider, isLoading }) =>
  () => {
    const { data, isValidating, ...swr } = useSWR(
      provider ? "web3/useNetwork" : null,
      async () => {
        const chainId = (await provider!.getNetwork()).chainId;

        if (!chainId) {
          throw new Error("No chain ID found. Please make sure you are connected to a Ethereum network.  Ensure Metamask is set to 'Custom RPC' and your Ethereum node is running.  Otherwise, connect to");
        }

        return NETWORKS[Number(chainId)] || "Unknown Network";
      },

      { revalidateOnFocus: false }
    );

    const isSupported = data === targetNetwork;

    return {
      ...swr,
      data,
      isValidating,
      targetNetwork,
      isLoading: isLoading as boolean,
      isConnectedToNetwork: !isLoading && isSupported,
      isSupported,
    };
  };
