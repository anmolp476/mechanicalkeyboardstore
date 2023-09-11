"use client";

import React from "react";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";
import { useCartStore } from "@/utils/store";

const CartIcon = () => {

  const { products, totalItems, totalPrice, removeFromCart } = useCartStore();

  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative w-8 h-8 md:w-5 md:h-5">
        <FiShoppingCart
          style={{ width: "100%", height: "100%" }}
        ></FiShoppingCart>
      </div>
      <span>Cart ({totalItems})</span>
    </Link>
  );
};

export default CartIcon;
