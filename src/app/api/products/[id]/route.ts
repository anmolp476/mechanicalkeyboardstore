import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const singleProd = await prisma.product.findUnique({
      where: {
        id: id,
      },
    });

    return new NextResponse(JSON.stringify(singleProd), { status: 200 });
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong, orders/[id]/route.ts" }),
      { status: 500 }
    );
  }
};
