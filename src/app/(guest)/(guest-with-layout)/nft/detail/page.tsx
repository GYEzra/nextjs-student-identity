"use client";
import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa6";
import { useState } from "react";

const DetailNftPage = () => {
  const relatedItems = [
    {
      id: 1,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-9455-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 2,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-5674-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 3,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-3661-1-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 4,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-9455-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  const openModal = (item: any) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
    distinctio exercitationem minima natus quia. Nam quasi dolorem
    enim, quod saepe aspernatur numquam facere repellat aut ratione
    fugit excepturi, temporibus officia quam voluptates aliquam omnis
    atque provident, animi modi dolores iusto.`;

  return (
    <div className="flex flex-col gap-10 p-4 text-white">
      {/* Chi tiết NFT */}
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full rounded-xl"
            src="/images/nft.jpg"
            alt="NFT Image"
          />
        </div>
        <div className="lg:w-1/2 w-full flex flex-col gap-4 ">
          {/* Nội dung thông tin */}
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-medium">
              Philipp Potocnik
            </p>
            <div className="flex gap-4">
              <div className="tooltip" data-tip="Facebook">
                <FaFacebook className="size-6" />
              </div>
              <div className="tooltip" data-tip="Telegram">
                <FaTelegram className="size-6" />
              </div>
              <div className="tooltip" data-tip="E-mail">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6 cursor-pointer"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                  <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                </svg>
              </div>
            </div>
          </div>
          {/* Các đoạn thông tin */}
          <p className="text-base font-semibold">
            Highest bid <span className="text-green-400">3.15 WETH</span>
          </p>
          <p className="text-gray-300 text-sm lg:text-base">
            {isExpanded ? text : `${text.slice(0, maxLength)}...`}
          </p>
          {text.length > maxLength && (
            <button
              className="text-sm italic w-20 text-gray-400"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Show less" : "Show more"}
            </button>
          )}
          {/* Hai cột */}
          <div className="flex flex-wrap lg:flex-nowrap gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <p className="font-semibold">Created by</p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/nft.jpg"
                  alt="Created by"
                />
                <p className="font-semibold">Olivia Samantha</p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <p className="font-semibold">Collection</p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/nft.jpg"
                  alt="Collection"
                />
                <p className="font-semibold">Patterfly Studio</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-semibold">Properties</p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1 p-3 border border-zinc-800 rounded-lg text-center">
                <p className="text-sm text-green-400">Type</p>
                <p className="text-base font-medium">Legendary</p>
                <p className="text-xs text-gray-400">12.6% rarity</p>
              </div>
              <div className="flex flex-col gap-1 p-3 border border-zinc-800 rounded-lg text-center">
                <p className="text-sm text-green-400">Body</p>
                <p className="text-base font-medium">Legendary</p>
                <p className="text-xs text-gray-400">12.6% rarity</p>
              </div>
              <div className="flex flex-col gap-1 p-3 border border-zinc-800 rounded-lg text-center">
                <p className="text-sm text-green-400">Hair</p>
                <p className="text-base font-medium">Legendary</p>
                <p className="text-xs text-gray-400">12.6% rarity</p>
              </div>
              <div className="flex flex-col gap-1 p-3 border border-zinc-800 rounded-lg text-center">
                <p className="text-sm text-green-400">Eyes</p>
                <p className="text-base font-medium">Legendary</p>
                <p className="text-xs text-gray-400">12.6% rarity</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {" "}
            <p className="font-semibold">Price</p>
            <div className="flex gap-2 items-center">
              <img
                className="w-8 h-8 rounded-xl"
                src="/images/eth.png"
                alt="ether icon"
              />
              <p className="text-3xl font-bold">
                13.2595{" "}
                <span className="font-medium text-gray-500 text-xl">
                  ($37,334.51)
                </span>
              </p>
            </div>
            <div className="flex gap-3 mt-4">
              <button className="w-full bg-green-500 py-3 text-base font-semibold rounded-lg">
                Buy now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg lg:text-xl font-semibold">Related Items</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedItems.slice(0, 4).map((item) => (
            <div
              key={item.id}
              className="flex flex-col gap-2 border border-zinc-800 rounded-lg p-2 cursor-pointer"
              onClick={() => openModal(item)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-lg h-72 object-cover"
              />
              <div className="p-3 flex flex-col gap-2">
                <p className="text-sm uppercase font-normal text-gray-400">
                  {item.owner}
                </p>
                <p className="text-sm uppercase font-bold">{item.name}</p>
                <p className="text-sm font-semibold">
                  Price: <span className="font-bold">{item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Modal for NFT Details */}
      {isModalOpen && selectedItem && (
        <div className=" h-auto fixed inset-0 bg-black bg-opacity-50 flex mt-4 sm:items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 sm:w-3/5">
            <div className="flex sm:flex-row gap-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-2/5 h-2/5 sm:w-2/5 object-cover  rounded-md"
              />
              <div className="w-3/5 sm:w-3/5 flex flex-col gap-1 sm:gap-2">
                <h2 className="text-base font-bold text-gray-900 sm:text-2xl">
                  {selectedItem.name}
                </h2>
                <p className=" text-base sm:text-2xl font-bold text-gray-800">
                  Price:{" "}
                  <span className="text-red-500">{selectedItem.price}</span>
                </p>
                <p className="text-gray-800 font-bold text-base sm:text-xl">
                  Attributes:
                </p>
                <ul className="list-disc pl-5 text-gray-700">
                  {selectedItem?.meta?.properties?.map((property: any) => (
                    <li
                      key={property.key}
                      className="text-gray-600 text-sm sm:text-base"
                    >
                      {property.key}: {property.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="text-gray-800 font-bold text-base sm:text-xl mt-2">
              Discription
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              {" "}
              {selectedItem.description.length > 100
                ? `${selectedItem.description.slice(0, 100)}...`
                : selectedItem.description}
            </p>

            <div className="mt-4 flex flex-row gap-2 sm:gap-4">
              <button
                onClick={() => console.log("Detail button clicked")}
                className="w-full sm:w-1/2 bg-green-600 text-white py-2 text-sm sm:text-base rounded-md"
              >
                Detail
              </button>
              <button
                onClick={closeModal}
                className="w-full sm:w-1/2 bg-red-600 text-white py-2 text-sm sm:text-base rounded-md"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailNftPage;
