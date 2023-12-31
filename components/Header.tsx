import React from 'react'
import Image from 'next/image'

import { useState } from 'react';


function Header() {

  const [searchInput, setSearchInput] = useState("");
  console.log(searchInput); 

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10">
     <div className="relative flex items-center h-10 cursor-pointer my-auto">
       <Image src="https://links.papareact.com/qd3"
       layout="fill"
       objectFit="contain"
       objectPosition="left"
       alt="Picture of the author"/>
     </div>

     <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
         value={searchInput}
         onChange={(e)=>setSearchInput(e.target.value)}
         className=" flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400" type="text" placeholder="start your search" />
         <Image src="/search.png"
            width={35}
            height={35}
            alt="Picture of the author"
            className="hidden md:inline-flex h-8 text-white rounded-full   cursor-pointer md:mx-2"/>
       {/*<SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" /> */} 
     </div>
     
     <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer "> Become a host </p>
        <Image src="/globe.png"
            width={30}
            height={5}
            alt="Picture of the author"
            className="hidden md:inline-flex h-7 text-white rounded-full p-1 cursor-pointer md:mx-2"/>
       {/* <GlobeAltIcon className="h-6"/>*/}
      <div className="flex  items-center space-x-2 border-2 p-2 rounded-full">
      <Image src="/more.png"
            width={30}
            height={30}
            alt="Picture of the author"
            className="hidden md:inline-flex h-7 text-white rounded-full  cursor-pointer md:mx-2"/>
       {/*<MenuIcon className="h-6"/>*/}
        <Image src="/user.png"
            width={30}
            height={5}
            alt="Picture of the author"
            
            className="h-6"/>
      
       {/*<UserCircleIcon className="h-6"/>*/}
      </div>

     </div>
    </header>
  )
}

export default Header
