"use client";
import { useAccount } from "@/components/hooks/web3";
import BaseLayout from "../layouts/BaseLayout";
import { useSession } from "next-auth/react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { FaIdCard, FaMailBulk, FaPhoneAlt, FaTelegramPlane, FaUser } from "react-icons/fa";
import { FaFacebook, FaLocationDot, FaUsers } from "react-icons/fa6";
import { SiBiolink } from "react-icons/si";
import { TbLicense } from "react-icons/tb";
import { useEffect, useState } from "react";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { UserM } from "@/types/user";
import { useHasMounted } from "@/utils/customHook";
import { useParams, useRouter } from "next/navigation";


const Profile = () => {
    const hasMounted = useHasMounted();
    const params = useParams<{ id: string }>();
    const router = useRouter();
    const { account } = useAccount();
    const { data: session } = useSession();
    const [profile, setProfile] = useState<UserM>();

    const fetchProfile = async () => {
        const res = await sendRequest<IBackendRes<UserM>>({
            method: "GET",
            url: `${BACKEND_URL}/api/v1/users/${params.id}`,
            headers: {
                Authorization: `Bearer ${session?.user.access_token}`,
            },
        });

        if (res.statusCode === 200) {
            setProfile(res.data);
        } else {
            router.replace("/not-found");
        }
    }

    useEffect(() => {
        if (hasMounted) {
            fetchProfile();
        }
    }, [hasMounted, params.id])

    return (
        <div>
            {hasMounted ? (
                <BaseLayout>
                    <div className="flex flex-col gap-2">
                        <div className="relative w-full">
                            <div className="group relative w-full">
                                <img
                                    className="h-80 w-full border border-zinc-600 rounded-xl"
                                    src="https://wallpapercave.com/wp/YKq3a1y.jpg"
                                    alt=""
                                />
                                <div className="absolute inset-0 bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">

                                </div>
                            </div>
                            <div className="absolute ml-8 transform -translate-y-2/3 group">
                                <div className="relative w-32 rounded-full ring-1 ring-white/40 ring-offset-2 ring-offset-base-100">
                                    <img
                                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                                        className="object-cover rounded-full"
                                    />
                                    <div className="absolute inset-0 bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* thông tin doanh nghiệp/công ty/tổ chức start*/}

                        <div className="flex flex-col mt-12 px-4 text-white gap-1.5">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <FaUsers className="w-5 h-5 md:w-6 md:h-6" />
                                    <p className="text-base md:text-xl font-medium uppercase">
                                        Công ty ABC
                                    </p>
                                </div>

                                <div className="flex gap-4">
                                    <div className="tooltip" data-tip="Facebook">
                                        <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="tooltip" data-tip="Telegram">
                                        <FaTelegramPlane className="w-4 h-4 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="tooltip" data-tip="E-mail">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
                                        >
                                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                <div className="flex gap-2 items-center w-full sm:w-auto">
                                    <img
                                        className="w-5 h-5 rounded-xl"
                                        src="/images/eth.png"
                                        alt="ether icon"
                                    />
                                    <div className="tooltip" data-tip="Copy">
                                        {(account.data?.substring(0, 7) +
                                            "..." +
                                            account.data?.substring(account.data.length - 5))}
                                    </div>
                                </div>
                                <p className="text-gray-400 w-full sm:w-auto">Thời gian tham gia</p>
                            </div>
                            <div className="flex gap-2 items-center">
                                <FaLocationDot className="w-4 h-4" />
                                <p className="text-base text-gray-300">Địa chỉ....</p>
                            </div>
                            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 ">
                                <div className="w-full md:w-1/2 flex gap-2 items-center">
                                    <FaMailBulk className="w-4 h-4" />
                                    <p className="text-base text-gray-300">
                                        {profile?.email}
                                    </p>
                                </div>

                                <div className="w-full md:w-1/2 flex gap-2 items-center">
                                    <FaPhoneAlt className="w-4 h-4" />
                                    <p className="text-base text-gray-300">0373378293</p>
                                </div>
                            </div>

                            <div className="w-full md:w-1/2 flex flex-col md:flex-row gap-2 md:gap-4 ">
                                <div className="w-full md:w-1/2 flex gap-2 items-center">
                                    <BsBookmarkCheckFill className="w-4 h-4" />
                                    <p className="text-base text-gray-300">Giấy phép thành lập</p>
                                </div>
                                <div className="w-full md:w-1/2 flex gap-2 items-center">
                                    <TbLicense className="w-5 h-5 m-0 p-0" />
                                    <p className="text-base text-gray-300">Giấy hoạt động</p>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center">
                                <SiBiolink />
                                <p className="text-gray-300">
                                    {profile?.bio || "Chưa có thông tin"}
                                </p>
                            </div>
                        </div>

                        {/* thông tin doanh nghiệp/công ty/tổ chức end*/}

                        {/* thông tin của cá nhân start*/}

                        <div className="flex flex-col mt-12 px-4 text-white gap-1">
                            <div className="flex justify-between items-center">
                                <div className="flex gap-2 items-center">
                                    <FaUser />
                                    <p className="text-xl font-medium uppercase">
                                        {session?.user.name}
                                    </p>
                                </div>
                                <div className="flex gap-4">
                                    <div className="tooltip" data-tip="Facebook">
                                        <FaFacebook className="w-4 h-4 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="tooltip" data-tip="Telegram">
                                        <FaTelegramPlane className="w-4 h-4 sm:w-6 sm:h-6" />
                                    </div>
                                    <div className="tooltip" data-tip="E-mail">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            className="w-4 h-4 sm:w-6 sm:h-6 cursor-pointer"
                                        >
                                            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                                <div className="flex gap-2 items-center w-full sm:w-auto">
                                    <img
                                        className="w-5 h-5 rounded-xl"
                                        src="/images/eth.png"
                                        alt="ether icon"
                                    />
                                    <div className="tooltip" data-tip="Copy">
                                        {account.data?.substring(0, 7) +
                                            "..." +
                                            account.data?.substring(account.data?.length - 5)}
                                    </div>
                                </div>
                                <p className="text-gray-400 w-full sm:w-auto">Thời gian tham gia</p>
                            </div>

                            <div className="flex gap-2 items-center">
                                <FaMailBulk className="w-5 h-5" />
                                <p className="text-base text-gray-300">{session?.user.email}</p>
                            </div>
                            <div className="flex gap-4">
                                <div className="flex gap-2 items-center">
                                    <FaIdCard className="w-4 h-4" />
                                    <p className="text-base text-gray-300">0793030047290</p>
                                </div>

                                <div className="flex gap-2 items-center">
                                    <FaPhoneAlt className="w-4 h-4" />
                                    <p className="text-base text-gray-300">0373378293</p>
                                </div>
                            </div>

                            <div className="flex gap-2 items-center">
                                <SiBiolink />
                                <p className="text-gray-300">
                                    {profile?.bio || "Chưa có thông tin"}
                                </p>
                            </div>
                        </div>

                        {/* thông tin của cá nhân end*/}

                        {/* <div className="mt-10 flex flex-wrap gap-4 text-white font-medium text-base">
                            <p className="py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-900 w-auto sm:w-auto">
                                Collected
                            </p>
                            <p className="py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-900 w-auto sm:w-auto">
                                Collection
                            </p>
                            <p className="py-2 px-4 border border-zinc-800 rounded-md hover:bg-zinc-900 w-auto sm:w-auto">
                                Activity
                            </p>
                        </div>
                        <div className="w-full mt-5 flex sm:flex-row gap-4">
                            <label className="w-1/2 sm:w-3/4 input flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow outline-none border-none p-2"
                                    placeholder="Search"
                                />
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-6 w-6 opacity-70"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </label>
                            <select className="w-1/2 sm:w-1/4 select select-bordered max-w-xs p-2">
                                <option disabled selected>
                                    Recently received
                                </option>
                                <option>Price high to low</option>
                                <option>Price low to high</option>
                                <option>Highest floor</option>
                            </select>
                        </div> */}

                        {/* List */}
                        <div className="flex flex-col gap-2">
                            {/* <main className="flex-1 overflow-y-auto">
                                <div className="pt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                    <p className="font-bold text-white">4 Item</p>

                                    <section className="mt-8 pb-16" aria-labelledby="gallery-heading">
                                        <ul
                                            role="list"
                                            className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 xl:gap-x-8"
                                        >
                                            {(nfts.data as Nft[]).map((nft) => (
                                                <li
                                                    key={nft.tokenId}
                                                    onClick={() => setActiveNft(nft)}
                                                    className="relative cursor-pointer"
                                                >
                                                    <div
                                                        className={classNames(
                                                            nft.tokenId === activeNft?.tokenId
                                                                ? "ring-2 ring-offset-2 ring-white"
                                                                : "focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500",
                                                            "group block w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 overflow-hidden"
                                                        )}
                                                    >
                                                        <img
                                                            src={nft.meta.image}
                                                            alt=""
                                                            className={classNames(
                                                                nft.tokenId === activeNft?.tokenId
                                                                    ? ""
                                                                    : "group-hover:opacity-75",
                                                                "object-cover pointer-events-none"
                                                            )}
                                                        />
                                                        <button
                                                            type="button"
                                                            className="absolute inset-0 focus:outline-none"
                                                        >
                                                            <span className="sr-only">
                                                                View details for {nft.meta.name}
                                                            </span>
                                                        </button>
                                                    </div>
                                                    <p className="mt-2 block text-sm font-medium text-neutral-400 truncate pointer-events-none">
                                                        {nft.meta.name}
                                                    </p>
                                                    <p className="mt-2 block text-sm font-medium text-neutral-400 truncate pointer-events-none">
                                                        {nft.meta.description}
                                                    </p>
                                                </li>
                                            ))}
                                        </ul>
                                    </section>
                                </div>
                            </main> */}
                        </div>
                    </div>
                </BaseLayout>
            ) : (
                // Hiển thị loading indicator
                <div>Loading...</div>
            )}
        </div>

    )
}

export default Profile;