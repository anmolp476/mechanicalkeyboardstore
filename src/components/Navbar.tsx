import React from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import UserLinks from "./UserLinks";

const Navbar = () => {
  const user = false;

  return (
    <div className=" lg:px-20 xl:pg-40 h-12 text-black uppercase flex justify-between items-center p-4 border-b-2 border-b-black md:h-24">
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Keyboards</Link>
        {/* <Link href="/">Contact</Link> */}
      </div>

      {/* { This is for the logo } */}

      <div className="text-xl flex-1 md:text-center md:font-bold">
        <Link href="/">MechMarket</Link>
      </div>

      {/* { This is for the mobile-version of the menu } */}
      <div className="md:hidden">
        <Menu></Menu>
      </div>

      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <UserLinks/>
        <CartIcon></CartIcon>
      </div>
    </div>
  );
};

export default Navbar;
