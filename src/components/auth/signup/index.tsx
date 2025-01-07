"use client";
import { toast } from "react-toastify";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signUp } from "@/lib/auth";
import { Button, InputValidator, Modal } from "@/components/ui";
import { useHasMounted } from "@/hooks/custom";
import { zodResolver } from "@hookform/resolvers/zod";
import { AccountType } from "@/types/user";
import Loader from "@/app/loader";
import { useState } from "react";
import Verify from "../verify";
import { RegisterData } from "@/types/auth";
import { registerSchema } from "@/lib/schemas";

const Signup = () => {
  const hasMounted = useHasMounted();
  const [id, setId] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = handleSubmit(async (data: RegisterData) => {
    try {
      const signUpPromise = signUp(data);
      const { _id } = await toast.promise(signUpPromise, {
        pending: "Signing up...",
      });

      if (_id) {
        toast.success("Signup successfully!");
        setId(_id);
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  });

  if (!hasMounted) return <Loader />;

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-white text-5xl text-center cursor-default">Sign Up</h1>
      <form onSubmit={onSubmit}>
        <fieldset className="flex flex-col gap-y-4">
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

        <Button type="submit" value="Sign Up"></Button>

        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="text-primary-label">
            Already have an account?
            <Link href="/login" className="group text-blue-400 transition-all duration-100 ease-in-out">
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Login</span>
            </Link>
          </h3>
        </div>
      </form>
      {id && (
        <Modal isOpen>
          <Verify id={id} />
        </Modal>
      )}
    </>
  );
};

export default Signup;
