"use client"


import React, { useEffect } from 'react'

const Payment = ({params} : {params:{id:string}}) => {

  const id = params.id

  


  useEffect(() => {
    const req = async () => {
      try {
        const response = await fetch(`http://localhost:3000/api/create-intent/${id}`, {
          method: "POST",

        })
        const data = await response.json()
      } catch (error) {
        console.log(error)
      }
    }

    req()
  }, [id])
  

  return (
    <div>page</div>
  )
}

export default Payment  