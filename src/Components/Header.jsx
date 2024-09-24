import React, { useState, useEffect } from "react";
import { BsChatSquareDots } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaInstagram,
  FaBars,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const Header = () => {
  const [header, setHeader] = useState(false);
  const handleHeader =()=>{
    setHeader(!header)
  }
  return (
    <div className="w-full flex min-h-[50px] justify-between items-center absolute z-10 text-white bg-gray-700/80">
    
      <ul className="hidden sm:flex px-4">
        <li>
          <a href="/">Home</a>
        </li>
       
        <li>
        <Link to="/gallaryPage"><div>Gallery </div></Link>
        </li>
     
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className=" px-3 flex justify-between">
      <div className=" flex justify-between">
        <FaFacebookF className="mx-4 " />
        <FaTwitter className="mx-4 " />
        <FaGooglePlusG className="mx-4 " />
        <FaInstagram className="mx-4 " />
      </div>
      {/* hamberger */}
      
      </div>
      <div onClick={handleHeader} className="sm:hidden z-10">
        <FaBars size={20} className="mr-4 cursor-pointer" />
      </div>
      <div onClick={handleHeader}
       className={header ?
    " overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col" :
    "absolute top-0 h-screen left-[-100%] ease-in duration-500"
        }
      >
        <ul className="h-full w-full text-center pt-12">
          <li className="text-2xl py-8">
            <a href="/">Home</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#gallery">Gallery</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#deals">Deals</a>
          </li>
          <li className="text-2xl py-8">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
