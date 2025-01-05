"use client";
import { useAccount } from "@/hooks/web3";
import { Nft } from "@/types/nft";
import { getPinataCid } from "@/utils";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

type NftItemProps = {
    item: Nft;
    buyNft: (tokenId: number, value: number) => Promise<void>;
};

const NftItem: React.FC<NftItemProps> = ({ item, buyNft }) => {
    const { data: session } = useSession();
    const { account } = useAccount();
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div className="flex flex-col h-full bg-gray-900 p-4 rounded-lg">
            <div className="relative h-[200px]">
                <img
                    className="h-full w-full object-cover rounded-md"
                    src={getPinataCid(item.meta.image)}
                    alt="New NFT"
                />
                {session?.user.image ? (
                    <div className="avatar absolute -top-1 -left-1">
                        <div className="ring-white/40 ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                            <Image
                                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                alt="Avatar"
                                layout="fill"
                                objectFit="contain"
                                loading="eager"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="avatar absolute -top-1 -left-1 placeholder">
                        <div className="ring-white/40 ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                            <span className="bg-neutral text-neutral-content">{session?.user.name}</span>
                        </div>
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-between flex-1 bg-transparent pt-4">
                <div>
                    <p className="text-base font-medium special-text">Creatures NFT</p>
                    <div className="mt-1">
                        <p className="text-xl font-semibold text-white">{item.meta.name}</p>
                        <div className="mt-2 mb-3 text-base text-white/80">
                            <p className={isExpanded ? "" : "line-clamp-2"}>{item.meta.description}</p>
                            {item.meta.description.length > 80 && (
                                <button
                                    onClick={() => setIsExpanded(!isExpanded)}
                                    className="text-blue-500 hover:underline text-sm mt-1"
                                >
                                    {isExpanded ? "Thu gọn" : "Xem thêm"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <div className="overflow-hidden mb-6">
                    <dl className="-mx-4 -mt-4 flex flex-wrap">
                        <div className="flex flex-col px-4 pt-4">
                            <dt className="order-2 text-base text-white/80">Giá</dt>
                            <dd className="order-1 text-lg font-semibold special-text">
                                <div className="flex justify-center items-center">
                                    {item.price}
                                    <img className="h-6 ml-1" src="/images/eth.png" alt="ether icon" />
                                </div>
                            </dd>
                        </div>
                        <div className="flex flex-col px-4 pt-4">
                            <dt className="order-2 text-base text-white/80">Số lượng</dt>
                            <dd className="order-1 text-lg font-semibold special-text">
                                <div className="flex justify-center items-center">1 trên 1</div>
                            </dd>
                        </div>
                    </dl>
                </div>
                <div>
                    {session && session.user ? (
                        account.isInstalled && account.data ? (
                            <button
                                onClick={() => buyNft(item.tokenId, item.price)}
                                type="button"
                                className="special-button w-full"
                            >
                                Mua
                            </button>
                        ) : (
                            <button
                                onClick={() => account.connect()}
                                type="button"
                                className="special-button w-full"
                            >
                                Kết nối ví
                            </button>
                        )
                    ) : (
                        <button
                            type="button"
                            className="special-button w-full"
                            onClick={() => signIn()}
                        >
                            Đăng nhập để mua
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default NftItem;
