import { INft } from "@/types/nft";
import Link from "next/link";
import Image from "next/image";
import { HiBadgeCheck } from "react-icons/hi";
import { NftPurchaseButtons } from "@/components/ui/button";
import { getPinataCid } from "@/utils";

type NftItemProps = {
  item: INft;
  buyNft?: (tokenId: number, value: number) => Promise<void>;
};

const NftItem = ({ item, buyNft }: NftItemProps) => {
  return (
    <Link href={`/nft/${item.tokenId}`}>
      <div className="p-2 rounded-lg border border-zinc-800 transition-transform transform hover:scale-105 hover:shadow-lg">
        <Image unoptimized src={getPinataCid(item.meta.image)} alt="Nft Image" className="w-full rounded-lg object-cover" width={0} height={0}/>
        <div className="p-3 flex flex-col gap-2 text-start">
          <div className="flex gap-1 items-center">
            <p className="text-xs font-medium text-gray-50">{item.owner.name}</p>
            <HiBadgeCheck className="bg-blue-600 text-white rounded-full size-3" />
          </div>

          <p className="text-sm text-white uppercase font-bold">{item.meta.name}</p>
          <p className="text-sm font-normal text-gray-400">
            Price: <span className="font-bold text-green-400">{item.price}</span>
          </p>
        </div>
        <NftPurchaseButtons item={item} buyNft={buyNft} />
      </div>
    </Link>
  );
};

export default NftItem;
