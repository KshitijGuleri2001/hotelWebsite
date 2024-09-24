import React from 'react'

const Products = () => {
  return (
    <section class="bg-white ">
    <div className="text-center font-bold text-2xl  py-4 bg-gray-100 text-gray-800 shadow-lg font-serif	">
  Activity
</div>
	<div class="py-4 px-8 mx-auto max-w-screen-s lg:px-6 sm:p-6">
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.pexels.com/photos/1392099/pexels-photo-1392099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Treks</h3>
				</a>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4">
					<img src="https://images.pexels.com/photos/10066095/pexels-photo-10066095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Party</h3>
				</a>
				<div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.pexels.com/photos/10066095/pexels-photo-10066095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Camping</h3>
					</a>
					<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40">
						<img src="https://images.pexels.com/photos/19757389/pexels-photo-19757389/free-photo-of-two-people-paragliding.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
						<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
						<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Activites</h3>
					</a>
				</div>
			</div>
			<div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
				<a href="" class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow">
					<img src="https://images.pexels.com/photos/9339635/pexels-photo-9339635.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"/>
					<div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
					<h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">Tools</h3>
				</a>
			</div>
		</div>
	</div>
</section>
  )
}

export default Products