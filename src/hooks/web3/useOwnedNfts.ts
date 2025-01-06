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
  ({ contract }) =>
  () => {
    const { data, ...swr } = useSWR(contract ? "web3/useOwnedNfts" : null, async () => {
      const nfts: INft[] = [];
      //   const nftsContract = await contract!.getOwnedNfts();
      //   const nftsContractLength = nftsContract.length;

      //   for (let i = 0; i < nftsContractLength; i++) {
      //     const item = nftsContract[i];
      //     const tokenURI = await contract!.tokenURI(item.tokenId);
      //     const metaResponse = await fetch(tokenURI);
      //     const meta: NftMeta = await metaResponse.json();

      //     nfts.push({
      //       tokenId: Number(item.tokenId),
      //       price: Number(item.price),
      //       owner: item.owner,
      //       isListed: item.isListed,
      //       meta,
      //     });
      //   }

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
