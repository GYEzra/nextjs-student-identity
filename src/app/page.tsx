import { Carousel, Navbar } from "@/components/ui";
import { carouselImgSrc, features } from "../../public/meta";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
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

      <div className="flex flex-col gap-4 mt-10">
        <div className="w-10/12 mx-auto flex items-center gap-2 mb-10">
          <div className="w-1/2 flex flex-col gap-2 p-4">
            <h1 className="text-5xl font-extrabold text-white leading-tight not-select">
              Nơi Tốt Nhất Để Thu Thập, Mua Bán
              <span className="special-text"> Awesome NFTs</span>
            </h1>
            <p className=" text-base text-gray-300">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. Provident cupiditate voluptatem et in.
            </p>
            <p className="text-white">//cho số chạy ở dây</p>
            <div className="flex gap-4 mt-4">
              <a className="w-1/3 btn border-0 special-button">Khám phá</a>
              <a className="w-1/3 btn border-0 special-button">Tạo NFT</a>
            </div>
          </div>
          <div className="w-1/2">
            {" "}
            <div className="hidden lg:flex flex-2 justify-center">
              <div className="w-[400px] h-[400px] border-spacing-2 border-2 rounded-md overflow-hidden shadow-md shadow-white/60">
                <Carousel images={carouselImgSrc} width={450} height={450} />
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mx-auto px-4 pt-10 sm:px-6 lg:pt-24 bg-purple-300">
          <div className="mx-auto text-center flex justify-center">
            <NftList />
          </div>
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
