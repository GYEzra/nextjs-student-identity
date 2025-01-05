import React from 'react';
import Link from 'next/link';

const NFTs = [
  {
    title: "The Galactic Dream",
    description: "A surreal journey through the cosmos. Own this one-of-a-kind NFT and make a statement in the digital art world.",
    imageUrl: "/images/image1.png"
  },
  {
    title: "Abstract Revolution",
    description: "Dive into the realm of abstract digital art with this exclusive NFT piece. A true representation of modern creativity.",
    imageUrl: "/images/image2.jpg"
  },
  {
    title: "The Digital Odyssey",
    description: "This NFT embodies the spirit of exploration in the digital age. A must-have for NFT collectors and art enthusiasts.",
    imageUrl: "/images/image3.jpg"
  }
];

const NFTGallery = () => (
  <section className="text-gray-600 bg-gradient-to-r from-blue-900 via-indigo-800 to-black  body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col">
        <div className="h-1 bg-gray-800 rounded overflow-hidden">
          <div className="w-24 h-full bg-indigo-500"></div>
        </div>
        <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
          <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0">
            NFT Gallery - The Future of Art
          </h1>
          <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0 text-gray-300">
            Explore unique, digital masterpieces in the world of NFTs. Own a piece of digital art, powered by blockchain technology, and become part of the future of creativity.
          </p>
        </div>
      </div>
      <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
        {NFTs.map(({ title, description, imageUrl }, index) => (
          <div key={index} className="p-4 md:w-1/3 sm:mb-0 mb-6">
            <div className="rounded-lg h-64 overflow-hidden">
              <Link href={{
                pathname: '/galleryDetail',
                query: { title, description, imageUrl }
              }}>
                <img
                  alt={`NFT Art ${index + 1}`}
                  className="object-cover object-center h-full w-full cursor-pointer"
                  src={imageUrl}
                />
              </Link>
            </div>
            <h2 className="text-xl font-medium title-font text-white mt-5">{title}</h2>
            <p className="text-base leading-relaxed mt-2 text-gray-300">{description}</p>
            <Link href={{
              pathname: '/galleryDetail',
              query: { title, description, imageUrl }
            }}>
              <span className="text-indigo-400 inline-flex items-center mt-3 cursor-pointer">
                View NFT
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default NFTGallery;
