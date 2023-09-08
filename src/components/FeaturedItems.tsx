import { featuredProducts } from "@/data";
import { ProdType } from "@/types/types";
import Image from "next/image";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("getData Failed");
  }

  return res.json();
};


const FeaturedItems = async() => {

  const featuredProducts:ProdType[] = await getData()
  
  return (
    <div className="w-full overflow-x-scroll text-black pt-8 ">
      {/* This will be the wrapper for the second slider */}
      <div className="w-max flex">
        {/* This will be one item */}
        {featuredProducts.map((product) => (
          <div
            key={product.id}
            className="w-screen h-[70vh] flex flex-col justify-around items-center p-4 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* This is the div for the image */}
            {product.image && (
              <div className="relative flex-1 w-full border-b-black hover:animate-bounce">
                <Image
                  src={product.image}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>
            )}
            {/* This is the div for the text, or everything below the image */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center">
              <h1 className="text-xl font-bold uppercase items-center text-center">
                {product.title}
              </h1>
              {product.desc && (
                <p className="p-4 text-sm text-center md:text-lg lg:text-xl mt-[-2em] sm:mt-0">
                  {product.desc}
                </p>
              )}
              <div className="flex justify-around flex-col items-center sm:flex-row w-full">
                <span className="text-xl font-bold">${product.price}</span>
                <button className="bg-black text-white p-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedItems;
