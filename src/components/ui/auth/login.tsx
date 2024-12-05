"use client";

import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { authenticate } from "@/utils/action";

const Login = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>(
        {}
    );

    const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Reset errors
        setErrors({});

        const { email, password } = formData;

        // Validation
        const newErrors: { email?: string; password?: string } = {};

        // Email validation
        if (!email) {
            newErrors.email = "Please enter your email.";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Invalid email format.";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Please enter your password.";
        } else if (
            password.length < 8 ||
            !/\d/.test(password) ||
            !/[A-Z]/.test(password) ||
            !/[a-z]/.test(password)
        ) {
            newErrors.password =
                "Password must be at least 8 characters long, with a number and a mix of uppercase and lowercase letters.";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        // If no errors, proceed to authenticate
        const promise = authenticate(email, password);

        const response = await toast.promise(promise, {
            pending: "Logging in...",
        });

        if (response?.ok) {
            toast.success("Login successfully!");
            router.replace("/");
        } else {
            toast.error(response?.error || "An error occurred");
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleLogin}>
            <h2 className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">
                Login
            </h2>

            <div className="mt-4">
                <label htmlFor="email" className="block text-md font-medium text-white">
                    Email <span className="text-red-600">*</span>
                </label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Please enter your email address"
                    maxLength={255}
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
                />
                {errors.email && (
                    <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                )}
            </div>

            <div className="mt-4">
                <label
                    htmlFor="password"
                    className="block text-md font-medium text-white"
                >
                    Password <span className="text-red-600">*</span>
                </label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Please enter your password"
                    maxLength={255}
                    value={formData.password}
                    onChange={handleChange}
                    className="input input-bordered w-full mt-2 px-3 py-2 rounded-md text-gray-800"
                />
                {errors.password && (
                    <p className="text-red-600 text-sm mt-1">{errors.password}</p>
                )}
            </div>

            <div className="flex justify-between items-center mt-4">
                <div className="flex gap-2 items-center">
                    <input type="checkbox" defaultChecked className="checkbox h-5 w-5" />
                    <label htmlFor="remember" className="text-md font-medium text-white">
                        Remember password
                    </label>
                </div>

                <Link href="/auth/forget">
                    <span className="link text-white no-underline hover:text-gray-300 hover:underline">
                        Forget password?
                    </span>
                </Link>
            </div>

            <button type="submit" className="special-button w-full mt-8 py-2">
                Login
            </button>

            <p className="mt-6 text-center text-white">
                Don't have an account yet?{" "}
                <Link href="/auth/signup">
                    <span className="font-medium link text-white no-underline hover:text-gray-300 hover:underline">
                        Signup
                    </span>
                </Link>
            </p>
        </form>
    );
};

export default Login;