import { signIn, SignInResponse } from "next-auth/react";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { ISignUpRes, IVerifyRes } from "@/types/api";
import { LoginData, RegisterData, VerifyAccountData } from "@/types/auth";

export async function authenticate(data: LoginData): Promise<SignInResponse | undefined> {
  const response = await signIn("credentials", {
    ...data,
    redirect: false,
  });

  return response;
}

export const signUp = async (data: RegisterData): Promise<ISignUpRes> => {
  const response = await sendRequest<IBackendRes<ISignUpRes>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/auth/register`,
    body: data,
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};

export const checkCode = async (data: VerifyAccountData): Promise<IVerifyRes> => {
  const response = await sendRequest<IBackendRes<IVerifyRes>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/auth/check-code`,
    body: data,
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};
