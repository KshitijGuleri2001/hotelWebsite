import React from 'react'
import Nav from '../../Components/Nav'
import Footer from '../../Components/Footer'
const BeachBlog = () => {
  return (
   <>
   <Nav/>
   <div className='w-full h-[90vh]'>
       <img src="https://images.pexels.com/photos/5414576/pexels-photo-5414576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='w-full h-full object-cover ' />
       
          <div className='max-w-[1140px] m-auto'>
            <div  className='absolute  top-[30%] w-full md:-[50%] max-w-[600px] h-full flex flex-col  text-white p-4'>
                <h1 className='font-bold text-8xl'>Locations</h1>
                <h2 className='text-5xl py-4 italic'>Life's a travel!</h2>
                <p className='text-lg'>A beach is not only a sweep of sand but shells of sea creatures, the sea glass, the seaweed, the incongruous objects washed up by the ocean.</p>
            </div>
          </div>
        </div>
<div class="relative flex flex-col items-center mx-auto lg:flex-row-reverse lg:max-w-5xl lg:mt-12 xl:max-w-6xl">

    <div class="w-full h-64 lg:w-1/2 lg:h-auto">
        <img class="h-[500px] w-full object-cover" src="https://images.pexels.com/photos/5238344/pexels-photo-5238344.jpeg" alt="Winding mountain road"/>
    </div>
    <div
        class="max-w-lg bg-white md:max-w-2xl md:z-10 md:shadow-lg md:absolute md:top-0 md:mt-48 lg:w-3/5 lg:left-0 lg:mt-20 lg:ml-20 xl:mt-24 xl:ml-12">
        <div class="flex flex-col p-12 md:px-16">
            <h2 class="text-2xl font-medium uppercase text-blue-400 lg:text-4xl">Locations</h2>
            <p class="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
            <div class="mt-8">
                <a href="#"
                    class="inline-block w-full text-center text-lg font-medium text-gray-100 bg-blue-600 border-solid border-2 border-gray-600 py-4 px-10 hover:bg-blue-800 hover:shadow-md md:w-48">Read
                    More</a>
            </div>
        </div>
    </div>

</div>
<div className='text-center'>
<Footer/>
</div>

   </>
  )
}

export default BeachBlog