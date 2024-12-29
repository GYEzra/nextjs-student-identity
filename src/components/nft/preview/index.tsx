import { FormLayout } from "@/components/layouts";
import { usePreviewNft } from "@/providers/preview-nft";
import { getPinataCid } from "@/utils";

const PreviewNft = () => {
    const { data } = usePreviewNft();

    return (
        <div className="box flex-shrink-0 flex-grow basis-2/12">
            <div className="border-b border-white/60 px-4 py-2">
                <h2 className="text-xl font-semibold text-white">Xem trước</h2>
            </div>
            <div className="p-10">
                <FormLayout>
                    <div className="relative flex justify-center">
                        <div className="aspect-square">
                            <img
                                className={`w-full h-full object-cover rounded-md text-center`}
                                src={data.image ? getPinataCid(data.image) : "/images/nft.jpg"}
                                alt="New NFT"
                            />
                        </div>

                        <div className="avatar absolute -top-1 -left-1">
                            <div className="ring-white/40 ring-offset-base-100 w-10 rounded-full ring-1 ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-transparent pt-6 flex flex-col justify-between">
                        <div className="flex-1">
                            <p className="text-base font-medium special-text">
                                Creatures NFT
                            </p>
                            <div className="block mt-1">
                                <p className="text-xl font-semibold text-white">{data.name || "Siêu cấp NFT"}</p>
                                <p className="mt-2 mb-3 text-base text-white/80 line-clamp-2">{data.description || "Đây là một sản phẩm độc đáo của chúng tôi"}</p>
                            </div>
                        </div>
                        <div className="overflow-hidden mb-6">
                            <dl className="-mx-4 -mt-4 flex flex-wrap">
                                <div className="flex flex-col px-4 pt-4">
                                    <dt className="order-2 text-base text-white/80">Giá</dt>
                                    <dd className="order-1 text-lg font-semibold special-text">
                                        <div className="flex justify-center items-center">
                                            {data.price}
                                            <img className="h-6 ml-1" src="/images/eth.png" alt="ether icon" />
                                        </div>
                                    </dd>
                                </div>
                                <div className="flex flex-col px-4 pt-4">
                                    <dt className="order-2 text-base text-white/80">Số lượng</dt>
                                    <dd className="order-1 text-lg font-semibold special-text">
                                        <div className="flex justify-center items-center">
                                            {'1 trên ' + 1}
                                        </div>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                </FormLayout>
            </div>
        </div>
    )
}

export default PreviewNft;