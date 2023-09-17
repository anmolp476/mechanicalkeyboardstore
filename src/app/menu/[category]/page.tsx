import { ProdType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  params:{category:string}
}

const getData = async (category:String) => {
  const res = await fetch(`http://localhost:3000/api/products?cat=${category}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("getData Failed");
  }

  return res.json();
};


const CategoryPage = async({params}:Props) => {

  const keyboards:ProdType[] = await getData(params.category)


  return (
    <div className="text-black flex flex-wrap">
      {keyboards.map((keyboard) => (
        <Link
          key={keyboard.id}
          href={`/product/${keyboard.id}`}
          className="group flex flex-col justify-between w-full h-[60vh] p-4 border-r-2 border-b-2 border-black lg:w-1/3 sm:w-1/2"
        >
          {/* This is for the image */}
          {keyboard.image && (
            <div key={keyboard.id + "isoja"} className="relative h-[60%] md:h-[80%]">
              <Image
                src={keyboard.image}
                alt=""
                fill
                className="object-contain"
                key={keyboard.id+"dfd"}
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
