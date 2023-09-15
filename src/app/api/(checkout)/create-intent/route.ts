import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export const POST = async ({ params }: { params: { id: string } }) => {
  const theId = params.id;

  const order = await prisma.order.findUnique({
    where: {
      id: theId,
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
        where:{
            id:theId
        },
        data:{intent_id:paymentIntent.id}
    })

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
