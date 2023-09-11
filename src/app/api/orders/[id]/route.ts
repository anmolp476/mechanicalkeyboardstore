import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    const request = await req.json();

    await prisma.order.update({
      where: {
        id: id,
      },

      data: { status: request },
    });

    return new NextResponse(
      JSON.stringify({ message: "Order sucessfully updated" }),
      { status: 200 }
    );
  } catch (err) {
    console.log(err);

    return new NextResponse(
      JSON.stringify({ message: "Something went wrong, orders/[id]/route.ts" }),
      { status: 500 }
    );
  }
};
