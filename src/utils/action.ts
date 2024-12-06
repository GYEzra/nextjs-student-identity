import { signIn } from "next-auth/react";

export async function authenticate(email: string, password: string) {
  const response = await signIn("credentials", {
    email,
    password,
    redirect: false,
  });

  return response;
}
