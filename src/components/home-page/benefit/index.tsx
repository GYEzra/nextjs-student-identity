import React from "react";
import Image from "next/image";
const Benefits = () => {
  const items = [
    {
      id: "1",
      url: "/images/befit-1.jpg",
      title: "There are no platform fees",
      description:
        "We will not charge any platform fees when you buy or sell any NFTs.",
      tags: ["Floral", "Highlands", "Wildflowers", "Colorful", "Resilience"],
    },

    {
      id: "2",
      url: "/images/befit-2.jpg",
      title: "High security and a user-friendly interface.",
      description:
        "Our platform ensures high-level security to protect your transactions, while offering an intuitive, user-friendly interface for a seamless experience.",
      tags: ["Twilight", "Peaks", "Silhouette", "Evening Sky", "Peaceful"],
    },
    {
      id: "3",
      url: "/images/befit-3.jpg",
      title: "Variety of features",
      description:
        "Our platform offers a wide range of diverse functions, catering to various needs and enhancing the user experience.",
      tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
    },
    {
      id: "4",
      url: "/images/befit-4.jpg",
      title: "Cost-effective",
      description:
        "More affordable pricing with access to all features without excessive costs.",
      tags: ["Rocky", "Ridges", "Contrast", "Adventure", "Clouds"],
    },
  ];

  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col lg:flex-row p-10">
        <div className="w-full lg:w-2/5">
          <div className="w-full h-64 lg:h-96 pt-20 px-10 border-b border-zinc-300 rounded-b-[2000px] flex flex-col gap-2 ">
            <p className="uppercase text-xl lg:text-4xl text-white leading-tight font-extrabold text-center">
              The benefits of using our products
            </p>
            <p className="text-gray-300 text-center text-xs lg:text-sm font-normal">
              This is the first non-profit platform in Vietnam dedicated to
promoting and educating users about decentralized applications
              (Dapps).
            </p>
          </div>
        </div>
        <div className="w-full lg:w-3/5">
          <div className="group flex max-md:flex-col justify-center gap-2 w-11/12 mx-auto mb-10 mt-3">
            {items.map((item) => {
              return (
                <article
                  key={item.id}
                  className="group/article relative w-full rounded-xl overflow-hidden md:group-hover:[&:not(:hover)]:w-[20%] md:group-focus-within:[&:not(:focus-within):not(:hover)]:w-[20%] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.15)] before:absolute before:inset-x-0 before:bottom-0 before:h-1/3 before:bg-gradient-to-t before:from-black/50 before:transition-opacity md:before:opacity-0 md:hover:before:opacity-100 focus-within:before:opacity-100 after:opacity-0 md:group-hover:[&:not(:hover)]:after:opacity-100 md:group-focus-within:[&:not(:focus-within):not(:hover)]:after:opacity-100 after:absolute after:inset-0 after:bg-white/30 after:backdrop-blur after:rounded-lg after:transition-all focus-within:ring focus-within:ring-indigo-300"
                >
                  <a
                    className="absolute inset-0 text-white z-10  p-3 flex flex-col justify-end"
                    href="#0"
                  >
                    <h1 className=" text-3xl font-bold md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-300 group-focus-within/article:delay-300">
                      {item?.title}
                    </h1>
                    <p className=" mt-2 text-base font-normal md:opacity-0 group-hover/article:opacity-100 group-focus-within/article:opacity-100 md:translate-y-2 group-hover/article:translate-y-0 group-focus-within/article:translate-y-0 transition duration-200 ease-[cubic-bezier(.5,.85,.25,1.8)] group-hover/article:delay-500 group-focus-within/article:delay-500">
                      {item?.description}
                    </p>
                  </a>

                  <Image
                    className="object-cover h-72 md:h-[420px]  w-full"
                    src={item?.url}
                    alt="Image 01"
                    width={960}
                    height={480}
                    aria-hidden="true"
                  />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benefits;