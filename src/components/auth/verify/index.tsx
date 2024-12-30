"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { InputValidator } from "@/components/ui";
import { verifyAccountSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Verify = ({ id }: { id: string }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<z.output<typeof verifyAccountSchema>>({
        resolver: zodResolver(verifyAccountSchema)
    });

    const onFinish = handleSubmit(async (data) => {
        console.log(data);
    })


    return (
        <form >
            <fieldset>
                <legend className="text-2xl md:text-3xl text-center font-bold tracking-wide text-white uppercase">
                    Verify Account
                </legend>
                <InputValidator type="text" label="Verification Code" name="code" placeholder="Please enter your verification code" register={register} errors={errors} />
            </fieldset>

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