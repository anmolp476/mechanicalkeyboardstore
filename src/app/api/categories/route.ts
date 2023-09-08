// Naming is important here for the file, this is how Next knows this is an API route
// For normal pages its always page.tsx or page.jsx

import prisma from "@/utils/connect";
import { NextResponse } from "next/server";


export const GET = async () => {
  try {
    const categories = await prisma.category.findMany({
    });
    return new NextResponse(JSON.stringify(categories), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new NextResponse(JSON.stringify({ message: "ERROR ERROR ERROR" }), {
      status: 500,
    });
  }
};

export const POST = () => {
  return new NextResponse("Hello", { status: 200 });
};
