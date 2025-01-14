"use client";
import { useListedNfts } from "@/hooks/web3";
import NftItem from "../item";
import { useHasMounted } from "@/hooks/custom";
import Loader from "@/app/loader";

const NftList = () => {
  const hasMounted = useHasMounted();
  const { nfts } = useListedNfts();

  if (!hasMounted) return <Loader />;

  return (
    <div className="mt-12 max-w-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
      {nfts.data?.map((nft) => (
        <div key={nft.tokenId} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
          <NftItem item={nft} buyNft={nfts.buyNft} />
        </div>
      ))}
    </div>
  );
};

export default NftList;
