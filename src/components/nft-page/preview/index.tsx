import { FormLayout } from "@/components/layouts";
import { usePreviewNft } from "@/providers/preview-nft";
import { getPinataCid } from "@/utils";
import { HiBadgeCheck } from "react-icons/hi";
import clsx from "clsx";

const DEFAULT_NFT_IMAGE = "/images/nft.jpg";

const PreviewNft = () => {
  const { data } = usePreviewNft();

  const imageSrc = data.image ? getPinataCid(data.image) : DEFAULT_NFT_IMAGE;

  return (
    <div className="w-full box basis-2/12 ">
      <div className="border-b border-white/60  px-2 lg:px-4 py-2">
        <h2 className="w-full text-xl font-semibold text-white">Preview NFT</h2>
      </div>
      <div className="w-full p-2">
        <FormLayout>
          <div className=" flex justify-center">
            <div className="aspect-square">
              <img
                className="w-full object-cover rounded-md"
                src={imageSrc}
                alt="Preview NFT Image"
              />
            </div>
          </div>
          <div className="flex-1 bg-transparent pt-6 flex flex-col justify-between">
            <div className="flex flex-col gap-2">
              <div className="flex gap-1 items-center">
                <p className="uppercase text-xs text-gray-400">{data.creator}</p>
                <HiBadgeCheck className="text-blue-500 size-4" />
              </div>

              <p className="text-2xl font-bold text-white">
                {data.name}
              </p>
              <div className="bg-zinc-800 rounded-lg p-3 px-4">
                <p className="text-white text-base font-medium">
                  Price:
                  <span className="font-bold text-xl text-orange-400">
                    {" "}
                    {data.price} ETH
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1 text-white mt-3">
                <p className="font-semibold text-white">Description</p>
                <p className="mb-3 text-sm text-white/80 line-clamp-2">
                  {data.description}
                </p>
              </div>
              <p className="text-white font-medium">Properties</p>
              <div className="grid grid-cols-4 gap-3 pb-4 p-2 lg:p-4 max-h-52 overflow-y-auto">
                {
                  data.properties?.map(property => (
                    <div key={property.key} className="col-span-2 flex flex-col gap-1 border border-zinc-500 rounded-lg text-white p-2 text-center">
                      <p className="font-normal text-xs text-green-400">
                        Properties
                      </p>
                      <p className="text-sm font-bold">{property.key}</p>
                      <p className="text-sm">{property.value}</p>
                    </div>
                  ))
                }

              </div>
            </div>
          </div>
        </FormLayout>
      </div>
    </div>
  );
};

export default PreviewNft;