import React from "react";

const TeamSection = () => {
  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-3xl font-semibold text-white mb-4">OUR TEAM</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Meet the talented individuals behind our success. Our team is dedicated, skilled, and passionate about delivering outstanding results.
          </p>
        </div>
        <div className="flex justify-center items-center flex-wrap -m-4">
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center mb-4 border-4 border-gray-300"
                src="/images/image1.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-xl text-white">Alper Kamu</h2>
                <h3 className="text-gray-300 mb-3">UI Developer</h3>
                <p className="mb-4 text-gray-300">Innovative designer with a passion for user-centered development.</p>
                <span className="inline-flex space-x-4">
                  {/* Social Icons */}
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center mb-4 border-4 border-gray-300"
                src="/images/image1.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-xl text-white">Atticus Finch</h2>
                <h3 className="text-gray-300 mb-3">UI Developer</h3>
                <p className="mb-4 text-gray-300">Experienced designer with a focus on crafting intuitive user interfaces.</p>
                <span className="inline-flex space-x-4">
                  {/* Social Icons */}
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
              <img
                alt="team"
                className="flex-shrink-0 rounded-full w-32 h-32 object-cover object-center mb-4 border-4 border-gray-300"
                src="/images/image1.png"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-xl text-white">Atticus Finch</h2>
                <h3 className="text-gray-300 mb-3">UI Developer</h3>
                <p className="mb-4 text-gray-300">Experienced designer with a focus on crafting intuitive user interfaces.</p>
                <span className="inline-flex space-x-4">
                  {/* Social Icons */}
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-300 hover:text-white transition">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
