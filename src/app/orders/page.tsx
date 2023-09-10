"use client";

import { OrderType } from "@/types/types";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";
 
const Orders = () => {



  const {data:session, status} = useSession()

  const router = useRouter()

  if(status=="unauthenticated"){
    router.push("/")
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://localhost:3000/api/orders").then((res) =>
        res.json()
      ),
  });

  if(isLoading || status==="loading"){
    return "Loading...";
  }

  return (
    <div className="p-4 lg:px-20 xl:px-40">
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left">
            <th className="hidden md:block">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:block">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {console.log(data)}
          {data.map((item: OrderType) => (
            <tr className="text-sm md:text-base bg-green-100" key={item.id}>
              <td className="hidden md:block py-6 px-1">14378382910</td>
              <td className="py-6 px-1">06/09/2023</td>
              <td className="py-6 px-1">149.99</td>
              <td className="hidden md:block py-6 px-1">Leopold FC900R (1)</td>
              <td className="py-6 px-1">Delivered!</td>
            </tr>
          ))}
          {/* <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">14378382910</td>
            <td className="py-6 px-1">06/09/2023</td>
            <td className="py-6 px-1">149.99</td>
            <td className="hidden md:block py-6 px-1">Leopold FC900R (1)</td>
            <td className="py-6 px-1">Arriving soon(approx. 1 hr)</td>
          </tr>
          <tr className="text-sm md:text-base odd:bg-gray-100">
            <td className="hidden md:block py-6 px-1">14378382910</td>
            <td className="py-6 px-1">06/09/2023</td>
            <td className="py-6 px-1">149.99</td>
            <td className="hidden md:block py-6 px-1">Leopold FC900R (1)</td>
            <td className="py-6 px-1">Arriving soon(approx. 1 hr)</td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default Orders;
