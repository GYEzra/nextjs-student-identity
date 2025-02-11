import { FormLayout } from "@/components/layouts";
import { usePreviewNft } from "@/providers/preview-nft";
import { getPinataCid } from "@/utils";
import { HiBadgeCheck } from "react-icons/hi";
import clsx from "clsx";

const PreviewNft = () => {
  const { data } = usePreviewNft();

  const imageSrc = data.image ? getPinataCid(data.image) : "/images/nft.jpg";

  return (
    <div className="w-full box basis-2/12 ">
      <div className="border-b border-white/60  px-2 lg:px-4 py-2">
        <h2 className="w-full text-xl font-semibold text-white">Xem trước</h2>
      </div>
      <div className="w-full p-2">
        <FormLayout>
          <div className=" flex justify-center">
            <div className="aspect-square">
              <img
                className="w-full object-cover rounded-md"
                src={imageSrc}
                alt={data.name || "New NFT preview"}
              />
            </div>
          </div>
          <div className="flex-1 bg-transparent pt-6 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <p className="uppercase text-xs text-gray-400">Tên người tạo</p>
                <HiBadgeCheck className="text-blue-500 size-4" />
              </div>

              <p className="text-2xl font-bold text-white">
                {data.name || "Name NFT"}
              </p>
              <div className="bg-zinc-800 rounded-lg p-3 px-4">
                <p className="text-white text-base font-medium">
                  Price:
                  <span className="font-bold text-xl text-orange-400">
                    {" "}
                    9876 ETH
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1 text-white mt-3">
                <p className="font-semibold text-white">Description</p>
                <p className="mb-3 text-sm text-white/80 line-clamp-2">
                  {data.description ||
                    "Đây là một sản phẩm độc đáo của chúng tôi"}
                </p>
              </div>
              <p className="text-white font-medium">Properties</p>
              <div className="grid grid-cols-4 gap-3 pb-4 p-2 lg:p-4 max-h-52 overflow-y-auto">
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
<p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
                <div className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                  <p className="font-normal text-xs text-green-400">
                    Properties
                  </p>
                  <p className="text-sm font-bold">Value</p>
                  <p className="text-sm">12.6% rarity</p>
                </div>
              </div>
            </div>
          </div>
        </FormLayout>
      </div>
    </div>
  );
};

export default PreviewNft;