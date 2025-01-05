"use client";
import { useState } from "react";
import React from "react";

const trendingCollections1 = [
    { rank: 1, name: "Courtyard.io", price: "5.98 USDC.e", volume: "33 ETH", image: "https://i.seadn.io/gcs/files/3ea70379eaf770c85beae83b89c7a632.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 2, name: "Apu Apustajas", price: "0.18 ETH", volume: "30 ETH", image: "https://i.seadn.io/s/raw/files/3ce1c0040e5653264e3dbe0b24d66724.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 3, name: "CryptoPunks", price: "65 ETH", volume: "1200 ETH", image: "https://i.seadn.io/gcs/files/3ea70379eaf770c85beae83b89c7a632.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 4, name: "Bored Ape Yacht Club", price: "45 ETH", volume: "900 ETH", image: "https://i.seadn.io/s/raw/files/3ce1c0040e5653264e3dbe0b24d66724.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 5, name: "Azuki", price: "12 ETH", volume: "200 ETH", image: "https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 6, name: "L3E7 Guardians", price: "0.13 ETH", volume: "11 ETH", image: "https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1" },
];

const trendingCollections2 = [
    { rank: 1, name: "CryptoPunks", price: "65 ETH", volume: "1200 ETH", image: "https://i.seadn.io/gcs/files/3ea70379eaf770c85beae83b89c7a632.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 2, name: "Bored Ape Yacht Club", price: "45 ETH", volume: "900 ETH", image: "https://i.seadn.io/s/raw/files/3ce1c0040e5653264e3dbe0b24d66724.png?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 3, name: "Ninja Squad Official", price: "0.12 ETH", volume: "8 ETH", image: "https://i.seadn.io/gae/xVyUwQMXGvCha3V8UQ1laIx5tfwpmR76Bu1L0oaNKHfxz0FS_t5Y6wRlXBTFqZNlGb0ixL4_TSifMtjQUgv25ZPuTHaFVNitFGf4Dw?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 4, name: "Pirate Nation", price: "0.81 ETH", volume: "44 ETH", image: "https://i.seadn.io/gcs/files/9dd5c3df43bcd0861cead11bc988ce3d.gif?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 5, name: "Azuki", price: "12 ETH", volume: "200 ETH", image: "https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1" },
    { rank: 6, name: "L3E7 Guardians", price: "0.13 ETH", volume: "11 ETH", image: "https://i.seadn.io/s/raw/files/5fd5c9739b060dbae34018b0124b45bc.jpg?auto=format&dpr=1&w=136&h=136&fr=1" },
];

interface NFTCollection {
    rank: number;
    name: string;
    price: string;
    volume: string;
    image: string;
}

const NFTTable: React.FC<{ data: NFTCollection[] }> = ({ data }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((item) => (
            <div key={item.rank} className="bg-gray-800 rounded-lg shadow-lg p-4 hover:scale-105 transition-all duration-300">
                <div className="flex items-center mb-4">
                    <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full mr-4" />
                    <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-400">Rank #{item.rank}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm text-gray-300">
                    <p>{item.price}</p>
                    <p>{item.volume}</p>
                </div>
            </div>
        ))}
    </div>
);

const Ranking = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className=" text-white px-8 py-10">
         
            <h1 className="text-3xl font-semibold mb-6 text-center">Trending NFT Collections</h1>
            <div className="flex justify-center mb-8">
                <button
                    onClick={() => setActiveTab(1)}
                    className={`py-3 px-8 rounded-lg transition-all duration-300 text-lg font-medium ${activeTab === 1 ? 'bg-indigo-700 text-white shadow-lg' : 'bg-transparent text-gray-400 hover:text-white hover:bg-indigo-600'}`}>
                    Top
                </button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={`py-3 px-8 rounded-lg transition-all duration-300 text-lg font-medium ${activeTab === 2 ? 'bg-indigo-700 text-white shadow-lg' : 'bg-transparent text-gray-400 hover:text-white hover:bg-indigo-600'}`}>
                    Trending
                </button>
            </div>
            <div>
                {activeTab === 1 ? (
                    <NFTTable data={trendingCollections1} />
                ) : (
                    <NFTTable data={trendingCollections2} />
                )}
            </div>
        </div>
    );
};

export default Ranking;
