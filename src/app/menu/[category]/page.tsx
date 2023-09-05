import { featuredProducts, keyboards } from "@/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryPage = () => {
  return (
    <div className="text-black flex flex-wrap">
      {featuredProducts.map((keyboard) => (
        <Link
          href={`product/${keyboard.id}`}
          className="group flex flex-col justify-between w-full h-[60vh] p-4 border-r-2 border-b-2 border-black lg:w-1/3 sm:w-1/2"
        >
          {/* This is for the image */}
          {keyboard.image && (
            <div className="relative h-[60%] md:h-[80%]">
              <Image
                src={keyboard.image}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          )}

          {/* This is for the text */}
          <div className="flex items-center text-center md:text-left gap-2 justify-between font-bold flex-col md:flex-row">
            <h1 className="text-xl uppercase p-2">{keyboard.title}</h1>
            <h2 className="group-hover:hidden text-xl">{"$" + keyboard.price}</h2>
            <button className="group-hover:block uppercase bg-black text-white p-2 rounded-md hidden">Add to Cart</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategoryPage;
