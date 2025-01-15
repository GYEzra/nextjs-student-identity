import React from 'react';

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font bg-black">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex w-full mb-20 flex-wrap">
          <h1 className="sm:text-3xl text-2xl font-medium title-font text-white lg:w-1/3 lg:mb-0 mb-4">
            NFT Collection: Digital Artworks
          </h1>
          <p className="lg:pl-6 lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
            Explore our unique collection of digital art pieces, each one a tokenized NFT. These artworks represent the fusion of technology and creativity. Each NFT is a one-of-a-kind item on the blockchain, ready to be added to your collection.
          </p>
        </div>
        <div className="flex flex-wrap md:-m-2 -m-1">
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-1/2">
              <img alt="NFT Artwork 1" className="w-full object-cover h-full object-center block" src="https://wpsmartnft.com/wp-content/uploads/2024/10/786f3017eeb7a6988bbd0567dece1078_profile.png" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="NFT Artwork 2" className="w-full object-cover h-full object-center block" src="https://wpsmartnft.com/wp-content/uploads/2024/10/9c8fa44abe5f9157de79f195421e6006_profile.webp" />
            </div>
            <div className="md:p-2 p-1 w-full">
              <img alt="NFT Artwork 3" className="w-full h-full object-cover object-center block" src="https://wpsmartnft.com/wp-content/uploads/2024/10/4dd821518c093fa7ee2bd90ca5716a64_profile.webp" />
            </div>
          </div>
          <div className="flex flex-wrap w-1/2">
            <div className="md:p-2 p-1 w-full">
              <img alt="NFT Artwork 4" className="w-full h-full object-cover object-center block" src="https://wpsmartnft.com/wp-content/uploads/2024/10/4af04c687e6e644dae01116a02957fce_profile.jpeg" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="NFT Artwork 5" className="w-full object-cover h-full object-center block" src="https://i.seadn.io/gcs/files/9dd5c3df43bcd0861cead11bc988ce3d.gif?auto=format&dpr=1&w=136&h=136&fr=1" />
            </div>
            <div className="md:p-2 p-1 w-1/2">
              <img alt="NFT Artwork 6" className="w-full object-cover h-full object-center block" src="https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
