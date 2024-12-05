import { signIn } from "next-auth/react";

export async function authenticate(email: string, password: string) {
  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    return response;
  } catch (error) {
    console.error("Failed to sign in:", error);
    throw error;
  }
}
