import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-1 md:h-24 lg:px-20 xl:px-20 p-4 md:px-24 text-black flex justify-between items-center mt-12 sm:mt-0">
      <Link href="/" className="font-bold text-l">
        MechMarket
      </Link>
      <p>Made With ❤️ By Anmol</p>
    </div>
  );
};

export default Footer;
