"use client";
import Loader from "@/app/loader";
import { NftList } from "@/components/ui";
import { useHasMounted } from "@/hooks/custom";
import { useListedNfts } from "@/hooks/web3";
import { getNfts } from "@/lib/api/nft";
import { INft } from "@/types/nft";
import React, { useCallback, useEffect, useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";


const DEFAULT_PAGE = 1;
const ITEMS_PER_PAGE = 6;
const DEFAULT_QUERY_PARAMS = {
  page: DEFAULT_PAGE,
  limit: ITEMS_PER_PAGE
};

enum SORT_TYPE {
  "Name ASC" = "name",
  "Name DESC" = "-name",
  "Price ASC" = "price",
  "Price DESC" = "-price"
}

const List = () => {
  const hasMounted = useHasMounted();
  const { nfts } = useListedNfts();

  const handlePageChange = async (newPage: number) => {

  };

  const handleSortChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const newSortBy = (e.target as HTMLButtonElement).value;
    nfts.query({ sort: newSortBy });
  };

  if (!hasMounted) return <Loader />;

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen w-full">
      <div className="lg:w-1/4 w-full p-6 bg-gray-800 shadow-lg">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Price</h1>
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              placeholder="Min"
              min={0}
              max={1000000}
              className="w-1/2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
              min={0}
              max={1000000}
              className="w-1/2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button className="w-full py-3 bg-gray-400 text-white font-semibold rounded-md hover:bg-gray-500 transition">
            APPLY
          </button>
        </div>
        <hr className="border-gray-600 mb-8" />
        <div>
          <h1 className="text-xl font-bold mb-4">Sort</h1>
          <div className="grid grid-cols-2 gap-4">
            {Object.keys(SORT_TYPE).map((key) =>
              <button
                key={key}
                value={SORT_TYPE[key as keyof typeof SORT_TYPE]}
                className="py-3 bg-gray-700 rounded-md hover:bg-gray-600 transition"
                onClick={(e) => handleSortChange(e)}
              >
                {key}
              </button>)}

          </div>
        </div>
      </div>
      <div className="lg:w-3/4 w-full p-6">
        {
          !nfts.data ? <Loader /> :
            <>
              <NftList items={nfts.data.data || []} buyNft={nfts.buyNft} />

              <div className="flex justify-center mt-6">
                {Array.from({ length: nfts.data.meta.totalPages }, (_, index) => index + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-4 py-2 mx-1 rounded-md ${page === nfts.data!.meta.page
                      ? "bg-gray-500 text-white"
                      : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                      }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </>
        }

      </div>
    </div>
  );
};

export default List;
