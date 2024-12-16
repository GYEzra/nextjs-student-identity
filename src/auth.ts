import { IUser } from "@/types/next-auth";
import { BACKEND_URL, sendRequest } from "@/utils/api";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";

const authOptions: NextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        try {
          const res = await sendRequest<IBackendRes<ILogin>>({
            method: "POST",
            url: `${BACKEND_URL}/api/v1/auth/login`,
            body: {
              email: credentials?.email,
              password: credentials?.password,
            },
          });

          if (res.statusCode === 201) {
            return res.data as any;
          } else if (+res.statusCode === 401) {
            throw new Error("Wrong password or email");
          } else if (+res.statusCode === 400) {
            throw new Error("Account not active");
          }
        } catch (error: any) {
          throw new Error(error.message ?? "Internal server error");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) return { ...token, ...user };

      if (new Date() < token.expiresIn) {
        return token;
      }

      return { ...token }; // Handle Refresh Token
    },
    session({ session, token }) {
      session.user = token.user;
      session.access_token = token.access_token;
      session.expiresIn = token.expiresIn;
      return session;
    },
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
