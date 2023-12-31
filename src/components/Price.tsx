"use client";

import { ProdType } from "@/types/types";
import { useCartStore } from "@/utils/store";
import React, { useEffect, useState } from "react";

const Price = ({ product }: { product: ProdType }) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selectedButt, setButt] = useState(0);

  useEffect(() => {
    // console.log("1st", quantity * (options ? price + options[selectedButt].additionalPrice : price))
    // console.log("2nd", options ? price + options[selectedButt].additionalPrice:"Does not exist")
    // console.log("3rd", price)
    // console.log("4rd", options ? options[selectedButt].additionalPrice : "does not exist")

    if (product.options?.length) {
      setTotal(
        quantity * product.price + product.options[selectedButt].additionalPrice
      );
    }
  }, [quantity, selectedButt, product.options, product.price]);

  const {addToCart} = useCartStore()

  useEffect(() => {
    
    useCartStore.persist.rehydrate()
  
  }, [])
  

  const handleCart = () => {
    addToCart({
      id: product.id,
      title: product.title,
      image: product.image,
      price: total,
      ...(product.options?.length && {
        optionTitle: product.options[selectedButt].title,
      }),
      quantity: quantity,
    });
  }

  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-xl font-bold">${total}</h2>
      {/* This is the div for the options */}

      <div className="flex gap-4">
        {product.options?.length &&
          product.options?.map((option, index) => (
            <button
              key={option.title}
              className="p-2 ring-1 ring-black rounded-md hover:"
              style={{
                background: selectedButt === index ? "black" : "white",
                color: selectedButt === index ? "white" : "black",
              }}
              onClick={() => setButt(index)}
            >
              {option.title}
            </button>
          ))}
      </div>

      {/* This is the div for the amount of the product */}

      <div className="flex justify-between items-center">
        {/* The div below is where you type how many you want */}
        <div className="flex justify-between w-full p-2 ring-1 ring-black">
          <span>Quantity...</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((curr) => (curr > 1 ? curr - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((curr) => (curr > 99 ? 99 : curr + 1))}
            >
              {">"}
            </button>
          </div>
        </div>

        {/* This is the add to cart button */}
        <button className="uppercase w-56 bg-black text-white p-2 ring-1 ring-black" onClick={()=>handleCart()}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
