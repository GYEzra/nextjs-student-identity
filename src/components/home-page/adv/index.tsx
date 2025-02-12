import React from "react";
import Link from "next/link";
const Advs = () => {
 

  const imageData = [
    {
      src: "/images/f1.png",
      alt: "Meta Legend 8452",
    },
    {
      src: "/images/f2.webp",
      alt: "Geez Instrumental",
    },
    {
      src: "/images/f3.jpeg",
      alt: "Profile Image",
    },
    {
      src: "/images/f4.png",
      alt: "Metapuffer ETH Lord",
    },
    {
      src: "/images/f5.jpg",
      alt: "AI Deep Learning",
    },
    {
      src: "/images/f6.gif",
      alt: "Captainz 1560",
    },
    {
      src: "/images/f7.png",
      alt: "Punks X Marks",
    },
    {
      src: "/images/f8.jpg",
      alt: "Digital Art",
    },
    {
      src: "/images/f9.png",
      alt: "Metapuffer Inmerse",
    },
  ];

  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 lg:gap-2">
       
          <h1 className="uppercase text-white font-extrabold text-4xl lg:text-6xl text-center">
            Buy & Sell
          </h1>
          <h1 className="text-white font-normal lg:font-bold text-base lg:text-3xl text-center ">
            Everything
          </h1>
          <p className="text-xs  italic special-text lg:text-base text-center">
            Discover, Buy & Sell Everything DeFi, NFT and Gaming
          </p>
          <div className="flex gap-2 lg:gap-4 justify-center">
          <Link href="/nft/create">
            <button className="group py-2 px-4 lg:px-6 uppercase relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#36ff32] to-[#f6fff5] border-2 border-[#41db33] bg-transparent text-xs lg:text-sm font-bold text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_129_51)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(38_129_51)] active:[box-shadow:0px_0px_rgb(38_129_51)] active:translate-y-[3px] active:translate-x-[3px]">
              Create NFT
            </button>
            </Link>
            
            <button className="group uppercase px-4 lg:px-6 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#fff6fc] to-[#ff01d0] border-2 border-[#ff34c2] bg-transparent text-xs lg:text-sm font-bold text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(255_34_194)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(255_34_194)] active:[box-shadow:0px_0px_rgb(255_34_194)] active:translate-y-[3px] active:translate-x-[3px]">
            <Link href="/list">
              Get a detail</Link>

            </button>
          </div>
        </div>
      </div>
      <div className="w-11/12 mx-auto grid grid-cols-4 gap-2 lg:gap-5">
        <div className="flex flex-col gap-4">
          {imageData.slice(0, 3).map((image, index) => (
            <div
              key={index}
              className="border rounded-lg p-0.5 border-zinc-600"
            >
              <img
                src={image.src}
alt={image.alt}
                className="object-cover rounded-lg w-full border border-zinc-600"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-center items-center">
          {imageData.slice(3, 5).map((image, index) => (
            <div
              key={index}
              className="border rounded-lg p-0.5 border-zinc-600"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-lg w-full border border-zinc-600"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          {imageData.slice(5, 7).map((image, index) => (
            <div
              key={index}
              className="border rounded-lg p-0.5 border-zinc-600"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-cover rounded-lg w-full border border-zinc-600"
              />
            </div>
          ))}
        </div>

        <div className="my-auto">
          <div className="flex flex-col gap-4">
            {imageData.slice(7, 9).map((image, index) => (
              <div
                key={index}
                className="border rounded-lg p-0.5 border-zinc-600"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="object-cover rounded-lg w-full border border-zinc-600"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
 
    </div>
  );
};

export default Advs;