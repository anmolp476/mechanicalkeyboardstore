import FeaturedItems from '@/components/FeaturedItems'
import Slider from '@/components/Slider'
import Offer from '@/components/Offer'
import React from 'react'

export const runtime = "edge"

export default function Home(){

    return (
        <main>
            <Slider/>
            <FeaturedItems/>
            <Offer/>
        </main>
    )
    
}









