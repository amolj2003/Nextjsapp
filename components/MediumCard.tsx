import React from 'react'
import Image from 'next/image'

interface MeduimCardProps {
  img: string;
  title: string;
}

function MediumCard({img,title} :MeduimCardProps) {
  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
        <div className="relative h-80 w-80">
        <h1> hello </h1>
        <Image src={img} layout="fill"  className="rounded-xl" alt="hellos "/>
        </div>
        <h3 className="text-2xl mt-3">{title}</h3>  
    </div> 
  )
}

export default MediumCard
