import { FormLayout } from "@/components/layouts";
import { usePreviewNft } from "@/providers/preview-nft";
import { getPinataCid } from "@/utils";
import clsx from "clsx";

const PreviewNft = () => {
  const { data } = usePreviewNft();

  const imageSrc = data.image ? getPinataCid(data.image) : "/images/nft.jpg";

  return (
    <div className="box flex-shrink-0 flex-grow basis-2/12">
      <div className="border-b border-white/60 px-4 py-2">
        <h2 className="text-xl font-semibold text-white">Xem trước</h2>
      </div>
      <div className="p-10">
        <FormLayout>
          <div className="relative flex justify-center">
            <div className="aspect-square">
              <img className="w-full h-full object-cover rounded-md" src={imageSrc} alt={data.name || "New NFT preview"} />
            </div>
            <div className="avatar absolute -top-1 -left-1">
              <div className="w-10 h-10 ring-white/40 ring-offset-base-100 rounded-full ring-1 ring-offset-2 ">
                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="Creator avatar" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="flex-1 bg-transparent pt-6 flex flex-col justify-between">
            <div>
              <p className="text-base font-medium special-text">Creatures NFT</p>
              <div className="mt-1">
                <p className="text-xl font-semibold text-white">{data.name || "Siêu cấp NFT"}</p>
                <p className="mt-2 mb-3 text-base text-white/80 line-clamp-2">{data.description || "Đây là một sản phẩm độc đáo của chúng tôi"}</p>
              </div>
            </div>
            <div className="overflow-hidden mb-6">
              <dl className="-mx-4 -mt-4 flex flex-wrap">
                {[
                  { label: "Giá", value: data.price, icon: "/images/eth.png" },
                  { label: "Số lượng", value: `1 trên 1` },
                ].map(({ label, value, icon }, idx) => (
                  <div key={idx} className="flex flex-col px-4 pt-4">
                    <dt className="order-2 text-base text-white/80">{label}</dt>
                    <dd className="order-1 text-lg font-semibold special-text flex items-center">
                      {value}
                      {icon && <img className="h-6 ml-1" src={icon} alt={`${label} icon`} />}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </FormLayout>
      </div>
    </div>
  );
};

export default PreviewNft;
