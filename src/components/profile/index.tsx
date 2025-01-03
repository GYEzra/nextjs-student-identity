"use client";
import { useEffect, useState } from "react";
import { AccountType, Organizational, Personal } from "@/types/user";
import { redirect, useParams } from "next/navigation";
import PersonalInfo from "./personal";
import OrganizationalInfo from "./organizational";
import { findUserById } from "@/lib/api/user";
import { useHasMounted } from "@/hooks/custom";
import { Carousel } from "../ui";

const Profile = () => {
    const hasMounted = useHasMounted();
    const params = useParams<{ id: string }>();
    const [user, setUser] = useState<Personal | Organizational>();

    const fetchUserProfile = async () => {
        const user = await findUserById(params.id);

        if (user != null) {
            setUser(user);
        } else {
            redirect('/not-found');
        }
    }

    useEffect(() => {
        fetchUserProfile();
    }, [params.id])

    if (!hasMounted || !user) return null;

    return (
        <div className="flex flex-col gap-2">
            <div className="relative w-full">
                <div className="group relative w-full">
                    <img
                        className="h-80 w-full border border-zinc-600 rounded-xl"
                        src="https://wallpapercave.com/wp/YKq3a1y.jpg"
                        alt="Banner"
                    />
                </div>
                <div className="absolute ml-8 transform -translate-y-2/3 group">
                    <div className="relative w-32 rounded-full ring-1 ring-white/40 ring-offset-2 ring-offset-base-100">
                        <img
                            src={user.image ?? "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"}
                            className="object-cover rounded-full"
                        />
                        <div className="absolute inset-0 bg-black/30 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        </div>
                    </div>
                </div>
            </div>

            {
                (user.accountType === AccountType.Personal) ? <PersonalInfo user={user as Personal} /> : <OrganizationalInfo user={user as Organizational} />
            }

            <div className="mt-10 flex flex-wrap gap-4 text-white font-medium text-base">
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
                <select defaultValue="default" className="w-1/2 sm:w-1/4 select select-bordered max-w-xs p-2">
                    <option value="default" disabled>
                        Recently received
                    </option>
                    <option value="-price">Price high to low</option>
                    <option value="price">Price low to high</option>
                </select>
            </div>
        </div>
    );


}

export default Profile;