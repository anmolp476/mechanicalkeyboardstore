// Naming is important here for the file, this is how Next knows this is an API route
// For normal pages its always page.tsx or page.jsx

import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient

export const GET = async () => {
  try {

    const categories = await prisma.category.findMany()
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
