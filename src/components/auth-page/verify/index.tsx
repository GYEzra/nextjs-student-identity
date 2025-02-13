"use client";
import { useForm } from "react-hook-form";
import { Button, CountdownButton, InputValidator } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { VerifyAccountData } from "@/types/schemas";
import { verifyAccountSchema } from "@/lib/schemas";
import { checkCode, sendRetryActive } from "@/lib/api/auth";
import { useState } from "react";

const COUNTDOWN_SECONDS = 60;

const Verify = ({ id }: { id: string }) => {
  const router = useRouter();
  const [seconds, setSeconds] = useState<number>(0);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyAccountData>({
    resolver: zodResolver(verifyAccountSchema),
    defaultValues: {
      _id: id
    }
  });

  const onSubmit = handleSubmit(async (data: VerifyAccountData) => {
    try {
      const verifyPromise = checkCode(data);
      await toast.promise(verifyPromise, {
        pending: "Verifying code...",
      });

      router.push("/login");
      toast.success("Verification successful!");
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  const onSendRetryActive = async () => {
    try {
      const promise = sendRetryActive(id);

      const response = await toast.promise(promise, {
        pending: "Waiting for send mail..",
      });

      setSeconds(COUNTDOWN_SECONDS);
      toast.success(response.message);
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-black text-5xl text-center cursor-default">Verify Account</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="mb-2">
          <InputValidator type="text" name="_id" register={register} errors={errors} hidden readOnly />
          <InputValidator required type="text" label="Code" name="codeId" placeholder="Please enter your verification code" register={register} errors={errors} />
        </fieldset>
        <Button type="submit" value="Submit"></Button>
        <h3 className="text-primary-label text-center mt-2">
          Haven't received activation code?
          <CountdownButton
            className="group text-blue-400 transition-all duration-100 ease-in-out !bg-transparent"
            type="button" value="Retry"
            seconds={seconds}
            setSeconds={setSeconds}
            onClick={onSendRetryActive}>
          </CountdownButton>
        </h3>

      </form>
    </>
  );
};

export default Verify;
