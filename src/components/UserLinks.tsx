"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const UserLinks = () => {
  const { data, status } = useSession();

  return (
    <div>
      {status === "authenticated" ? (
        <div className="">
          <Link href="/orders">Orders</Link>
          <span className="cursor-pointer ml-4" onClick={()=>signOut()}>Logout</span>
        </div>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </div>
  );
};

export default UserLinks;
