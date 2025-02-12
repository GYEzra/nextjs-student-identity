import { getNfts } from "@/lib/api/nft";
import { EthereumHookFactory } from "@/types/hooks";
import { INft, QueryParams } from "@/types/nft";
import { ethers } from "ethers";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import useSWR, { mutate } from "swr";

type UseListedNftsResponse = {
  buyNft: (tokenId: number, price: number) => Promise<void>;
  query: (queryParams: QueryParams) => void;
};
type ListedNftsHookFactory = EthereumHookFactory<IModelPaginate<INft[]>, UseListedNftsResponse>;

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>;

const DEFAULT_PAGE = 1;
const ITEMS_PER_PAGE = 6;
const DEFAULT_QUERY_PARAMS = {
  page: DEFAULT_PAGE,
  limit: ITEMS_PER_PAGE
};

export const hookFactory: ListedNftsHookFactory =
  ({ contract }) =>
    () => {
      const [queryParams, setQueryParams] = useState<QueryParams>(DEFAULT_QUERY_PARAMS);

      const { data, mutate, ...swr } = useSWR("web3/useListedNfts", async () => {
        const data = await getNfts(queryParams);
        return data;
      }, {
        revalidateOnFocus: false,
        revalidateOnMount: true,
        revalidateOnReconnect: false,
        refreshWhenOffline: false,
        refreshWhenHidden: false,
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

      const query = async (queryParams: QueryParams) => {
        setQueryParams(prevQueryParams => ({ ...prevQueryParams, ...queryParams }));
      }

      useEffect(() => {
        mutate();
      }, [queryParams])

      return {
        ...swr,
        mutate,
        data: data,
        buyNft,
        query
      };
    };
