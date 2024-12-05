import { useListedNfts } from "@/components/hooks/web3";
import NftItem from "./item";


const NftList = () => {
    const { nfts } = useListedNfts();

    return (
        <div className="mt-12 max-w-lg mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
            {nfts.data?.map(nft =>
                <div key={nft.tokenId} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                    <NftItem
                        item={nft}
                        buyNft={nfts.buyNft}
                    />
                </div>
            )}
        </div>
    )
}

export default NftList;