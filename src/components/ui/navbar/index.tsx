"use client";
import { useAccount, useNetwork } from "@/hooks/web3";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Button from "../button/default-button";
import Walletbar from "../wallet-bar";

const navigationItems = [
  { label: "Create NFT", href: "/nft/create" },
  { label: "Edit Profile", href: "/profile/edit" },
  { label: "Detail NFT", href: "/nft/detail" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const { data: session } = useSession();
  const { account } = useAccount();
  const { network } = useNetwork();

  const renderNavigationItems = () => {
    return navigationItems.map((item) => (
      <li key={item.label}>
        <Link href={item.href}>
          <span className="text-base text-black">{item.label}</span>
        </Link>
      </li>
    ));
  };

  const renderUserDropdown = () => {
    if (!session) {
      return <Button type="button" value="Login" onClick={() => signIn()} className="btn border-0 special-button" />;
    }

    return (
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt="User profile picture" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-120 p-2 shadow">
          <li>
            <div className="flex items-center">
              <div className="avatar relative">
                <div className="w-12 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
                {account.data ? (
                  <>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    <span className="absolute inline-flex rounded-full h-3 w-3 bg-success animate-ping"></span>
                  </>
                ) : (
                  <span className="absolute inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                )}
              </div>
              <div className="ml-2">
                <p className="text-sm font-medium text-neutral-800">{session.user.name}</p>
                <p className="text-sm text-neutral-600">{session.user.email}</p>
                <p className="text-sm italic text-neutral-500">{session.user.accountType}</p>
              </div>
            </div>
            <hr />
          </li>
          <li>
            <Link href={`/profile/${session.user._id}`} className="justify-between">
              Information
              <span className="badge">New</span>
            </Link>
          </li>
          <li>
            <a>Setting</a>
          </li>
          <li>
            <a onClick={() => signOut()}>Logout</a>
          </li>
          <li className="mt-2">
            <Walletbar />
          </li>
        </ul>
      </div>
    );
  };

  return (
    <div className="navbar bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="white">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {renderNavigationItems()}
          </ul>
        </div>
        <Link href="/">
          <span className="btn btn-ghost text-xl special-text">FINTECH</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{renderNavigationItems()}</ul>
      </div>
      <div className="navbar-end">
        <div className="text-gray-300 self-center mr-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-purple-100 text-purple-800">
            <svg className="-ml-0.5 mr-1.5 h-2 w-2 text-indigo-400" fill="currentColor" viewBox="0 0 8 8">
              <circle cx={4} cy={4} r={3} />
            </svg>
            {network.isLoading ? "Loading..." : account ? network.data : "Not connected"}
          </span>
        </div>
        {renderUserDropdown()}
      </div>
    </div>
  );
};

export default Navbar;
