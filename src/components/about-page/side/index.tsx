import React from 'react';

const Side = () => {
  return (
    <div>
      <section className="relative bg-gray-50">
        <video 
          autoPlay 
          loop 
          muted 
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/video3.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>

        {/* Content */}
        <div className="relative z-20 mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center text-white">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Discover, Buy, Sell NFTs.
              <strong className="font-extrabold special-text sm:block">
                Unleash Your Creativity.
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              Join the revolution of digital ownership! Explore rare digital assets, support your favorite artists, and secure your place in the future of decentralized art and innovation.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="btn border-0 special-button"
                href="#explore"
              >
                Explore NFTs
              </a>

              <a
                className="block w-full rounded px-12 py-3 text-sm font-medium special-text shadow hover:text-blue-300 focus:outline-none focus:ring active:text-blue-500 sm:w-auto"
                href="#how-it-works"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Side;
