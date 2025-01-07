import { Carousel, Navbar } from "@/components/ui";
import { carouselImgSrc, features } from "../../public/meta";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { FaLongArrowAltRight } from "react-icons/fa";
import { NftList } from "@/components/nft";
import {
  Benefit,
  Introduce,
  Partner,
  Ranking,
  Subscribe,
  Blog,
  Adv,
  Guide,
} from "@/components/home";
import { Footer } from "@/components/layouts";
import "../app/styles/animation.css";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <div className="text-gray-600 body-font w-full h-auto">
        <section className="relative h-[650px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            preload="none"
            poster="/images/bg-black.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/video3.mp4" type="video/mp4" />
          </video>
          <div className="hero absolute top-0 bottom-0 left-0 right-0 animate-fade-in">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 px-4 sm:px-6">
              <div className="hidden lg:flex flex-2 justify-center">
                <div className="w-[450px] h-[450px] border-spacing-2 border-2 rounded-md overflow-hidden shadow-md shadow-white/60">
                  <Carousel images={carouselImgSrc} width={450} height={450} />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xl font-bold special-text">
                  ☂ Tìm kiếm NFT bạn cần trong một thị trường
                </p>
                <h1 className="text-4xl font-bold text-white leading-normal not-select">
                  Nơi Tốt Nhất Để Thu Thập, Mua Bán
                  <span className="special-text"> Awesome NFTs</span>
                </h1>
                <p className="py-6 text-white">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi. Provident cupiditate voluptatem
                  et in.
                </p>
                <div className="flex justify-center lg:justify-start gap-5">
                  <a className="btn border-0 special-button">Khám phá</a>
                  <a className="btn border-0 special-button">Tạo NFT</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full mx-auto px-4 pt-10 sm:px-6 lg:pt-24">
          <div className="mx-auto text-center flex justify-center">
            <NftList />
          </div>
        </div>
      </div> */}

      <div
        className="w-full px-4 lg:px-16 py-4 lg:py-10 relative"
        style={{
          backgroundImage: "url('/images/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Phần tử chứa hình nền mờ */}
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

        {/* Khung nằm đè lên hình nền */}
        <div
          className="w-full relative flex flex-col lg:flex-row z-10 p-4 lg:p-14 rounded-lg bg-opacity-50 bg-black shadow-lg"
          style={{
            boxShadow: "1px 1px 20px #68228B",
          }}
        >
          <div className="w-full lg:w-1/2 flex flex-col gap-2 p-2 ">
            <p className="w-full text-2xl lg:text-6xl font-extrabold text-white">
              <span className="special-text">Fintech</span> is The best Web For
              Your <span className="special-text"> NFTS</span>
            </p>
            <p className="text-xs lg:text-sm text-gray-300">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
              deleniti quidem animi repellendus, facilis deserunt atque maxime
              asperiores numquam culpa!
            </p>
            <div className="w-full flex gap-2 lg:gap-12 mt-4">
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-green-400">
                  35m+
                </p>
                <p className="text-xs font-medium text-gray-600">Artwork</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-pink-500">
                  18m+
                </p>
                <p className="text-xs font-medium text-gray-600">Auctions</p>
              </div>
              <div className="flex flex-col text-white">
                <p className="text-sm lg:text-3xl font-extrabold text-orange-500">
                  500k+
                </p>
                <p className="text-xs font-medium text-gray-600">Artists</p>
              </div>
            </div>
            <button className="group animate-float cursor-pointer special-text slide-anime px-6 mt-4 py-3 text-sm border border-zinc-700  rounded-full w-[180px] bg-base-dark text-white hover:text-pink-500 flex justify-between items-center font-semibold ">
              Discover Now
              <div className="group-hover:translate-x-2 transition-all">
                <FaLongArrowAltRight />
              </div>
            </button>
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

      <div className="w-full mx-auto px-4 pt-10 sm:px-6 lg:pt-24 bg-orange-400">
        <div className="mx-auto text-center flex justify-center">
          <NftList />
        </div>
      </div>

      <Introduce />
      <Ranking />
      <Adv />
      <Guide />
      <Benefit />
      {/* <Subscribe /> */}
      <Blog />
      <Partner />
      <Footer />
    </>
  );
}
