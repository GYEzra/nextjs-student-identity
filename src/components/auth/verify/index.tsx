"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { Button, InputValidator } from "@/components/ui";
import { verifyAccountSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const Verify = ({ id }: { id: string }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof verifyAccountSchema>>({
    resolver: zodResolver(verifyAccountSchema),
  });

  const onFinish = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-white text-5xl text-center cursor-default">Verify Account</h1>
      <form>
        <fieldset>
          <InputValidator required type="text" label="Verification Code" name="code" placeholder="Please enter your verification code" register={register} errors={errors} />
        </fieldset>

        <Button type="submit" value="Submit"></Button>
      </form>
    </>
  );
};

export default Verify;
