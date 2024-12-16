"use client";
import { BaseLayout, ErrorAccount, ErrorNetwork } from "@/components/ui";
import { MintNftData, NftMeta } from "@/types/nft";
import { NextPage } from "next";
import { useState } from "react";
import { useWeb3 } from "@/components/providers/web3";
import { useSession } from "next-auth/react";
import { MintNftForm, PreviewNft, UploadNftMetaForm } from "@/components/ui/nft/create";
import { PINATA_DOMAIN } from "@/utils/api";
import { useHasMounted } from "@/utils/customHook";
import { useAccount } from "@/components/hooks/web3";

const CreateNftPage = () => {
    const { ethereum, contract } = useWeb3();
    const { data: session } = useSession();
    const { account } = useAccount();
    const accessToken = session?.access_token!;

    // const [nftURI, setNftURI] = useState(PINATA_DOMAIN + '/ipfs/QmfMzaS1mkiqocSnHAtdFXhQiDX8bDhbGJXY3Gc9dM26DJ');

    let [isTokenURI, setIsTokenURI] = useState(false);;

    const [mintNftData, setMintNftData] = useState<MintNftData>({
        addressTo: "",
        price: 0,
        tokenURI: "",
        isListed: false,
        whoPayGasFee: 'NONE'
    });

    const [nftMeta, setNftMeta] = useState<NftMeta>({
        name: "",
        description: "",
        image: "",
        properties: [
            { key: "attack", value: "0" },
        ]
    });

    const hasMounted = useHasMounted();

    if (!hasMounted) return <></>;
    return (
        <BaseLayout>
            {
                <div className="space-y-12">
                    <div className="border-b border-white/60 pb-12">
                        <h2 className="text-3xl font-semibold leading-7 text-white">Create NFT</h2>
                        <p className="mt-1 text-base leading-6 text-white">
                            Once your item is minted, you will not be able to change any of its information.
                        </p>
                    </div>
                    <div className="pb-12">
                        <div className="flex flex-wrap-reverse justify-between items-center gap-y-4 lg:gap-x-4">
                            <div className="w-full lg:w-2/6">
                                <PreviewNft nftMeta={nftMeta} price={mintNftData.price} />
                            </div>
                            <div className="box w-full lg:w-4/6 lg:flex-1">
                                <div className="flex items-center justify-between flex-wrap lg:flex-nowrap border-b border-white/60 py-2">
                                    <h2 className="text-xl font-semibold text-white">Tạo mới NFT</h2>
                                    <div className="flex justify-between items-center gap-x-2 w-full lg:w-fit cursor-pointer text-md font-medium leading-6 text-neutral-400">
                                        <span>Already have an Token URI?</span>
                                        <input type="checkbox" checked={isTokenURI} className="toggle toggle-primary" onClick={() => setIsTokenURI(isTokenURI = !isTokenURI)} />
                                    </div>
                                </div>
                                {
                                    account?.data
                                        ? (
                                            (mintNftData.tokenURI || isTokenURI) ?
                                                <MintNftForm mintNftData={mintNftData} setMintNftData={setMintNftData} />
                                                :
                                                <UploadNftMetaForm
                                                    ethereum={ethereum!}
                                                    accessToken={accessToken}
                                                    nftMeta={nftMeta}
                                                    setNftMeta={setNftMeta}
                                                    setMintNftData={setMintNftData}
                                                    setIsTokenURI={setIsTokenURI} />
                                        )
                                        : <ErrorAccount />
                                }
                            </div>
                        </div>

                    </div>
                </div>
            }
        </BaseLayout>
    )
}

export default CreateNftPage;