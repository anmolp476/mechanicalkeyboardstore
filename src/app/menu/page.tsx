// import { keyboards } from "@/data";
import { MenuType } from "@/types/types";
import Link from "next/link";
import React from "react";

const getData = async() =>{
  const res = await fetch("api/categories", {
    cache:"no-store"
  })

  if(!res.ok){
    throw new Error("getData Failed");
  }

  return res.json()
}

const KeyboardsPage = async() => {

  const keyboards:MenuType = await getData()

  return (
    <div className="flex flex-col justify-center gap-4 items-center lg:px-20 xl:px-40 pt-12 h-[84vh] md:h-[calc(100vh - 9rem)]">
      {keyboards.map((keyboard) => (
        <Link
          href={"menu/" + keyboard.slug}
          key={keyboard.id}
          style={{ backgroundImage: `url(${keyboard.image})` }}
          className="w-full h-1/3 bg-cover p-8"
        >
          <div className="text-white w-1/2">
            <h1 className="font-bold uppercase text-3xl">{keyboard.title}</h1>
            <p className="text-sm flex flex-row w-screen">{keyboard.desc}</p>
            <button className="hidden xl:block bg-white text-black px-4 py-2 rounded-md">Explore</button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default KeyboardsPage;
