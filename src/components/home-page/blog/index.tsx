"use client";
import React, { useState } from "react";
import { GrFormPrevious, GrFormNext } from "react-icons/gr";

const Blogs = () => {
  const fakeNews = [
    {
      id: 1,
      title: "Nigeria Drops Charges Against Binance Executive Tigran Gambaryan",
      description:
        "After six months, the Nigerian government has dropped all money laundering charges against Binance executive Tigran Gambaryan.",
      date: "October 23, 2024",
      category: "Market",
      imageUrl: "/images/blog01.jpg",
    },
    {
      id: 2,
      title: "Crypto Regulations Gain Momentum in Europe",
      description:
        "Europe is set to introduce new cryptocurrency regulations aimed at enhancing transparency and security in the market.",
      date: "October 22, 2024",
      category: "Finance",
      imageUrl: "/images/blog02.webp",
    },
    {
      id: 3,
      title: "Major Breakthrough in Blockchain Adoption",
      description:
        "Blockchain technology sees massive adoption in supply chain industries, revolutionizing logistics.",
      date: "October 21, 2024",
      category: "Technology",
      imageUrl: "/images/blog03.webp",
    },
    {
      id: 4,
      title: "NFT Marketplace Hits Record Sales",
      description:
        "The NFT market achieved record-breaking sales this month, highlighting growing interest in digital assets.",
      date: "October 20, 2024",
      category: "Art",
      imageUrl: "/images/blog04.jpg",
    },
    {
      id: 5,
      title: "New Blockchain Standard Announced",
      description:
        "A new blockchain interoperability standard promises to connect different chains seamlessly.",
      date: "October 19, 2024",
      category: "Innovation",
      imageUrl: "/images/blog05.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? fakeNews.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === fakeNews.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-11/12 flex flex-col gap-6 mx-auto">
      <h1 className="text-white text-2xl lg:text-3xl font-bold">Recent News</h1>

      {/* Large screen layout */}
      <div className="hidden lg:flex w-full gap-4">
        <div className="w-1/2 flex flex-col gap-4 border border-zinc-800 p-4 rounded-xl">
          <img
            src={fakeNews[0].imageUrl}
            alt={fakeNews[0].title}
            className="rounded-xl"
          />
          <div className="flex flex-col gap-2">
            <p className="text-gray-500 font-semibold text-xs">
              {fakeNews[0].date}{" "}
              <span className="uppercase">{fakeNews[0].category}</span>
            </p>
            <h1 className="text-white text-xl font-bold">
              {fakeNews[0].title}
            </h1>
            <p className="text-xs font-normal text-gray-300">
              {fakeNews[0].description}
            </p>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap">
          {fakeNews.slice(1).map((news) => (
            <div key={news.id} className="w-1/2 p-2">
              <div className="border flex flex-col gap-4 border-zinc-800 p-4 rounded-xl">
                <img
                  src={news.imageUrl}
                  alt={news.title}
                  className="rounded-xl"
                />
                <div className="flex flex-col gap-2">
                  <p className="text-gray-500 font-semibold text-xs">
                    {news.date}{" "}
                    <span className="uppercase">{news.category}</span>
                  </p>
                  <h1 className="text-white text-sm font-bold">{news.title}</h1>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Small screen layout (carousel) */}
      <div className="lg:hidden relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {fakeNews.map((news) => (
              <div key={news.id} className="w-full px-10 flex-shrink-0">
                <div className="p-4 border border-zinc-800 rounded-lg">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full rounded-lg object-cover"
                  />
                  <div className="p-3 flex flex-col gap-2">
                    <p className="text-gray-500 font-semibold text-xs">
                      {news.date}{" "}
                      <span className="uppercase">{news.category}</span>
                    </p>
                    <h1 className="text-white text-sm font-bold">
                      {news.title}
                    </h1>
                    <p className="text-xs font-normal text-gray-300">
                      {news.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 border border-zinc-700 text-gray-300 rounded-full"
        >
          <GrFormPrevious className="size-4" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 border border-zinc-700 text-gray-300 rounded-full"
        >
          <GrFormNext className="size-4" />
        </button>
      </div>
    </div>
  );
};

export default Blogs;
