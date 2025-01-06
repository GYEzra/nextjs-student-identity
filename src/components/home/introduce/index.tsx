import React from "react";
import Image from "next/image";
const Introduce = () => {
  return (
    <div className=" mt-5">
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center gap-3">
        <div className="w-full px-4 lg:w-1/2 flex flex-col gap-4 text-white">
          <h1 className="text-xl lg:text-5xl font-extrabold tracking-tight special-text ">
            Explore the Future of Digital Ownership with Our Platform
          </h1>
          <p className="text-sm lg:text-base text-gray-200">
            Welcome to the ultimate destination for NFT enthusiasts! Whether you
            are an artist, collector, or investor, we offer a perfect platform
            to buy, sell, and showcase unique digital assets.
          </p>
          <p className="italic font-medium text-xs lg:text-sm tracking-tight special-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit !
          </p>
          <button className="special-button w-11/12 lg:w-1/2 font-bold">
            Shop collection
          </button>
        </div>
        <div className="w-full mt-5 lg:w-1/2">
          <img
            src="https://wpsmartnft.com/wp-content/uploads/2024/10/61d4b23e0885ed1a0c13bb42_nft-collectibles-hero.png"
            alt=""
            className="object-cover animate-float"
          />
        </div>
      </div>

      
    </div>
  );
};

export default Introduce;
