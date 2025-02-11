"use client";
import React from "react";
import Image from "next/image";

const Partner = () => {
  return (
    <div className="p-10 mt-5 border-b border-zinc-900 flex flex-col gap-10">
      {/* <h1 className="text-white text-4xl text-center font-bold animate-pulse">
        Our parner and Collaborators
      </h1> */}
      <div className="flex gap-12 animate-marquee">
        {[
          "/images/logo-cty/cty1.png",
          "/images/logo-cty/cty2.png",
          "/images/logo-cty/cty3.png",
          "/images/logo-cty/cty4.png",
          "/images/logo-cty/cty5.png",
        ].map((src, index) => (
          <div
            key={index}
            className="flex justify-center items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              alt={`Partner ${index + 1}`}
              src={src}
              width={158}
              height={48}
              className="max-h-48 w-auto object-contain"
            />
          </div>
        ))}
        {/* Duplicate logos to create continuous scroll */}
        {[
          "/images/logo-cty/cty1.png",
          "/images/logo-cty/cty2.png",
          "/images/logo-cty/cty3.png",
          "/images/logo-cty/cty4.png",
          "/images/logo-cty/cty5.png",
        ].map((src, index) => (
          <div
            key={index + 5} // Ensure unique keys for the duplicated logos
            className="flex gap-10 justify-center items-center transition-transform duration-300 hover:scale-105"
          >
            <Image
              alt={`Partner ${index + 1}`}
              src={src}
              width={158}
              height={48}
              className="max-h-48 w-auto object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partner;
