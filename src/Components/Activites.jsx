import React from 'react'
import { Link } from 'react-router-dom'
const Activites = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
        <div className='relative p-4 hover:scale-125 transition-all duration-500 cursor-pointer'>
        <Link to="/mountains">  <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white font-bold'>Treks</h3> </Link>
            <img src="https://images.pexels.com/photos/914128/pexels-photo-914128.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"  className=' w-full h-full relative border-4 border-white shadow-lg'/>
        </div>
 <div className='relative p-4 hover:scale-125 transition-all duration-500 cursor-pointer'>
<Link to="/hotels"><h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white font-bold'>Hotels</h3> </Link>
            <img src="https://images.pexels.com/photos/939715/pexels-photo-939715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" className=' w-full h-full relative border-4 border-white shadow-lg' />
        </div>
        <div className='relative p-4 hover:scale-125 transition-all duration-500 cursor-pointer'>
     <Link to="/beach-blog">       <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-3xl text-white font-bold'>Locations</h3> </Link>
            <img src="https://images.pexels.com/photos/5205097/pexels-photo-5205097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/"  className=' w-full h-full relative border-4 border-white shadow-lg'/>
        </div>
    </div>
  )
}

export default Activites