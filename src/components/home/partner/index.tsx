"use client"
import React from "react";
import Image from "next/image";
import { imageLoader } from "@/utils";

const Partner = () => {
    return (
        <div className="text-gray-600 body-font bg-gradient-to-r from-violet-600 via-purple-500 to-black py-32 ">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-4xl font-bold special-text">
                    Our Partners and Collaborators
                </h2>
                <p className="mt-4 text-center text-lg text-gray-400">
                    We proudly collaborate with leading companies worldwide.
                </p>
                <div className="mx-auto mt-12 grid grid-cols-5 justify-center gap-x-8">
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
                                className="max-h-13 w-auto object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Partner;