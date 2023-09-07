import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Login = () => {
  return (
    <div className="flex items-center justify-center p-4 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)]">
      {/* The entire square */}
      <div className="h-full md:h-[90%] md:w-full shadow-2xl rounded-md flex flex-col md:flex-row lg:w-[80%] 2xl:w-[70%]">
        {/* The image container */}
        <div className="relative h-1/3 w-full md:w-[62%] md:h-full">
          <Image src="/loginP.webp" fill alt="" className="object-cover"/>
        </div>

        {/* The text container */}
        <div className="p-10 flex flex-col gap-8 md:w-[38%]">
          <h1 className="font-bold text-xl lg:text-3xl">Hi there!</h1>
          <p className="">Please login or create an account </p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 rounded-md">
            <Image
              className="object-contain"
              width={20}
              height={20}
              alt=""
              src="/googleLogo.png"
            />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 rounded-md">
            <Image
              className="object-contain"
              width={20}
              height={20}
              alt=""
              src="/facebookLogo.avif"
            />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            <Link href={"/"} className="underline">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}


export default Login

