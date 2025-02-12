"use client";
import Loader from "@/app/loader";
import { useHasMounted } from "@/hooks/custom";
import { getNfts } from "@/lib/api/nft";
import { INft } from "@/types/nft";
import { getPinataCid } from "@/utils";
import { useCallback, useEffect, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Ranking = () => {
  const hasMounted = useHasMounted();
  const [activeTab, setActiveTab] = useState<boolean>(true);
  const [nfts, setNfts] = useState<INft[]>([]);

  const fetchNfts = useCallback(async () => {
    const queryParams = {
      page: 1,
      limit: 12,
      "filter[isListed]": activeTab,
      sort: "price",
    };

    const response = await getNfts(queryParams);
    setNfts(response.data);
  }, [activeTab])

  useEffect(() => {
    fetchNfts();
  }, [fetchNfts]);

  const toogleTab = () => setActiveTab(!activeTab);

  if (!hasMounted) return <Loader />;

  return (
    <div className=" text-white px-8 py-10">
      <h1 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-6 text-center">NFTs Stable Price</h1>
      <div className="flex gap-4 justify-center mb-4 lg:mb-8">
        <button onClick={toogleTab} className={`py-2 lg:py-3 px-4 lg:px-8 rounded-lg transition-all duration-300 text-xs lg:text-base font-bold ${activeTab === true ? "bg-green-600 text-white shadow-lg" : "bg-transparent text-white hover:bg-green-600 border border-zinc-600"}`}>
          Listed
        </button>
        <button onClick={toogleTab} className={`py-2 lg:py-3 px-4 lg:px-8 rounded-lg transition-all duration-300 text-xs lg:text-base font-medium ${activeTab === false ? "bg-red-600 text-white shadow-lg" : "bg-transparent text-white hover:bg-red-600 border border-zinc-600"}`}>
          Not Listed
        </button>
      </div>

      <div className="grid gird-cols-1 lg:grid-cols-3 gap-x-6">
        {nfts?.map((item, index) => (
          <div key={item.tokenId} className="border-b border-zinc-500 py-4 flex justify-between items-center gap-2 ">
            <div className="w-3/4 flex items-center gap-2">
              <p className="text-sm text-gray-400 pr-2">{index + 1}</p>
              <img src={getPinataCid(item.meta.image)} alt={item.meta.name} className="w-10 h-10 rounded-full border-2 border-zinc-200" />
              <div className="flex flex-col gap-1">
                <div className="flex items-center gap-1">
                  <h3 className="text-sm font-semibold">{item.meta.name}</h3>
                  <HiBadgeCheck className="size-4 rounded-full bg-blue-500" />
                </div>
                <p className="text-xs font-normal text-gray-300">
                  Volume <span className="text-white font-bold">{item.price}</span>
                </p>
              </div>
            </div>
            <div className="w-1/4 flex flex-col gap-1 text-xs">
              <p className="font-bold">{item.price}</p>
              <p>
                <span className="font-extrabold">1 </span>Item
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ranking;
