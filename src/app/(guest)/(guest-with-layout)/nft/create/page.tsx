"use client";

import { MintNftForm, PreviewNft, UploadNftMetaForm } from "@/components/nft";
import { ErrorAccount } from "@/components/ui";
import { useAccount } from "@/hooks/web3";
import { PreviewNftProvider } from "@/providers";
import { useState } from "react";

const CreateNftPage = () => {
    const { account } = useAccount();
    const [isTokenURI, setIsTokenURI] = useState<boolean>(false);
    const [tokenURI, setTokenURI] = useState<string | undefined>(undefined);


    return (
        <div className="space-y-12">
            <div className="border-b border-white/60 pb-12">
                <h2 className="text-3xl font-semibold leading-7 text-white">Create NFT</h2>
                <p className="mt-1 text-base leading-6 text-white">
                    Once your item is minted, you will not be able to change any of its information.
                </p>
            </div>
            <div className="pb-12">
                <PreviewNftProvider>
                    <div className="flex flex-wrap-reverse justify-between items-center gap-y-4 lg:gap-x-4">
                        <div className="w-full lg:w-2/6">
                            <PreviewNft />
                        </div>
                        <div className="box w-full lg:w-4/6 lg:flex-1">
                            <div className="flex items-center justify-between flex-wrap lg:flex-nowrap border-b border-white/60 py-2">
                                <h2 className="text-xl font-semibold text-white">Tạo mới NFT</h2>
                                <div className="flex justify-between items-center gap-x-2 w-full lg:w-fit cursor-pointer text-md font-medium leading-6 text-neutral-400">
                                    <span>Already have an Token URI?</span>
                                    <input type="checkbox" checked={(isTokenURI || !!tokenURI)} readOnly className="toggle toggle-primary" onClick={() => setIsTokenURI(!isTokenURI)} />
                                </div>
                            </div>
                            {
                                account?.data
                                    ? (
                                        (isTokenURI || tokenURI) ?
                                            <MintNftForm tokenURI={tokenURI} />
                                            :
                                            <UploadNftMetaForm
                                                setTokenURI={setTokenURI} />
                                    )
                                    : <ErrorAccount />
                            }
                        </div>
                    </div>
                </PreviewNftProvider>

            </div>
        </div>
    )
}

export default CreateNftPage;