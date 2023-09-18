"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Success = () => {
  const params = useSearchParams();
  const paymentIntent = params.get("payment_intent");
  const router = useRouter();

  useEffect(() => {
    const request = async () => {
      try {
        await fetch(`api/confirm${paymentIntent}`, {
          method: "PUT",
        });
        router.push("/orders")
      } catch (error) {
        console.log(error);
      }
    };

    request()
  }, [paymentIntent, router]);

  return <div>Payment successful, please do not close the page!!</div>;
};

export default Success;
