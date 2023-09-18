"use client";

import CheckoutForm from "@/components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { StripeElementsOptions } from "@stripe/stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

const Payment = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    const request = async () => {
      try {
        const response = await fetch(
          `api/create-intent/${id}`,
          {
            method: "POST",
          }
        );
        const data = await response.json();
        // console.log(data);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.log(error);
      }
    };

    request();
  }, [id]);

  const options: StripeElementsOptions = {
    clientSecret,
  };

  return (
    <div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default Payment;
