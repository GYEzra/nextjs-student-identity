import { getNfts } from "@/lib/api/nft";
import { EthereumHookFactory } from "@/types/hooks";
import { INft, INftMeta } from "@/types/nft";
import { ethers } from "ethers";
import { useCallback } from "react";
import { toast } from "react-toastify";
import useSWR from "swr";

type UseListedNftsResponse = {
  buyNft: (tokenId: number, value: number) => Promise<void>;
};
type ListedNftsHookFactory = EthereumHookFactory<INft[], UseListedNftsResponse>;

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>;

export const hookFactory: ListedNftsHookFactory =
  ({ contract }) =>
  () => {
    const { data, ...swr } = useSWR("web3/useListedNfts", async () => {
      const { data } = await getNfts();
      return data;
    });

    const buyNft = useCallback(
      async (tokenId: number, price: number) => {
        try {
          const convertValue = ethers.parseEther(price.toString());
          const tx = await contract!.buy(tokenId, { value: BigInt(convertValue) });

          await toast.promise(tx.wait(), {
            pending: "Đang mua NFT",
            success: "Mua thành công",
            error: "Đã xảy ra lỗi khi mua",
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
