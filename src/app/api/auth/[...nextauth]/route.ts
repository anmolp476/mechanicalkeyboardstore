import { auth } from "@/utils/auth";
import NextAuth from "next-auth/next";

const reqHandler = NextAuth(auth)


export {reqHandler as GET, reqHandler as POST}





