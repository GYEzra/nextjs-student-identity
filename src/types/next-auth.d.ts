import NextAuth, { DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt";

interface IUser {
  _id?: string;
  name?: string;
  email?: string;
  accountType: string;
  image?: string;
  walletAddress?: string;
}
declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
    access_token: string;
    expiresIn: Date;
  }
}

declare module "next-auth" {
  export interface User extends IUser {}

  interface Session {
    user: IUser;
    access_token: string;
    expiresIn: Date;
  }
}
