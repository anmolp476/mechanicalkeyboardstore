import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="h-12 md:h-24 lg:p-20 xl:p-40 p-4 md:px-24 text-black flex justify-between items-center">
      <Link href="/" className="font-bold text-l">
        MechMarket
      </Link>
      <p>Made With ❤️ By Anmol</p>
    </div>
  );
};

export default Footer;
