import React from 'react';

const HeroSection = () => {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-r from-violet-600 via-purple-500 to-black">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center gap-10">
        {/* Left Video with Overlay */}
        <div className="relative lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded shadow-lg"
            alt="hero"
            src="/images/nft.jpg"
            width={720}
            height={600}
          />
        </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-40 rounded-xl"></div>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-white leading-snug">
            Discover Rare Digital Art
            <br />
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-black bg-clip-text text-transparent">
              Buy, Sell, and Collect NFTs
            </span>
          </h1>
          <p className="mb-6 leading-relaxed text-lg text-gray-300">
            Explore a world of unique digital creations from artists across the globe. Own a piece of the future and redefine art ownership with blockchain technology.
          </p>
          <div className="flex w-full md:justify-start justify-center items-end mb-4">
            <div className="relative mr-4 md:w-full lg:w-full xl:w-2/3 w-3/4">
              <input
                type="text"
                id="hero-field"
                name="hero-field"
                placeholder="Enter your email"
                className="w-full bg-gray-800 rounded-full border bg-opacity-50 border-gray-700 focus:ring-2 focus:ring-pink-500 focus:bg-transparent focus:border-pink-500 text-base outline-none text-gray-300 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button className="inline-flex text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 hover:scale-105 transition-transform duration-300 shadow-lg rounded-full text-lg">
              Subscribe
            </button>
          </div>
          <p className="text-sm text-gray-400 mb-6 w-full">
            Be the first to know about new collections and updates.
          </p>
          <div className="flex lg:flex-row md:flex-col">
            <button className="bg-white inline-flex py-3 px-5 rounded-lg items-center shadow-lg hover:bg-gray-100 transition duration-300 focus:outline-none">
              <img
                src="https://image.similarpng.com/very-thumbnail/2020/12/Flat-design-Google-logo-design-Vector-PNG.png"
                alt="Google"
                className="w-6 h-6"
              />
              <span className="ml-4 flex items-start flex-col leading-none">
                <span className="text-xs text-gray-500 mb-1">Sign in with</span>
                <span className="title-font font-medium">Google</span>
              </span>
            </button>

            {/* Facebook Button */}
            <button className="bg-blue-600 inline-flex py-3 px-5 rounded-lg items-center shadow-lg lg:ml-4 md:ml-0 ml-4 md:mt-4 mt-0 lg:mt-0 hover:bg-blue-700 transition duration-300 focus:outline-none">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png"
                alt="Facebook"
                className="w-6 h-6"
              />
              <span className="ml-4 flex items-start flex-col leading-none text-white">
                <span className="text-xs text-gray-300 mb-1">Sign in with</span>
                <span className="title-font font-medium">Facebook</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
