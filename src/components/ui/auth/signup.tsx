"use client";

import { useState } from "react";
import { toast } from "react-toastify";
import { sendRequest } from "@/utils/api";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signup = () => {
    const router = useRouter();
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const validateInput = (name: string, value: string) => {
        let error = "";

        if (name === "name" && !value.trim()) {
            error = "Full name is required.";
        }

        if (name === "email") {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!value.trim()) error = "Email is required.";
            else if (!emailRegex.test(value)) error = "Invalid email format.";
        }

        if (name === "password") {
            const passwordRegex =
                /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
            if (!value.trim()) error = "Password is required.";
            else if (!passwordRegex.test(value))
                error =
                    "Password must be at least 8 characters, include uppercase, lowercase, number, and special character.";
        }

        if (name === "confirmPassword") {
            if (!value.trim()) error = "Re-password is required.";
        }

        return error;
    };

    const onFinish = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { name, email, password, confirmPassword, accountType } =
            Object.fromEntries(formData);

        const newErrors = {
            name: validateInput("name", name as string),
            email: validateInput("email", email as string),
            password: validateInput("password", password as string),
            confirmPassword:
                password !== confirmPassword
                    ? "Passwords do not match."
                    : validateInput("confirmPassword", confirmPassword as string),
        };

        setErrors(newErrors);

        if (Object.values(newErrors).some((error) => error)) return;

        const promise = sendRequest<IBackendRes<{ _id: string }>>({
            method: "POST",
            url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
            body: {
                email,
                password,
                confirmPassword,
                name,
                accountType
            },
        });

        const response = await toast.promise(promise, {
            pending: "Signing up...",
        });

        if (response.statusCode === 201) {
            router.push(`/auth/verify/${response.data?._id}`);
            toast.success("Signing up successfully");
        } else if (response.statusCode === 400) {
            toast.warn(response.message);
        } else {
            toast.error("Internal server error");
        }
    };

    return (
        <form onSubmit={onFinish}>
            <h2 className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">
                Sign Up
            </h2>
            <div className="flex mt-10">
                <div className="w-1/2 flex gap-2">
                    <input type="radio" name="accountType" value="PERSONAL" className="radio" />
                    <label htmlFor="remember" className="text-md font-medium text-white">
                        Personal
                    </label>
                </div>
                <div className="w-1/2 flex gap-2">
                    <input type="radio" name="accountType" value="ORGANIZATIONAL" className="radio" defaultChecked />
                    <label htmlFor="remember" className="text-md font-medium text-white">
                        Organizational
                    </label>
                </div>
            </div>

            {[
                { id: "name", label: "Fullname", type: "text", required: true },
                { id: "email", label: "Email", type: "email", required: true },
                { id: "password", label: "Password", type: "password", required: true },
                {
                    id: "confirmPassword",
                    label: "Re-password",
                    type: "password",
                    required: true,
                },
            ].map(({ id, label, type }) => (
                <div key={id} className="mt-4">
                    <label htmlFor={id} className="block text-md font-medium text-white">
                        {label} <span className="text-red-600">*</span>
                    </label>
                    <input
                        id={id}
                        name={id}
                        type={type}
                        placeholder={`Please enter your ${label.toLowerCase()}`}
                        maxLength={255}
                        className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
                        onBlur={(e) =>
                            setErrors((prev) => ({
                                ...prev,
                                [id]: validateInput(id, e.target.value),
                            }))
                        }
                    />
                    {errors[id as keyof typeof errors] && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors[id as keyof typeof errors]}
                        </p>
                    )}
                </div>
            ))}

            <button type="submit" className="special-button w-full mt-8 py-2">
                Sign Up
            </button>

            <p className="mt-6 text-center text-white">
                Already have an account?{" "}
                <Link href="/auth/login">
                    <span className="font-medium link text-white no-underline hover:text-gray-300 hover:underline">
                        Login
                    </span>
                </Link>
            </p>
        </form>
    );
};

export default Signup;