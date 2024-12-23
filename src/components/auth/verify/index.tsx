"use client";

import { sendRequest } from "@/utils/api";
import { toast } from "react-toastify";
import { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";

const Verify = () => {
    const router = useRouter();
    const params = useParams<{ id: string }>();
    const id = params.id;
    const [code, setCode] = useState("");

    const onFinish = async () => {
        if (code) {
            const promise = sendRequest<IBackendRes<{ message: string }>>({
                method: "POST",
                url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/check-code`,
                body: { _id: id, code },
            });

            const response = await toast.promise(promise, {
                pending: "Verifying...",
            })

            if (response.statusCode === 201) {
                router.replace('/auth/login');
                toast.success("Code verified successfully.");
            } else if (response.statusCode === 400) {
                toast.error("Code is invalid or expired.");
            } else {
                toast.error("An error occurred.");
            }
        } else {
            toast.warn("Please enter the code.");
        }


    }


    return (
        <form>
            <h2 className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">
                Verify Account
            </h2>
            <div className="mt-4">
                <label
                    htmlFor="email"
                    className="block text-md font-medium text-white"
                >
                    ID Account <span className="text-red-600">*</span>
                </label>
                <input
                    id="userId"
                    name="userId"
                    type="text"
                    placeholder="Please enter your email address"
                    maxLength={255}
                    value={id}
                    disabled
                    className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800 disabled bg-gray-300"
                />
            </div>

            <div className="mt-4">
                <label
                    htmlFor="code"
                    className="block text-md font-medium text-white"
                >
                    Code <span className="text-red-600">*</span>
                </label>
                <input
                    id="code"
                    name="code"
                    type="text"
                    value={code}
                    placeholder="Please enter the verification code sent to your email"
                    minLength={1}
                    maxLength={255}
                    className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
                    onChange={(e) => setCode(e.target.value)}
                />
            </div>

            <button type="button" className="special-button w-full py-2 mt-10" onClick={onFinish}>
                Gửi
            </button>

            <p className="mt-2 text-center text-white">
                Quay trở về trang chủ ?{" "}
                <Link href="/">
                    <span className="font-medium link text-white no-underline hover:text-gray-300 hover:underline">
                        Trở về
                    </span>
                </Link>
            </p>
        </form>
    )
}

export default Verify;