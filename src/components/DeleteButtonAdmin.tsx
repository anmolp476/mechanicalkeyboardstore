"use client"

import React from 'react'
import { useSession } from "next-auth/react"
import { useRouter } from 'next/router'

const DeleteButtonAdmin = () => {


    const{data:session, status} = useSession()
    const router = useRouter()

    if(status=="loading"){
        return(<p>Loading...</p>)
    }

    if (status == "unauthenticated" || !session?.user.isAdmin) {
      return null
    }

    return (
        <button className="bg-black p-2 text-white rounded-full absolute top-4 right-4">Delete</button>
    )
}

export default DeleteButtonAdmin