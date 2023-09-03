import Image from 'next/image'
import React from 'react'

const FeaturedItems = () => {
  return (
    <div className="w-screen overflow-x-scroll text-black">
      {/* This will be the wrapper for the second slider */}
      <div className="w-max flex">
        {/* This will be one item */}
        <div className="w-screen h-[60vh] flex flex-col justify-around items-center p-4">
          {/* This is the div for the image */}
          <div className="relative flex-1 w-full border-b-black">
            <Image src="/keyboard_1.jpg" alt="" fill className="object-contain"/>
          </div>
          {/* This is the div for the text, or everything below the image */}
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-xl font-bold uppercase">Title</h1>
            <p className="">Description</p>
            <span className="text-xl font-bold">$45.99</span>
            <button className="bg-black text-white p-2 rounded-md">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedItems