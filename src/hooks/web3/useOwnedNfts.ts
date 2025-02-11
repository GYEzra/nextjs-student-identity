import { getOwnedNfts } from "@/lib/api/nft";
import { EthereumHookFactory } from "@/types/hooks";
import { INft } from "@/types/nft";
import { useCallback } from "react";
import useSWR from "swr";

type UseOwnedNftsResponse = {
  listNft: (tokenId: number, price: number) => Promise<void>;
};
type OwnedNftsHookFactory = EthereumHookFactory<INft[], UseOwnedNftsResponse>;

export type UseOwnedNftsHook = ReturnType<OwnedNftsHookFactory>;

export const hookFactory: OwnedNftsHookFactory =
  ({ session }) =>
  () => {
    const { data, ...swr } = useSWR(session ? "web3/useOwnedNfts" : null, async () => {
      const nfts = await getOwnedNfts();
      return nfts;
    });

    const listNft = useCallback(async (tokenId: number, price: number) => {
      try {
        // const priceToEther = ethers.formatEther(price.toString()); // Lấy lên là wei cần chuyển về Ether
        // const priceBN = ethers.parseEther(priceToEther); // Chuyển sang Gwei
        // const result = await contract?.placeNftOnSale(tokenId, priceBN, {
        //   value: ethers.parseEther(LISTING_FEE),
        // });
        // await result?.wait();
      } catch (e: any) {
        throw new Error(e.message);
      }
    }, []);

    return {
      ...swr,
      data: data || [],
      listNft,
    };
  };
