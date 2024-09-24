import React from 'react'
import {AiFillPhone,AiOutlineClockCircle} from "react-icons/ai"
import {BsChatSquareDots} from "react-icons//bs"
import { Link } from 'react-router-dom'
const Nav = () => {
  return (
    <>
    <div className='flex justify-between items-center px-4 py-2'>
      <div className='flex item-center'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)]mr-2'/>
      <Link to='/'><h1  className='text-xl font-bold text-gray-700'>YOTRIP</h1></Link>  
      </div>
      <div className='flex'>
      <div className='hidden md:flex items-center px-6'>
        <AiOutlineClockCircle e size={20} className="mr-2 text-[var(--primary-dark)]"/>
      <p className='text-sm text-gary-700'>24hours</p>
      </div>
      <div className='hidden md:flex items-center px-6'> 
        <AiFillPhone/>
      <p className='text-sm text-gary-700'> 1--39293--3234</p>
      </div>
      <div class="relative flex items-center group">
    <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
    </svg>
    <div class="absolute right-0  items-center hidden ml-6 group-hover:flex">
        <div class="w-3 h-3 -mr-2 rotate-45 bg-black"></div>
        <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
          Welcome
        </span>
    </div>
</div>
      </div>
    </div>


    </>
  )
}

export default Nav