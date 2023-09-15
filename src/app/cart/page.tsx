"use client"

import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { useEffect } from "react";

const Cart = () => {
  
  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  return (
    <div className="h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col text-black lg:flex-row">
      {/* This div will contain the products that are in the cart */}
      <div className="h-1/2 p-4 pt-24 sm:pt-0 flex flex-col justify-center overflow-y-scroll lg:h-full lg:w-3/4 2xl:w-1/2 lg:px-20 xl:px-40">
        {/* This will contain a single item */}
        {products.map((product) => (
          <div
            key={product.id}
            className="flex items-center justify-between mb-4"
          >
            {product.image && (
              <Image src={product.image} alt="" width={100} height={100} />
            )}
            <div className="">
              <h1 className="uppercase text-lg font-bold text-center">
                {product.title} ({product.quantity})
              </h1>
              <span className="text-xs flex items-center justify-center">
                {product.optionTitle}
              </span>
            </div>
            <h2 className="pr-5">{product.price}</h2>
            <span className="cursor-pointer" onClick={()=>removeFromCart(product)}>X</span>
          </div>
        ))}
      </div>

      {/* This div will contain the payment*/}
      <div className="flex flex-col gap-4 justify-center h-1/2 p-4 pt-32 sm:pt-5 lg:h-full lg:w-1/2 2xl:w-1/2 lg:px-10 xl:px-40">
        <div className="flex justify-between">
          <span className="">Subtotal ({totalItems} items)</span>
          <span className="">{totalPrice}</span>
        </div>
        <div className="flex justify-between">
          <span className="">Service Cost</span>
          <span className="">$0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="">Delivery Cost</span>
          <span className="text-blue-500">FREE!</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between">
          <span className="">Total Cost</span>
          <span className="font-bold">{totalPrice}</span>
        </div>
        <button className="bg-black text-white p-3 rounded-md w-1/2 self-end">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
