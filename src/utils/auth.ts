import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, getServerSession } from "next-auth";
import  GoogleProvider  from "next-auth/providers/google";
import prisma from "./connect";

export const auth:NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID as string,
            clientSecret: process.env.GOOGLE_SECRET as string
        })
    ]
}

//With this function we can get our user and status in server components as well
export const getAuthSession = () => getServerSession(auth)



