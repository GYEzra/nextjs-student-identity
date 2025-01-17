import { BACKEND_URL, sendRequest } from "@/utils/api";
import type { NextAuthOptions, Session } from "next-auth";
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
          } else {
            throw new Error("Internal server error");
          }
        } catch (error: any) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  callbacks: {
    jwt({ token, user, trigger, session }) {
      if (user) return { ...token, ...user };
      const jwtSession = session as Session;

      if (trigger === "update") {
        if (jwtSession?.user?.name) {
          token.user.name = session.user.name;
        }

        if (jwtSession?.user?.image) token.user.image = session.user.image;
      }

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

const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};

const getAuthSession = () => getServerSession(authOptions);

export { authOptions, getAuthSession, reloadSession };
