import React from 'react'
import Link from "next/link"
import { FiShoppingCart } from "react-icons/fi"

const CartIcon = () => {
  return (
    <Link href="/orders" className="flex items-center gap-4">
        <div className="relative w-8 h-8 md:w-5 md:h-5">
            <FiShoppingCart style={{width: "100%", height:"100%"}}></FiShoppingCart>
        </div>
        <span>Cart (3)</span>
    </Link>
  )
}

export default CartIcon