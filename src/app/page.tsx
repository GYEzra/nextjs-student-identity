"use client";
import { Carousel, Navbar, NftList } from "@/components/ui";
import { carouselImgSrc } from "../../public/meta";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Benefit, Introduce, Partner, Ranking, Subscribe, Blog, Adv, Guide } from "@/components/home-page";
import { Footer } from "@/components/layouts";
import "../app/styles/animation.css";
import { useListedNfts } from "@/hooks/web3";
import Link from "next/link";
export default function Home() {
  const { nfts } = useListedNfts();

  return (
    <>
      <Navbar />
      <div
        className="w-full px-4 lg:px-16 py-4 lg:py-10 relative bg-"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "url('/images/bg.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(20px)",
            zIndex: -1,
          }}
        ></div>

        <div
          className="w-full relative flex flex-col lg:flex-row p-4 lg:p-14 rounded-lg bg-opacity-50 bg-black shadow-lg"
          style={{
            boxShadow: "1px 1px 20px #68228B",
          }}
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-2 p-2 ">
            <p className="w-full text-2xl lg:text-6xl font-extrabold text-white">
              <span className="special-text">Fintech</span> is The best Web For Your <span className="special-text"> NFTS</span>
            </p>
            <p className="text-xs lg:text-sm text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas deleniti quidem animi repellendus, facilis deserunt atque maxime asperiores numquam culpa!</p>
            <div className="w-full flex gap-2 lg:gap-12 mt-4">
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-green-400">35m+</p>
                <p className="text-xs font-medium text-gray-600">Artwork</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-pink-500">18m+</p>
                <p className="text-xs font-medium text-gray-600">Auctions</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-orange-500">500k+</p>
                <p className="text-xs font-medium text-gray-600">Artists</p>
              </div>
            </div>
            <Link href="/nft/create">
              <button className="group animate-float cursor-pointer special-text slide-anime px-6 mt-4 py-3 text-sm border border-zinc-700 rounded-full w-[180px] bg-base-dark text-white hover:text-pink-500 flex justify-between items-center font-semibold">
                Discover Now
                <div className="group-hover:translate-x-2 transition-all">
                  <FaLongArrowAltRight />
                </div>
              </button>
            </Link>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="hidden lg:flex justify-center">
              <div className=" p-4 lg:p-10 lg:border-8 rounded-xl animate-float">
                <div className="w-[300px] h-[300px] border-spacing-2 border-2 rounded-md overflow-hidden  ">
                  <Carousel images={carouselImgSrc} width={300} height={300} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mx-auto px-4 pt-10 sm:px-6 lg:pt-24">
        <p className="text-2xl uppercase text-white font-semibold text-center special-text">NFT Marketplace</p>
        <div className="mx-auto text-center flex justify-center min-h-[500px]">
          <NftList items={nfts.data?.data ?? []} buyNft={nfts.buyNft} />
        </div>
      </div>

      <Introduce />
      <Ranking />
      <Adv />
      <Guide />
      <Benefit />
      <Subscribe />
      <Blog />
      <Partner />
      <Footer />
    </>
  );
}
