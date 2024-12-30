"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/lib/schemas";
import { signUp } from "@/lib/auth";
import { InputValidator } from "@/components/ui";
import { useHasMounted } from "@/hooks/custom";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountType } from "@/types/user";
import Loader from "@/app/loader";
import { z } from "zod";

const Signup = () => {
    const hasMounted = useHasMounted();
    const router = useRouter();
    const { register, handleSubmit, formState: { errors } } = useForm<z.output<typeof registerSchema>>({
        resolver: zodResolver(registerSchema)
    });

    const onSubmit = handleSubmit(async (data) => {
        try {
            const signUpPromise = signUp(data);
            const signUpResponse = await toast.promise(signUpPromise, {
                pending: "Signing up...",
            })

            if (signUpResponse.EC === 0) {
                toast.success("Signup successfully!");
                router.push(`/verify/${signUpResponse.data!._id}`);
            } else {
                toast.error(signUpResponse.error);
            }
        } catch (error) {
            toast.error("Internal server error")
        }
    })

    if (!hasMounted) return <Loader />;

    return (
        <>
            <form onSubmit={onSubmit}>
                <fieldset className="flex flex-col gap-y-4">
                    <legend className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase py-4">SignUp</legend>

                    <div className="flex gap-x-4 mt-6">
                        <div className="flex gap-x-2">
                            <InputValidator type="radio" className="radio radio-error checked:bg-red-500" name="accountType" defaultChecked value={AccountType.Personal} register={register} errors={errors} />
                            <span className="text-md font-medium leading-6 text-neutral-400">{AccountType.Personal}</span>
                        </div>
                        <div className="flex gap-x-2">
                            <InputValidator type="radio" className="radio radio-error checked:bg-red-500" name="accountType" defaultChecked value={AccountType.Organizational} register={register} errors={errors} />
                            <span className="text-md font-medium leading-6 text-neutral-400">{AccountType.Organizational}</span>
                        </div>
                    </div>

                    <InputValidator required type="text" label="Fullname" name="name" placeholder="Please enter your name" register={register} errors={errors} />
                    <InputValidator required type="text" label="Email" name="email" placeholder="Please enter your email" register={register} errors={errors} />
                    <InputValidator required type="password" label="Password" name="password" placeholder="Please enter your password" register={register} errors={errors} />
                    <InputValidator required type="password" label="Confirm Password" name="confirmPassword" placeholder="Please enter your confirm password" register={register} errors={errors} />


                </fieldset>

                <button type="submit" className="special-button w-full mt-8 py-2">
                    Sign Up
                </button>

                <p className="mt-6 text-center text-white">
                    Already have an account?{" "}
                    <Link href="/login">
                        <span className="font-medium link text-white no-underline hover:text-gray-300 hover:underline">
                            Login
                        </span>
                    </Link>
                </p>
            </form>
        </>
    );
};

export default Signup;