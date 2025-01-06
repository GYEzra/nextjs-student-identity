import React from "react";

const Advs = () => {
  const imageData = [
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-8452-1024x1024.avif",
      alt: "Meta Legend 8452",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/2-Geez-Instrumental.webp",
      alt: "Geez Instrumental",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/e990fc1fbea016fd2850678c1d4d10d7_profile.jpeg",
      alt: "Profile Image",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/Metapuffer-05-ETH-Lord.avif",
      alt: "Metapuffer ETH Lord",
    },
    {
      src: "https://media.istockphoto.com/id/1417736827/vi/anh/ch%C3%A2n-dung-android-deep-learning-n%E1%BB%81n-tr%C3%AD-tu%E1%BB%87-nh%C3%A2n-t%E1%BA%A1o.jpg?s=612x612&w=0&k=20&c=BmaadTCtRJpB8byEk7C89N9JRry70rge2hu3DZAuiP0=",
      alt: "AI Deep Learning",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/Captainz-1560.gif",
      alt: "Captainz 1560",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/PUNKS-2-X-Marks-the-Drop.avif",
      alt: "Punks X Marks",
    },
    {
      src: "https://cdn.pixabay.com/photo/2022/11/02/16/04/digital-art-7565263_1280.jpg",
      alt: "Digital Art",
    },
    {
      src: "https://wpsmartnft.com/wp-content/uploads/2024/10/Metapuffer-587-Inmerse-1024x1024.avif",
      alt: "Metapuffer Inmerse",
    },
  ];

  return (
    <div className="flex flex-col gap-10 my-10">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 lg:gap-2">
          <h1 className="uppercase text-white font-extrabold text-4xl lg:text-8xl text-center">
            Buy & Sell
          </h1>
          <h1 className="text-white font-normal lg:font-bold text-base lg:text-3xl text-center ">
            Everything
          </h1>
          <p className="text-xs  italic special-text lg:text-base text-center">
            Discover, Buy & Sell Everything DeFi, NFT and Gaming
          </p>
          <div className="flex gap-2 lg:gap-4 justify-center">
            <button className="group py-2 px-4 lg:px-6 uppercase relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#36ff32] to-[#f6fff5] border-2 border-[#41db33] bg-transparent text-xs lg:text-sm font-bold text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(38_129_51)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(38_129_51)] active:[box-shadow:0px_0px_rgb(38_129_51)] active:translate-y-[3px] active:translate-x-[3px]">
              Create NFT
            </button>

            <button className="group uppercase px-4 lg:px-6 relative inline-flex items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#fff6fc] to-[#ff01d0] border-2 border-[#ff34c2] bg-transparent text-xs lg:text-sm font-bold text-black transition-all duration-100 hover:[box-shadow:5px_5px_rgb(255_34_194)] translate-x-[3px] hover:translate-x-[0px] translate-y-[3px] hover:translate-y-[0px] [box-shadow:0px_0px_rgb(255_34_194)] active:[box-shadow:0px_0px_rgb(255_34_194)] active:translate-y-[3px] active:translate-x-[3px]">
              Get a free demo
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
