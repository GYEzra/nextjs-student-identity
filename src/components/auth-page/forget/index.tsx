"use client";
import { toast } from "react-toastify";
import { useState } from "react";
import { Button, CountdownButton, InputValidator } from "@/components/ui";
import { useForm } from "react-hook-form";
import { ForgetPasswordData } from "@/types/schemas";
import { forgetPasswordSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { changePassword, sendRetryPassword } from "@/lib/api/auth";
import { useHasMounted } from "@/hooks/custom";
import Loader from "@/app/loader";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const hasMounted = useHasMounted();
  const router = useRouter();
  const [seconds, setSeconds] = useState<number>(0);
  const {
    register,
    handleSubmit,
    trigger,
    watch,
    formState: { errors },
  } = useForm<ForgetPasswordData>({
    resolver: zodResolver(forgetPasswordSchema),
  });

  const onSubmit = handleSubmit(async (data: ForgetPasswordData) => {
    try {
      const promise = changePassword(data);
      const reponse = await toast.promise(promise, {
        pending: "Waiting for processing change password",
      });

      router.push("/login");

      toast.success(reponse.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  const onSendRetryPassword = async () => {
    try {
      const isEmailValid = await trigger("email");

      if (!isEmailValid) return;

      const email = watch("email");
      const promise = sendRetryPassword(email);

      const response = await toast.promise(promise, {
        pending: "Waiting for send mail..",
      });

      setSeconds(30);
      toast.success(response.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  if (!hasMounted) return <Loader />;

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-white text-5xl text-center cursor-default">Forget Password</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="mb-8 flex flex-col gap-y-2">
          <div className="relative flex flex-wrap md:flex-nowrap gap-y-2 md:gap-x-4">
            <div className="basis-full md:basis-3/4">
              <InputValidator required type="text" label="Email" name="email" placeholder="Please enter your email" register={register} errors={errors} />
            </div>
            <div className="basis-full md:basis-1/4 md:relative md:-bottom-8">
              <CountdownButton className="h-12 w-full bg-green-500 text-white text-xs lg:text-md font-medium p-2 rounded-lg" type="button" value="Send" seconds={seconds} setSeconds={setSeconds} onClick={onSendRetryPassword}></CountdownButton>
            </div>
          </div>
          <InputValidator required type="text" label="Code" name="codeId" placeholder="Please enter your activation code" register={register} errors={errors} />
          <InputValidator required type="password" label="New Password" name="password" placeholder="Please enter your new password" register={register} errors={errors} />
        </fieldset>

        <Button type="submit" value="Reset Password"></Button>
      </form>
      <div className="flex flex-col mt-4 items-center justify-center text-sm">
        <h3 className="text-primary-label">
          Remember your password?
          <Link href="/login" className="group text-blue-400 transition-all duration-100 ease-in-out">
            <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Login</span>
          </Link>
        </h3>
      </div>
    </>
  );
};

export default ForgetPassword;
