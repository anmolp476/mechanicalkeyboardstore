// Naming is important here for the file, this is how Next knows this is an API route
// For normal pages its always page.tsx or page.jsx

import Orders from "@/app/orders/page";
import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async () => {
  const session = await getAuthSession();
  if (session) {
    try {
      if (session.user.isAdmin) {
        const orders = prisma.order.findMany();
        return new NextResponse(JSON.stringify(orders), {
          status: 200,
        });
      }
      const orders = prisma.order.findMany({
        where: { userEmail: session.user.email! },
      });
      return new NextResponse(JSON.stringify(orders), {
        status: 200,
      });
    } catch (err) {
      console.log(err);
      return new NextResponse(
        JSON.stringify({ message: "ERROR ERROR ERROR" }),
        {
          status: 500,
        }
      );
    }
  } else {
    return new NextResponse(
      JSON.stringify({ message: "ERROR ERROR ERROR NOT AUTHENTICATED" }),
      {
        status: 401,
      }
    );
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};