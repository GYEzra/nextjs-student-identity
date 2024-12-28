import { ResponseData } from "@/types/api";
import { signIn } from "next-auth/react";
import { RegisterFormValue } from "./schemas";
import { sendRequest } from "@/utils/api";

export async function authenticate(email: string, password: string) {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  return response;
}

export const signUp = async (data: RegisterFormValue): Promise<ResponseData<{ _id: string }>> => {
  const response = await sendRequest<IBackendRes<{ _id: string }>>({
    method: "POST",
    url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/register`,
    body: {
      ...data,
      accountType: data.accountType.toUpperCase(),
    },
  });

  if (response.statusCode === 201) return { EC: 0, data: response.data };
  return { EC: -1, error: response.message };
};
