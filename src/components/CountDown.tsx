"use client"
import React from 'react'
import Countdown from 'react-countdown'

const offerEndDate = new Date("2023-11-15")

const CountDown = () => {
  return (
    <div>
        <Countdown date={offerEndDate} className="font-bold text-4xl text-[rgb(236,217,139)]"/>
    </div>
  )
}

export default CountDown