import Image from "next/image";
import React from "react";
import CountDown from "./CountDown";

const Offer = () => {
  return (
    // This will follow the same structure as featured items with a container for the image
    // and a container for the text
    <div className="bg-black h-screen flex flex-col md:h-[90vh] md:flex-row md:justify-between bg-[url('/offerBg.jpg')]">
      {/* Text Container */}
      <div className="flex-1 flex flex-col justify-center items-center text-center gap-9 p-5">
        <h1 className="text-white text-4xl font-bold lg:text-5xl">
          Scrumptious Keys and Switches
        </h1>
        <p className="text-white xl:text-xl">
          Elevate your typing experience with the Leopold Mechanical
          Keyboard. Designed for precision and style, it&apos;s the ultimate
          companion for enthusiasts and professionals.
        </p>
        <CountDown />
        <button className="bg-white text-black rounded-md py-3 px-6">
          Buy Now!
        </button>
      </div>

      {/* Image Container */}
      <div className="flex-1 w-full relative md:h-full">
        <Image src="/featured.png" alt="" className="object-contain" fill />
      </div>
    </div>
  );
};

export default Offer;
