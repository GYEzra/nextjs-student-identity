"use client";
import { useEffect, useState } from "react";
import { AccountType, Organizational, Personal } from "@/types/user";
import { redirect, useParams } from "next/navigation";
import PersonalInfo from "./personal";
import OrganizationalInfo from "./organizational";
import { findUserById } from "@/lib/user";
import { useHasMounted } from "@/hooks/custom";
import { MdMoreHoriz, MdOutlineContentCopy } from "react-icons/md";
import { Carousel } from "../ui";
import { HiBadgeCheck } from "react-icons/hi";
import { FaLocationDot, FaShare } from "react-icons/fa6";
import { RiEdit2Fill } from "react-icons/ri";

const Profile = () => {
  const hasMounted = useHasMounted();
  const params = useParams<{ id: string }>();
  const [user, setUser] = useState<Personal | Organizational>();

  const fetchUserProfile = async () => {
    const user = await findUserById(params.id);

    if (user != null) {
      setUser(user);
    } else {
      redirect("/not-found");
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, [params.id]);

  if (!hasMounted || !user) return null;

  const relatedItems = [
    {
      id: 1,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-9455-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 2,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-5674-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 3,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-3661-1-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
    {
      id: 4,
      owner: "John Doe",
      name: "Meta Legend #9455",
      price: "0.005 ETH",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam earum aliquid rem animi, temporibus eius dolorem ad magni neque architecto officiis consequatur repudiandae beatae sint labore dolore nobis doloremque soluta hic possimus vero. Vel, esse. Eos eum consequatur ipsa. Dignissimos?",
      image:
        "https://wpsmartnft.com/wp-content/uploads/2024/10/Meta-Legend-9455-1024x1024.avif",
      meta: {
        properties: [
          { key: "Rarity", value: "Legendary" },
          { key: "Collection", value: "Meta Legends" },
          { key: "Artist", value: "John Doe" },
          { key: "Release Year", value: "2024" },
        ],
      },
    },
  ];

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
        </div>

        <img
          src={
            user.image ??
            "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
          }
          className="object-cover w-full h-80 rounded-md"
        />
      </div>
      <div className="flex flex-col gap-2 lg:gap-4 py-4">
        <div className=" flex gap-2 items-center justify-center">
          <p className=" text-base lg:text-5xl font-bold">Smith Rhodes</p>
          <HiBadgeCheck className="size-4 lg:size-6 bg-blue-600 rounded-full" />
        </div>

        <div className="flex gap-2 justify-center items-center">
          <p className="text-green-400 font-semibold">@smithrhodes</p>
          <div className="tooltip" data-tip="Copy">
            <button className="flex gap-1 items-center bg-gray-800 p-1 text-sm font-medium rounded-md">
              0xc738eBe27...
              <span>
                <MdOutlineContentCopy />
              </span>
            </button>
          </div>
        </div>

        <p className="text-center w-full lg:w-3/4 mx-auto text-gray-400 text-sm lg:text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores
          harum cum earum exercitationem recusandae quisquam possimus saepe
          quibusdam ab molestiae.
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
          <span className="font-bold">4</span> item
        </p>
        <div className="flex flex-wrap p-3 gap-4">
          {relatedItems.map((item) => (
            <div
              key={item.id}
              className="w-full lg:w-1/5 p-2 rounded-lg border border-zinc-800 transition-transform transform hover:scale-105 hover:shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full rounded-lg object-cover p-2"
              />
              <div className="p-3 flex flex-col gap-2">
                <div className="flex gap-1 items-center">
                  <p className="text-xs font-medium text-gray-50">
                    {item.owner}
                  </p>
                  <HiBadgeCheck className="bg-blue-600 rounded-full size-3" />
                </div>

                <p className="text-sm uppercase font-bold">{item.name}</p>
                <p className="text-sm font-normal text-gray-400">
                  Price:{" "}
                  <span className="font-bold text-green-400">{item.price}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Profile;
