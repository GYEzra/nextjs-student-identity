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
} from "@/components/home";
import { Footer } from "@/components/layouts";
import "../app/styles/animation.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-gray-600 body-font text-white  w-full h-auto">
        <section className="relative h-[650px] overflow-hidden">
          <video
            autoPlay
            muted
            loop
            preload="none"
            poster="/images/bg-black.jpg"
            className="w-full h-full object-cover"
          >
            <source src="/videos/video6.mp4" type="video/mp4" />
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
      </div>
      <Introduce />

      <Ranking />

      <div className="flex flex-col gap-12 my-4 py-4">
        <h1 className="text-white text-4xl text-center font-bold animate-pulse">
          How to Mint and Sell Your First NFT
        </h1>

        <section className="w-11/12 mx-auto grid md:grid-cols-4 gap-6 max-md:max-w-xs ">
          <div className="group  bg-gradient-to-t from-[#242424] to-[#020202] hover:from-[#182135] hover:to-[#080808] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
            <div className="relative">
              <div className="px-6 py-5">
                <div className="group-hover:bg-purple-600 bg-purple-400 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-black group-hover:text-white mb-1">
                  Step 1
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Thiết lập ví
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Thiết lập ví
                </span>
                <p className="text-sm text-slate-500">
                  Morbi viverra dui mi arcu sed. Tellus semper adipiscing
                  suspendisse semper morbi. Odio urna massa nunc massa.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out ">
                <img
                  className="group-hover:opacity-0 transition-opacity duration-500  object-cover h-full m-0 p-0"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fsimplechartt.webp&w=750&q=75"
                  alt="Card image 01"
                  width={350}
                  height={240}
                />
                <img
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity  object-contain duration-300  h-full  m-0 p-0"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fchartt.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01 displaying on hover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="group  bg-gradient-to-t from-[#050a0a] to-[#051818] hover:from-[#05070a] hover:to-[#0b1a3b] relative before:absolute before:inset-0 before:bg-[url('/noise.gif')] before:opacity-5 rounded-2xl border ">
            <div className="relative">
              <div className="px-6 py-5">
                <div className="bg-green-400 group-hover:bg-green-700  transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Step 2
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Tạo bộ sưu tập
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Tạo bộ sưu tập
                </span>
                <p className="text-sm text-slate-500">
                  Sit quis amet rutrum tellus ullamcorper ultricies libero dolor
                  eget. Sem sodales gravida quam turpis enim lacus amet.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                <img
                  className="group-hover:opacity-0 transition-opacity duration-500"
                  src="https://www.ui-layouts.com/_next/image?url=%2Ffullverificationtwo_fpi9eo.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01"
                />
                <img
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fverification_iwnfmj.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01 displaying on hover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="group  bg-gradient-to-t from-[#171c35] to-[#000000] hover:from-[#2b131e] hover:to-[#141414] relative before:absolute before:inset-0 bbefore:bg-[url('/noise.gif')] before:opacity-5  rounded-2xl border ">
            <div className="relative">
              <div className="px-6 py-5">
                <div className="bg-red-300 group-hover:bg-red-500 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Step 3
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Thêm NFT
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Thêm NFT
                </span>
                <p className="text-sm text-slate-500">
                  Quisque est vel vulputate cursus. Risus proin diam nunc
                  commodo. Lobortis auctor congue commodo diam neque.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                <img
                  className="group-hover:opacity-0 transition-opacity duration-500"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fchat_zinhdw.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01"
                />
                <img
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fhide_chat_egk7h4.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01 displaying on hover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
          <div className="group  bg-gradient-to-t from-[#171c35] to-[#000000] hover:from-[#2b131e] hover:to-[#141414] relative before:absolute before:inset-0 bbefore:bg-[url('/noise.gif')] before:opacity-5  rounded-2xl border ">
            <div className="relative">
              <div className="px-6 py-5">
                <div className="bg-blue-400 group-hover:bg-blue-700 transition-all duration-500 ease-in-out w-fit px-3 rounded-full text-sm py-1 text-white mb-1">
                  Step 4
                </div>
                <span className="text-lg group-hover:hidden inline-block font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Đưa lên sàn bán
                </span>
                <span className="text-lg group-hover:inline-block hidden font-semibold pt-2 text-slate-200 mb-1 transition-all duration-500 ease-in-out">
                  Đưa lên sàn bán
                </span>
                <p className="text-sm text-slate-500">
                  Arcu egestas dolor vel iaculis in ipsum mauris. Tincidunt
                  mattis aliquet hac quis. Id hac maecenas ac donec pharetra
                  eget.
                </p>
              </div>
              <div className="relative group-hover:-translate-y-2 transition-transform duration-500 ease-in-out">
                <img
                  className="group-hover:opacity-0 transition-opacity duration-500"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fchartt.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01"
                />
                <img
                  className="absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  src="https://www.ui-layouts.com/_next/image?url=%2Fsimplechartt.webp&w=750&q=75"
                  width={350}
                  height={240}
                  alt="Card image 01 displaying on hover"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <Benefit />
      <Subscribe />
  
        <Partner />
   

      <Footer />
    </>
  );
}
