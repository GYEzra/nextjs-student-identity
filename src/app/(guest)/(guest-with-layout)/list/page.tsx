"use client";
import React, { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";

const nft = [
    {
        rank: 1,
        name: "Courtyard.io",
        price: "5.98 USDC.e",
        volume: "33 ETH",
        item: 4,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/664c5f93aea1b8bb8740e2edb6a2b006_profile.png",
      },
      {
        rank: 2,
        name: "Apu Apustajas",
        price: "0.18 ETH",
        volume: "30 ETH",
        item: 3,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/4af04c687e6e644dae01116a02957fce_profile.jpeg",
      },
      {
        rank: 3,
        name: "CryptoPunks",
        price: "65 ETH",
        volume: "1200 ETH",
        item: 0,
        image:
          "https://i.seadn.io/gcs/files/3ea70379eaf770c85beae83b89c7a632.png?auto=format&dpr=1&w=136&h=136&fr=1",
      },
      {
        rank: 4,
        name: "Bored Ape Yacht Club",
        price: "45 ETH",
        volume: "900 ETH",
        item: 1,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/786f3017eeb7a6988bbd0567dece1078_profile.png",
      },
      {
        rank: 5,
        name: "Azuki",
        price: "12 ETH",
        volume: "200 ETH",
        item: 3,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/4dd821518c093fa7ee2bd90ca5716a64_profile.webp",
      },
      {
        rank: 6,
        name: "L3E7 Guardians",
        price: "0.13 ETH",
        volume: "11 ETH",
        item: 2,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/786f3017eeb7a6988bbd0567dece1078_profile.png",
      },
      {
        rank: 7,
        name: "Courtyard.io",
        price: "5.98 USDC.e",
        volume: "33 ETH",
        item: 4,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/9c8fa44abe5f9157de79f195421e6006_profile.webp",
      },
      {
        rank: 8,
        name: "Apu Apustajas",
        price: "0.18 ETH",
        volume: "30 ETH",
        item: 3,
        image:
          "https://i.seadn.io/s/raw/files/3ce1c0040e5653264e3dbe0b24d66724.png?auto=format&dpr=1&w=136&h=136&fr=1",
      },
      {
        rank: 9,
        name: "CryptoPunks",
        price: "65 ETH",
        volume: "1200 ETH",
        item: 0,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/10/4af04c687e6e644dae01116a02957fce_profile.jpeg",
      },
      {
        rank: 10,
        name: "Pirate Nation",
        price: "0.81 ETH",
        volume: "44 ETH",
        item: 1,
        image:
          "https://i.seadn.io/gcs/files/9dd5c3df43bcd0861cead11bc988ce3d.gif?auto=format&dpr=1&w=136&h=136&fr=1",
      },
      {
        rank: 11,
        name: "Azuki",
        price: "12 ETH",
        volume: "200 ETH",
        item: 0,
        image:
          "https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1",
      },
      {
        rank: 12,
        name: "L3E7 Guardians",
        price: "0.13 ETH",
        volume: "11 ETH",
        item: 2,
        image:
          "https://wpsmartnft.com/wp-content/uploads/2024/11/66c398e3f2b651ca544ba2ce9a11072a_profile.png",
      },
];

const ITEMS_PER_PAGE = 6;

const List = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Tính toán số trang
  const totalPages = Math.ceil(nft.length / ITEMS_PER_PAGE);

  // Lấy danh sách NFT theo trang
  const paginatedNFTs = nft.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col lg:flex-row bg-gray-900 text-white min-h-screen">
      <div className="lg:w-1/4 w-full p-6 bg-gray-800 shadow-lg">
        <div className="mb-8">
          <h1 className="text-xl font-bold mb-4">Price</h1>
          <div className="flex gap-4 mb-4">
            <input
              type="number"
              placeholder="Min"
              className="w-1/2 p-3 rounded-md bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="number"
              placeholder="Max"
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
            {["Name ASC", "Name DESC", "Price ASC", "Price DESC", "Latest", "Oldest"].map(
              (sortType) => (
                <button
                  key={sortType}
                  className="py-3 bg-gray-700 rounded-md hover:bg-gray-600 transition"
                >
                  {sortType}
                </button>
              )
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-3/4 w-full p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {paginatedNFTs.map((item) => (
            <div
              key={item.rank}
              className="border border-gray-700 rounded-lg overflow-hidden bg-gray-800 shadow-md transition hover:scale-105"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4 flex flex-col">
                <h3 className="text-lg font-semibold flex items-center gap-1">
                  {item.name}
                  <HiBadgeCheck className="text-blue-500" />
                </h3>
                <p className="text-sm text-gray-400 mt-2">
                  Volume: <span className="text-white font-bold">{item.volume}</span>
                </p>
                <p className="text-white font-bold mt-2">{item.price}</p>
                <p className="text-sm text-gray-400">
                  {item.item} Item{item.item > 1 ? "s" : ""}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`px-4 py-2 mx-1 rounded-md ${
                page === currentPage
                  ? "bg-gray-500 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default List;
