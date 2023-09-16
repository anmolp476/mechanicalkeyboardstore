import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async ({ params }: { params: { theOrder: string } }) => {
  console.log(params);
  const { theOrder } = params; // Here is the problem :(

  const order = await prisma.order.findUnique({
    where: {
      id: theOrder,
    },
  });

  if (order) {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100 * 100, // By default the price is 1 cent, so multiplying by 100 gives a 100 dollars
      currency: "cad",
      automatic_payment_methods: {
        enabled: true,
      },
    });

    await prisma.order.update({
      where: {
        id: theOrder,
      },
      data: { intent_id: paymentIntent.id },
    });

    return new NextResponse(
      JSON.stringify({ clientSecret: paymentIntent.client_secret }),
      {
        status: 200,
      }
    );
  } else {
    return new NextResponse(JSON.stringify({ message: "ERROR STRIPE ERROR" }), {
      status: 404,
    });
  }
};

export const GET = async ({ params }: { params: { orderId: string } }) => {
  console.log(params);
  return new NextResponse(JSON.stringify(params), {
    status: 200,
  });
};
