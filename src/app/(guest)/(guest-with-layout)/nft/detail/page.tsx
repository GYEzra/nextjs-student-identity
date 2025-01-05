"use client";
import React from "react";
import { FaFacebook, FaTelegram } from "react-icons/fa6";
import { useState } from "react";
import { HiBadgeCheck } from "react-icons/hi";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

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

  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 200;
  const text = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
    distinctio exercitationem minima natus quia. Nam quasi dolorem
    enim, quod saepe aspernatur numquam facere repellat aut ratione
    fugit excepturi, temporibus officia quam voluptates aliquam omnis
    atque provident, animi modi dolores iusto.`;

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < relatedItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="flex flex-col gap-10 p-0 lg:p-4 text-white">
      {/* Chi tiết NFT */}
      <div className="flex flex-col lg:flex-row gap-6">
        <img
          className="w-full lg:w-2/5  rounded-xl"
          src="/images/nft.jpg"
          alt="NFT Image"
        />

        <div className="lg:w-1/2 w-full flex flex-col gap-4 ">
          {/* Nội dung thông tin */}
          <div className="flex justify-between items-center">
            <p className="text-2xl lg:text-4xl font-medium">Philipp Potocnik</p>
            <div className="flex items-center gap-4">
              <div className="tooltip" data-tip="Facebook">
                <FaFacebook className="size-4 lg:size-6" />
              </div>
              <div className="tooltip" data-tip="Telegram">
                <FaTelegram className="size-4 lg:size-6" />
              </div>
              <div className="tooltip" data-tip="E-mail">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-4 h-4 lg:w-6 lg:h-6 cursor-pointer"
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
          <div className="flex gap-4">
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <p className="text-xs lg:text-base font-semibold">Created by</p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-6 h-6 lg:w-10 lg:h-10 rounded-full"
                  src="/images/nft.jpg"
                  alt="Created by"
                />
                <p className="text-sm lg:text-base font-semibold">
                  Olivia Samantha
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-3">
              <p className="text-xs lg:text-base font-semibold">Collection</p>
              <div className="flex gap-2 items-center">
                <img
                  className="w-6 h-6 lg:w-10 lg:h-10 rounded-full"
                  src="/images/nft.jpg"
                  alt="Collection"
                />
                <p className="text-sm lg:text-base font-semibold">
                  Patterfly Studio
                </p>
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
      <div className="flex flex-col gap-6">
        <p className="text-lg lg:text-xl font-semibold">Related Items</p>

        <div className="flex justify-center">
          <div className="w-full lg:w-11/12">
            {/* Carousel for tablet and mobile */}
            <div className="lg:hidden relative">
              <div className="overflow-hidden">
                <div
                  className="flex transition-transform "
                  style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                  {relatedItems.map((item) => (
                    <div key={item.id} className="w-full px-10 flex-shrink-0">
                      <div className="p-2 border  border-zinc-800 rounded-lg">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full rounded-lg object-cover"
                        />
                        <div className="p-3 flex flex-col gap-2">
                          <div className="flex gap-1 items-center">
                            <p className="text-xs font-medium text-gray-50">
                              {item.owner}
                            </p>
                            <HiBadgeCheck className="bg-blue-600 rounded-full size-3" />
                          </div>

                          <p className="text-sm uppercase font-bold">
                            {item.name}
                          </p>
                          <p className="text-sm font-normal text-gray-400">
                            Price:{" "}
                            <span className="font-bold text-green-400">
                              {item.price}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <button
                onClick={handlePrev}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 p-1 border  border-zinc-700 text-white rounded-full"
                disabled={currentIndex === 0}
              >
                <GrFormPrevious className="size-5 text-zinc-500" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 p-1 border border-zinc-700 text-white rounded-full"
                disabled={currentIndex === relatedItems.length - 1}
              >
                <GrFormNext className="size-5 text-zinc-500" />
              </button>
            </div>

            {/* Grid for larger screens */}
            <div className="hidden lg:flex gap-4">
              {relatedItems.map((item) => (
                <div
                  key={item.id}
                  className="w-1/5 p-2 rounded-lg border border-zinc-800 transition-transform transform hover:scale-105 hover:shadow-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="p-3 flex flex-col gap-2">
                    <div className="flex gap-1 items-center">
                      <p className="text-xs font-medium text-gray-50">
                        {item.owner}
                      </p>
                      <HiBadgeCheck className="bg-blue-600 rounded-full size-3" />
                    </div>

                    <p className="text-sm uppercase font-bold">{item.name}</p>
                    <p className="text-sm font-normal text-gray-400">
                      Price:{" "}
                      <span className="font-bold text-green-400">
                        {item.price}
                      </span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailNftPage;
