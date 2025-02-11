import { getNfts } from "@/lib/api/nft";
import { EthereumHookFactory } from "@/types/hooks";
import { INft } from "@/types/nft";
import { ethers } from "ethers";
import { useCallback } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type UseListedNftsResponse = {
  buyNft: (tokenId: number, price: number) => Promise<void>;
};
type ListedNftsHookFactory = EthereumHookFactory<INft[], UseListedNftsResponse>;

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>;

export const hookFactory: ListedNftsHookFactory =
  ({ contract }) =>
    () => {
      const { data, ...swr } = useSWR("web3/useListedNfts", async () => {
        const queryParams = {
          "filter[isListed]": true,
        };
        const { data } = await getNfts(queryParams);
        return data;
      }, {
        revalidateOnFocus: false,
        revalidateOnMount: false,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
        refreshInterval: 1
      });

      const buyNft = useCallback(
        async (tokenId: number, price: number) => {
          try {
            const convertValue = ethers.parseEther(price.toString());
            const promise = contract!.buy(tokenId, { value: BigInt(convertValue) }).then((tx) => tx.wait());

            await toast.promise(promise, {
              pending: "Processing the transaction",
              success: "Buy successfully",
            });
          } catch (error: any) {
            toast.error(error.shortMessage || error.message);
          }
        },
        [contract]
      );

      return {
        ...swr,
        data: data || [],
        buyNft,
      };
    };
