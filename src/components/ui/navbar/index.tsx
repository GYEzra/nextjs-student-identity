"use client"

import { useSession } from "next-auth/react";
import Link from "next/link";
import Walletbar from "../wallet-bar";
import { useAccount, useNetwork } from "@/components/hooks/web3";

const navigation = [
    { label: "Create NFT", href: "/nft/create", activeClass: "" },
    { label: "Edit Profile", href: "/profile/edit", activeClass: "" },
    { label: "Detail NFT", href: "/nft/nft-detail", activeClass: "" },
    { label: "Blog", href: "/blog", activeClass: "" },
    { label: "About", href: "/about", activeClass: "" },
];

const Navbar = () => {
    const { data: session } = useSession();
    const { account } = useAccount();
    const { network } = useNetwork();

    return (
        <div className="navbar bg-black">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="white"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                    >
                        {navigation.map((item) => (
                            <li key={item.label}>
                                <Link href={item.href}>
                                    <span className="text-base text-black">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <Link href="/">
                    <span className="btn btn-ghost text-xl special-text">FINTECH</span>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navigation.map((item) => (
                        <li key={item.label}>
                            <Link href={item.href}>
                                <span className="text-neutral-400 text-base hover:text-neutral-200">
                                    {item.label}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="navbar-end">
                <div className="text-gray-300 self-center mr-2 hidde">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
                        <svg
                            className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400"
                            fill="currentColor"
                            viewBox="0 0 8 8"
                        >
                            <circle cx={4} cy={4} r={3} />
                        </svg>
                        {network.isLoading
                            ? "Loading..."
                            : account.isInstalled
                                ? network.data
                                : "Not connected"}
                    </span>
                </div>
                {
                    <Walletbar
                        session={session}
                        address={account.data}
                        isInstalled={account.isInstalled}
                        connect={account.connect}
                    />
                }
            </div>
        </div>
    );
};

export default Navbar;