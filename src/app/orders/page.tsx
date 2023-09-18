"use client";

import { OrderType } from "@/types/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Orders = () => {
  const { data: session, status } = useSession();

  const router = useRouter();

  if (status == "unauthenticated") {
    router.push("/");
  }

  const { isLoading, error, data } = useQuery({
    queryKey: ["orders"],
    queryFn: () =>
      fetch("http://127.0.0.1:3000/api/orders").then((res) => res.json()),
  });

  const queryClient = useQueryClient();

  const changeOrder = useMutation({
    mutationFn: ({ id, status }: { id: String; status: string }) => {
      return fetch(`http://127.0.0.1:3000/api/orders/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(status),
      });
    },

    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });

  const handleUpdate = (e: React.FormEvent<HTMLFormElement>, id: string) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const input = form.elements[0] as HTMLInputElement;

    const status = input.value;

    changeOrder.mutate({ id, status });
  };

  if (isLoading || status === "loading") {
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
              <td className="hidden md:block py-6 px-1">{item.id}</td>
              <td className="py-6 px-1">
                {item.createdAt.toString().slice(0, 10)}
              </td>
              <td className="py-6 px-1">{item.price}</td>
              <td className="hidden md:block py-6 px-1">
                {item.products[0].title}
              </td>
              {session?.user.isAdmin ? (
                <td>
                  <form
                    onSubmit={(e) => handleUpdate(e, item.id)}
                    action=""
                    className="flex items-center justify-center gap-4"
                  >
                    <input
                      placeholder={item.status}
                      className="p-2 ring-1 ring-green-100 rounded-md"
                    ></input>

                    <button className="p-2 rounded-full">
                      <Image src="/editImg.png" alt="" width={20} height={20} />
                    </button>
                  </form>
                </td>
              ) : (
                <td className="py-6 px-1">{item.status}</td>
              )}
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
