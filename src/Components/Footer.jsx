import React from 'react'
import { BsInstagram } from 'react-icons/bs';
import { FiTwitter } from 'react-icons/fi';
import {FiFacebook  } from 'react-icons/fi';
import {AiOutlineYoutube  } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <div className=' py-8 mt-11 bg-black/80'>
      <div className='flex md:flex-row gap-16 text-center justify-center mt-11 text-white'>
        <BsInstagram size={20} />
        <FiTwitter size={20}/>
        <FiFacebook size={20}/>
        <AiOutlineYoutube size={20}/>
       
      </div>
      <div className='container mx-auto text-white'>
  <ul className='flex flex-col md:flex-row md:gap-9 text-center md:justify-center mt-11'>
<Link to="/">    <li className='font-bold text-2xl'>Home</li></Link>
    <li className='font-bold text-2xl'>Services</li>
    <li className='font-bold text-2xl'>About</li>
    <li className='font-bold text-2xl'>Blog</li>
  </ul>
</div>

      <div>
      <hr className='text-white mt-4'/>
      <p className='mt-2 text-white text-s'> Copyright @ 2024 / developer - Kshitij Guleri</p>
      </div>

    </div>
    </footer>
    
  )
}

export default Footer