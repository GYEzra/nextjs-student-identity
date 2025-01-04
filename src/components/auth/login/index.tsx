"use client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button, InputValidator, Modal } from "@/components/ui";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/lib/schemas";
import { authenticate } from "@/lib/auth";
import { useHasMounted } from "@/hooks/custom";
import Loader from "@/app/loader";
import { z } from "zod";
import { FormLayout } from "@/components/layouts";

const Login = () => {
  const hasMounted = useHasMounted();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.output<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
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
  });

  if (!hasMounted) return <Loader />;

  return (
    <>
      <h1 className="pt-2 pb-6 font-bold text-white text-5xl text-center cursor-default">Login</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <fieldset className="flex flex-col gap-y-2">
          <InputValidator required type="text" label="Email" name="email" placeholder="Please enter your email" register={register} errors={errors} />
          <InputValidator required type="password" label="Password" name="password" placeholder="Please enter your password" register={register} errors={errors} />
        </fieldset>

        <div className="text-end">
          <Link className="group text-blue-400 transition-all duration-100 ease-in-out" href="/auth/forget">
            <span className="bg-left-bottom bg-gradient-to-r text-sm from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Forget your password?</span>
          </Link>
        </div>

        <Button type="submit" value="Login"></Button>

        <div className="flex flex-col mt-4 items-center justify-center text-sm">
          <h3 className="text-primary-label">
            Don't have an account?
            <Link href="/signup" className="group text-blue-400 transition-all duration-100 ease-in-out">
              <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">Signup</span>
            </Link>
          </h3>
        </div>
      </form>
    </>
  );
};

export default Login;
