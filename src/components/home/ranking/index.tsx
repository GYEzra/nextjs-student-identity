"use client";

import { useState } from "react";

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
    <table className="table-auto w-full text-sm text-white bg-gray-900 rounded-lg shadow-lg mb-6">
        <thead>
            <tr className="border-b border-gray-700 text-left">
                <th className="p-4 text-lg">Rank</th>
                <th className="p-4 text-lg">Collection</th>
                <th className="p-4 text-lg">Floor Price</th>
                <th className="p-4 text-lg">Volume</th>
            </tr>
        </thead>
        <tbody>
            {data.map((item) => (
                <tr key={item.rank} className="border-b border-gray-700 hover:bg-purple-800 transition-all duration-300">
                    <td className="p-4">{item.rank}</td>
                    <td className="p-4">
                        <div className="flex items-center">
                            <img src={item.image} alt={item.name} className="w-12 h-12 rounded-full mr-3" />
                            <span>{item.name}</span>
                        </div>
                    </td>
                    <td className="p-4">{item.price}</td>
                    <td className="p-4">{item.volume}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const Ranking = () => {
    const [activeTab, setActiveTab] = useState(1);

    return (
        <div className="bg-gradient-to-r from-violet-600 via-purple-500 to-black min-h-screen text-white p-8">
            <h1 className="text-3xl font-semibold mb-6 text-center">Trending NFT Collections</h1>
            <div className="flex justify-center mb-8">
                <button
                    onClick={() => setActiveTab(1)}
                    className={`py-2 px-6 rounded-tl-lg rounded-tr-lg ${activeTab === 1 ? 'bg-purple-700' : 'bg-purple-500'} hover:bg-purple-600 mr-2`}>
                    Top
                </button>
                <button
                    onClick={() => setActiveTab(2)}
                    className={`py-2 px-6 rounded-tl-lg rounded-tr-lg ${activeTab === 2 ? 'bg-purple-700' : 'bg-purple-500'} hover:bg-purple-600`}>
                    Trending
                </button>
            </div>
            {activeTab === 1 ? (
                <NFTTable data={trendingCollections1} />
            ) : (
                <NFTTable data={trendingCollections2} />
            )}
        </div>
    );
};

export default Ranking;