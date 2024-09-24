import React from 'react'
import Nav from './Nav';
import Header from './Header';
 const Home= () =>{
    return(
        <>
        <div className='w-full h-[90vh]'>
       <img src="https://images.pexels.com/photos/2888108/pexels-photo-2888108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full h-full object-cover ' />
       
          <div className='max-w-[1140px] m-auto'>
            <div  className='absolute  top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col  text-white p-4'>
                <h1 className='font-bold text-5xl'> Find you Specail trip</h1>
                <h2 className='text-5xl py-4 italic'>With Weekaway</h2>
                <p className='text-lg'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis repellat error laborum, dolor aut consectetur doloremque quos reprehenderit dolores minima asperiores voluptate sequi ab itaque libero, voluptatum sed, ea nostrum?</p>
            </div>
          </div>
        </div>
        
        </>
    )
      
 }
 export default Home;
 