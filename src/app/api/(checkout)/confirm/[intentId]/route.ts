import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const PUT = async (
  req: NextRequest,
  { params }: { params: { intentId: string } }
) => {
  const intentId = params.intentId;

  try {
    await prisma.order.update({
      where: {
        intent_id: intentId,
      },
      data: { status: "On the way!" },
    });
    return new NextResponse(
      JSON.stringify({ message: "The order has been completed!!" }),
      { status: 200 }
    );


  } catch (error) {
    console.log(error);
    return new NextResponse(
      JSON.stringify({ message: "ERROR ERROR CONFIRM ERROR" }),
      { status: 500 }
    );
  }
};
