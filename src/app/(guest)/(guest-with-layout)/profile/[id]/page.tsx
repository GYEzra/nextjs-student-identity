"use client";
import { useEffect, useState } from "react";
import { Organizational, Personal } from "@/types/user";
import { useRouter } from "next/navigation";
import { findUserById } from "@/lib/api/user";
import { useHasMounted } from "@/hooks/custom";
import { MdMoreHoriz, MdOutlineContentCopy } from "react-icons/md";
import { HiBadgeCheck } from "react-icons/hi";
import { FaShare } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";
import Image from "next/image";
import {
  DEFAULT_ETH_ADDRESS,
  formatNftListedStatus,
  formatShortEthAddress,
  getPinataCid,
} from "@/utils";
import { useOwnedNfts } from "@/hooks/web3";
import { NftList } from "@/components/ui";

const ProfilePage = ({ params }: { params: { id: string } }) => {
  const hasMounted = useHasMounted();
  const router = useRouter();
  const [user, setUser] = useState<Personal | Organizational>();
  const { nfts } = useOwnedNfts();

  const fetchUserProfile = async () => {
    const user = await findUserById(params.id);

    if (user != null) {
      setUser(user);
    } else {
      router.replace("/404");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [params.id]);

  if (!hasMounted || !user) return null;

  return (
    <div className="flex flex-col gap-2 lg:gap-6 text-white">
      <div className="pb-5">
        <div className="flex justify-center">
          <img
            src={
              user.image ??
              "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            }
            className="rounded-full w-24 lg:w-32 absolute top-1/2 p-1 bg-white"
          />

          {/* <Image
            className="rounded-full w-24 lg:w-32 absolute top-1/2 p-1 bg-white"
            src={user.image ?? "/images/avatar.webp"}
            alt="Avatar"
            width={960}
            height={480}
          /> */}
        </div>
        
        <img
          src={
            user.image ??
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
          className="object-cover w-full h-80 rounded-md"
        />
        {/* <Image
          className="object-cover w-full h-80 rounded-md"
          src={user.image ?? "/images/avatar.webp"}
          alt="Banner"
          width={960}
          height={480}
        /> */}
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 py-4">
        <div className=" flex gap-2 items-center justify-center">
          <p className=" text-base lg:text-5xl font-bold">{user.name}</p>
          <HiBadgeCheck className="size-4 lg:size-6 bg-blue-600 rounded-full" />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="text-green-400 font-semibold">{`@${user.accountType.toLowerCase()}`}</p>
          <div className="tooltip" data-tip="Copy">
            <button className="flex gap-1 items-center bg-gray-800 p-1 text-sm font-medium rounded-md">
              {formatShortEthAddress(user.walletAddress || DEFAULT_ETH_ADDRESS)}
              <span>
                <MdOutlineContentCopy />
              </span>
            </button>
          </div>
        </div>

        <p className="text-center w-full lg:w-3/4 mx-auto text-gray-400 text-sm lg:text-base">
          {user.bio || "Chưa có thông tin"}
        </p>
        <div className="flex gap-2 justify-center items-center">
          <p className="font-normal text-gray-300 text-sm lg:text-base">
            <span className="font-bold text-white">2.4K </span>followers
          </p>
          <p className="font-normal text-gray-300 text-sm lg:text-base">
            <span className="text-white font-bold">4 </span>following
          </p>
        </div>

        <div className="flex gap-2 justify-center items-center">
          <button className="bg-green-500 text-white text-xs lg:text-sm font-medium p-2 rounded-md">
            Follow
          </button>
          <button className="border border-zinc-700 p-2 rounded-md text-xs lg:text-sm font-medium">
            Send Messege
          </button>
          <div className="flex items-center border border-zinc-700 rounded-md">
            <div className="tooltip" data-tip="Share">
              <button className="p-2.5">
                <FaShare className="text-white size-3 lg:size-4" />
              </button>
            </div>
            <div className="tooltip" data-tip="Other">
              <button className="p-2.5 border-l border-r border-zinc-700">
                <MdMoreHoriz className="text-white size-3 lg:size-4 " />
              </button>
            </div>
            <div className="tooltip" data-tip="Edit profile">
              <button className="p-2.5 ">
                <RiEdit2Fill className="text-white size-3 lg:size-4" />
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-zinc-900 w-10/12 mx-auto"></div>
        <p className="text-sm lg:text-base">
          <span className="font-bold">{nfts.data?.length || 0}</span> item
        </p>
        <div className="flex flex-wrap p-3 gap-4">
          <NftList items={nfts.data ?? []} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
