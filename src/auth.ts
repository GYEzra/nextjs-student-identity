import { IUser } from "@/types/next-auth";
import { sendRequest } from "@/utils/api";
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
        const res = await sendRequest<IBackendRes<ILogin>>({
          method: "POST",
          url: `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/login`,
          body: {
            email: credentials?.email,
            password: credentials?.password,
          },
        });

        if (res.statusCode === 201) {
          const { user, access_token } = res.data!;

          return {
            _id: user?._id,
            name: user?.name,
            email: user?.email,
            image: user?.image,
            accountType: user.accountType,
            access_token,
          } as any;
        } else if (+res.statusCode === 401) {
          throw new Error("Wrong password or email");
        } else if (+res.statusCode === 400) {
          throw new Error("Account not active");
        } else {
          throw new Error("Internal server error");
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.user = user as IUser;
      }
      return token;
    },
    session({ session, token }) {
      session.user = token.user;
      return session;
    },
  },
};

const getSession = () => getServerSession(authOptions);

export { authOptions, getSession };
