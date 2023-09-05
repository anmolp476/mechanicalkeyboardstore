import Price from "@/components/Price";
import { singleProduct } from "@/data";
import Image from "next/image";
import React from "react";

const ProductPage = () => {
  return (
    <div className="md:gap-8 lg:px-20 xl:px-40 p-4 h-screen gap-4 flex flex-col md:items-center justify-around text-black md:flex-row ">
      {/* Another img div */}
      {singleProduct.image && (
        <div className="relative w-full h-1/6 sm:h-1/2">
          <Image
            src={singleProduct.image}
            alt=""
            className="object-contain"
            fill
          />
        </div>
      )}
      {/* Another text div */}
      <div className="h-1/2 flex flex-col gap-4 mb-16 md:mb-0 ml-0 sm:ml-5 md:justify-center md:gap-4 xl:gap-6">
        <h1 className="text-2xl font-bold uppercase">{singleProduct.title}</h1>
        <p>{singleProduct.desc}</p>
        <Price
          id={singleProduct.id}
          price={singleProduct.price}
          options={singleProduct.options}
        />
      </div>
    </div>
  );
};

export default ProductPage;
