import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from "./CartIcon"

const Navbar = () => {

  const user = false

  return (
    <div className="h-12 text-black uppercase flex justify-between items-center p-4 border-b-2 border-b-black">
      <div className="hidden md:flex gap-4">
        <Link href="/">Home</Link>
        <Link href="/menu">Keyboards</Link>
        <Link href="/">Contact</Link>
      </div>

      {/* { This is for the logo } */}

      <div className="text-xl">
        <Link href="/">MechMarket</Link>
      </div>

      {/* { This is for the mobile-version of the menu } */}
      <div className="md:hidden">
        <Menu></Menu>
      </div>


      <div className="hidden md:flex gap-4 items-center">
        {!user ? (<Link href="/login">Login</Link>) : (<Link href="/orders">Orders</Link>)}
        <CartIcon></CartIcon>
      </div>
    </div>
  );
}

export default Navbar