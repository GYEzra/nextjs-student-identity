"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { InputValidator, Modal } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas";
import { authenticate } from "@/lib/auth";
import { useHasMounted } from "@/hooks/custom";
import Loader from "@/app/loader";
import { z } from "zod";

const Login = () => {
    const hasMounted = useHasMounted();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<z.output<typeof loginSchema>>({
        resolver: zodResolver(loginSchema)
    });

    const onSubmit = handleSubmit(async (data) => {
        const promise = authenticate(data.email, data.password);

        const response = await toast.promise(promise, {
            pending: "Logging in...",
        });

        if (response?.ok) {
            router.replace("/");
            toast.success("Login successfully!");
        } else {
            toast.error(response?.error);
        }
    })

    if (!hasMounted) return <Loader />;

    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset>
                    <legend className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">Login</legend>
                    <InputValidator type="text" label="Email" name="email" placeholder="Please enter your email" register={register} errors={errors} />
                    <InputValidator type="password" label="Password" name="password" placeholder="Please enter your password" register={register} errors={errors} />
                </fieldset>

                <div className="text-end">
                    <Link href="/auth/forget">
                        <span className="link text-white no-underline hover:text-gray-300">
                            Forget password?
                        </span>
                    </Link>
                </div>

                <button type="submit" className="special-button w-full mt-8 py-2">
                    Login
                </button>

                <p className="mt-6 text-center text-white">
                    Don't have an account yet?{" "}
                    <Link href="/signup">
                        <span className="font-medium link text-white no-underline hover:text-gray-300 hover:underline">
                            Signup
                        </span>
                    </Link>
                </p>
            </form>
        </>
    );
};

export default Login;