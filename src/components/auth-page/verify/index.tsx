"use client";
import { useForm } from "react-hook-form";
import { Button, InputValidator } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { VerifyAccountData } from "@/types/schemas";
import { verifyAccountSchema } from "@/lib/schemas";
import { checkCode } from "@/lib/api/auth";

const Verify = ({ id }: { id: string }) => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<VerifyAccountData>({
    resolver: zodResolver(verifyAccountSchema),
  });

  const onSubmit = handleSubmit(async (data: VerifyAccountData) => {
    try {
      const verifyPromise = checkCode(data);
      const { isBeforeCheck } = await toast.promise(verifyPromise, {
        pending: "Verifying code...",
      });

      if (isBeforeCheck) {
        toast.success("Verification successful!");
        router.push("/login");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-black text-5xl text-center cursor-default">Verify Account</h1>
      <form onSubmit={onSubmit}>
        <fieldset>
          <InputValidator type="text" name="_id" register={register} errors={errors} hidden readOnly value={id} />
          <InputValidator required type="text" label="Code" name="codeId" placeholder="Please enter your verification code" register={register} errors={errors} />
        </fieldset>

        <Button type="submit" value="Submit"></Button>
      </form>
    </>
  );
};

export default Verify;
