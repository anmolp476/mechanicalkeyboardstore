import DeleteButtonAdmin from "@/components/DeleteButtonAdmin";
import Price from "@/components/Price";
import { singleProduct } from "@/data";
import { ProdType } from "@/types/types";
import Image from "next/image";
import React from "react";



const getData = async (id: String) => {
  const res = await fetch(
    `http://localhost:3000/api/products/${id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("getData Failed");
  }

  return res.json();
};


const ProductPage = async({params}:{params:{id:string}}) => {

  const singleProd : ProdType = await getData(params.id)

  return (
    <div className="relative md:gap-8 lg:px-20 xl:px-40 p-4 h-screen gap-4 flex flex-col md:items-center justify-around text-black md:flex-row ">
      {/* Another img div */}
      {singleProd.image && (
        <div className="relative w-full h-1/6 sm:h-1/2">
          <Image
            src={singleProd.image}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* Another text div */}
      <div className="h-1/2 flex flex-col gap-4 mb-16 md:mb-0 ml-0 sm:ml-5 md:justify-center md:gap-4 xl:gap-6">
        <h1 className="text-2xl font-bold uppercase">{singleProd.title}</h1>
        <p>{singleProd.desc}</p>
        <Price
          product={singleProd}
        />
      </div>
      <DeleteButtonAdmin id={singleProd.id}/>
    </div>
  );
};

export default ProductPage;
