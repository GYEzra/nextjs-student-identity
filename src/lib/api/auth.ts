import { ForgetPasswordData, LoginData, RegisterData, VerifyAccountData } from "@/types/schemas";
import { IMessageResponse, ISignUpRes, IVerifyRes } from "@/types/response";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import { signIn, SignInResponse } from "next-auth/react";

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

export const sendRetryPassword = async (email: string): Promise<IMessageResponse> => {
  const response = await sendRequest<IBackendRes<IMessageResponse>>({
    method: "GET",
    url: `${BACKEND_URL}/api/v1/auth/retry-password/${email}`,
  });

  if (response.statusCode === 200) return response.data!;
  throw new Error(response.message);
};

export const changePassword = async (data: ForgetPasswordData): Promise<IMessageResponse> => {
  const response = await sendRequest<IBackendRes<IMessageResponse>>({
    method: "POST",
    url: `${BACKEND_URL}/api/v1/auth/change-password`,
    body: data,
  });

  if (response.statusCode === 201) return response.data!;
  throw new Error(response.message);
};
