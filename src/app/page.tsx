import { Carousel, Modal, Navbar } from "@/components/ui";
import { carouselImgSrc, features } from "../../public/meta";
import { ArrowRightIcon } from "@heroicons/react/16/solid";
import { NftList } from "@/components/nft";
import { Benefit, Introduce, Partner, Ranking, Subscribe } from "@/components/home";
import { Footer } from "@/components/layouts";
import { getServerUrl, imageLoader } from "@/utils";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="text-gray-600 body-font bg-gradient-to-r from-violet-600 via-purple-500 to-black w-full h-auto">
        <section className="relative h-[650px] overflow-hidden">
          <video autoPlay muted loop preload="none" poster="/images/bg-black.jpg" className="w-full h-full object-cover">
            <source src="/videos/video5.mp4" type="video/mp4" />
          </video>
          <div className="hero absolute top-0 bottom-0 left-0 right-0">
            <div className="hero-content flex-col lg:flex-row-reverse gap-20 px-4 sm:px-6">
              <div className="hidden lg:flex flex-2 justify-center">
                <div className="w-[450px] h-[450px] border-spacing-2 border-2 rounded-md overflow-hidden shadow-md shadow-white/60">
                  <Carousel images={carouselImgSrc} width={450} height={450} />
                </div>
              </div>
              <div className="flex-1 text-center lg:text-left">
                <p className="text-xl font-bold special-text">☂ Tìm kiếm NFT bạn cần trong một thị trường</p>
                <h1 className="text-4xl font-bold text-white leading-normal not-select">
                  Nơi Tốt Nhất Để Thu Thập, Mua Bán
                  <span className="special-text"> Awesome NFTs</span>
                </h1>
                <p className="py-6 text-white">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi. Provident cupiditate voluptatem et in.</p>
                <div className="flex justify-center lg:justify-start gap-5">
                  <a className="btn border-0 special-button">Khám phá</a>
                  <a className="btn border-0 special-button">Tạo NFT</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full mx-auto px-4 pt-10 sm:px-6 lg:pt-24">
          <div className="mx-auto max-w-2xl text-center">
            <NftList />
          </div>
        </div>
      </div>

      <Ranking />

      <section className="text-gray-600 body-font bg-gradient-to-r from-violet-600 via-purple-500 to-black pt-8 sm:pt-20 mx-auto">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-pretty text-3xl font-semibold text-white lg:text-balance">Tạo và bán NFT của bạn</p>
          <p className="mt-4 text-base leading-6 text-white/80">Dưới đây là bốn bước dễ dàng để tạo và bán NFT của bạn trên FINTECH.</p>
        </div>
        <div className="mx-auto mt-8 sm:mt-12 lg:mt-16 px-4">
          <dl className="grid max-w-xl grid-cols-1 gap-x-16 gap-y-8 lg:max-w-none lg:grid-cols-4 lg:gap-y-2">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt className="text-lg font-semibold leading-7 text-white flex gap-4 items-center">
                  <div className="relative left-0 top-0 flex h-10 w-10 items-center justify-center rounded-md mb-2 bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-red-600">
                    <feature.icon aria-hidden="true" className="h-6 w-6 text-white" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 text-base leading-7 text-white/80">{feature.description}</dd>
                <dd className="mt-1 text-base leading-7">
                  <a className="link text-[#4568dc] no-underline hover:underline">
                    Tìm hiểu thêm
                    <ArrowRightIcon className="h-4 w-4 inline-block ml-2"></ArrowRightIcon>
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Partner />
      <Benefit />
      <Subscribe />
      <Introduce />
      <Footer />
    </>
  );
}
