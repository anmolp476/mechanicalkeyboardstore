"use client"

import Image from "next/image";
import React, { useEffect, useState } from "react";

const Slider = () => {

  const [image, setImage] = useState(0)
  

  const sliderItems = [
    {
      id: 1,
      title: "Crafted With Precision & Accuracy",
      image: "/slide1_upscaled.webp",
    },
    {
      id: 2,
      title: "Fast Shipping to Your Doorstep Nationwide",
      image: "/slide2_upscaled.jpeg",
    },
    {
      id: 3,
      title: "Elevate Your Typing Experience",
      image: "/slide3_upscaled.jpg",
    },
  ];

  // useEffect(() => {
  //   const timeInterval = setInterval(
  //     () => setImage((prev) => (prev === sliderItems.length-1 ? 0 : prev + 1)),
  //     2000
  //   );

  //   return () => clearInterval(timeInterval);
  // }, []);

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* Text container */}
      <div className="h-1/2 flex justify-center items-center flex-col gap-8 text-black font-bold lg:h-full lg:w-1/2 lg:p-10">
        <h1 className="text-2xl text-center uppercase p-4 md:text-4xl xl:text-7xl">
          {sliderItems[image].title}
        </h1>
        <button className="bg-black text-white py-4 px-8">Order Now!</button>
      </div>
      {/* Image container */}
      <div className="h-1/2 relative w-full lg:w-1/2 lg:h-full">
        <Image
          src={sliderItems[image].image}
          alt=""
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
