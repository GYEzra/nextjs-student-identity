"use client";
import { useListedNfts } from "@/hooks/web3";
import NftItem from "../item";
import { useHasMounted } from "@/hooks/custom";
import Loader from "@/app/loader";
import { INft } from "@/types/nft";

type NftListProps = {
  items: INft[];
  buyNft?: (tokenId: number, value: number) => Promise<void>;
};

const NftList = ({ items, buyNft }: NftListProps) => {
  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
      {items.map((nft) => (
        <div key={nft.tokenId} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NftItem item={nft} buyNft={buyNft} />
        </div>
      ))}
    </div>
  );
};

export default NftList;
