// When you're using any useState, or useEffect or any of those hooks you have to make sure your
// component is a client component
"use client" 


import Link from 'next/link'
import React, { useState } from 'react'
import { BiMenuAltRight } from "react-icons/bi"
import { GrClose } from "react-icons/gr"
import CartIcon from './CartIcon'


const Menu = () => {

    const [toggle, setToggle] = useState(true)

    const toggleMenu = () => {
        setToggle(!toggle)
    }

    const menuArray = 
    [
        {id: 1, label: "Home", link:"/"},
        {id: 2, label: "Keyboards", link:"/menu"},
        {id: 5, label: "Contact Us", link:"/contact"},
    ]

    const isThereUser = false

    return (
      <div>
        {toggle ? (
          <GrClose
            style={{ color: "black", fontSize: "1.4em" }}
            onClick={toggleMenu}
          />
        ) : (
          <BiMenuAltRight
            style={{ color: "black", fontSize: "1.4em" }}
            onClick={toggleMenu}
          />
        )}

        { toggle && (<div className="bg-black text-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex items-center justify-center text-3xl flex-col gap-8 w-full z-10">
          {menuArray.map((menuItem) => (
            <Link href={menuItem.link} key={menuItem.id} onClick={toggleMenu}>
              {menuItem.label}
            </Link>
          ))}

          {!isThereUser ? (
            <Link href="/login" onClick={toggleMenu}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={toggleMenu}>
              Orders
            </Link>
          )}

          <Link href="/cart" onClick={toggleMenu}>
            <CartIcon />
          </Link>
        </div>)}
      </div>
    );
}

export default Menu