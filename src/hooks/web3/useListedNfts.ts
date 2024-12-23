import { EthereumHookFactory } from "@/types/hooks";
import { Nft, NftMeta } from "@/types/nft";
import { ethers } from "ethers";
import { useCallback } from "react";
import useSWR from "swr";

type UseListedNftsResponse = {
  buyNft: (tokenId: number, value: number) => Promise<void>;
};
type ListedNftsHookFactory = EthereumHookFactory<Nft[], UseListedNftsResponse>;

export type UseListedNftsHook = ReturnType<ListedNftsHookFactory>;

export const hookFactory: ListedNftsHookFactory =
  ({ contract }) =>
  () => {
    const { data, ...swr } = useSWR(contract ? "web3/useListedNfts" : null, async () => {
      const nfts: Nft[] = [];
      const nftsContract = await contract!.getAllNftsOnSale();
      const nftsContractLength = nftsContract.length;

      console.log("Listed NFTs: ", nftsContract);

      for (let i = 0; i < nftsContractLength; i++) {
        const item = nftsContract[i];
        const tokenURI = await contract!.tokenURI(item.tokenId);
        const metaResponse = await fetch(tokenURI);
        const meta: NftMeta = await metaResponse.json();

        nfts.push({
          tokenId: Number(item.tokenId),
          price: parseFloat(ethers.formatEther(item.price)),
          owner: item.owner,
          isListed: item.isListed,
          meta,
        });
      }

      return nfts;
    });

    const buyNft = useCallback(async (tokenId: number, price: number) => {
      try {
        // const convertValue = ethers.parseEther(price.toString());
        // console.log("Check buy: ", convertValue);
        // const promise = contract!.buy(tokenId, { value: BigInt(convertValue) });
        // const res = await toast.promise(promise, {
        //   pending: "Đang mua NFT",
        //   success: "Mua thành công",
        //   error: "Đã xảy ra lỗi khi mua",
        // });
        // await res.wait();
      } catch (error: any) {
        throw new Error("Error buying NFT:", error.message);
      }
    }, []);

    return {
      ...swr,
      data: data || [],
      buyNft,
    };
  };
