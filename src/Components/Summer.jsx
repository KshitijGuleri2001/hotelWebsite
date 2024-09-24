import { FaBriefcase, FaBlogger, FaShoppingCart, FaRocket, FaBuilding, FaHeartbeat, FaLaptop, FaLifeRing } from 'react-icons/fa';
import { motion } from 'framer-motion';

const services = [
  { icon: FaBriefcase, color: 'text-green-500', label: 'portfolio' },
  { icon: FaBlogger, color: 'text-blue-500', label: 'blog' },
  { icon: FaShoppingCart, color: 'text-red-500', label: 'ecommerce' },
  { icon: FaRocket, color: 'text-yellow-500', label: 'startup' },
  { icon: FaBuilding, color: 'text-purple-500', label: 'business' },
  { icon: FaHeartbeat, color: 'text-pink-500', label: 'lifestyle' },
  { icon: FaLaptop, color: 'text-indigo-500', label: 'landing pages' },
  { icon: FaLifeRing, color: 'text-teal-500', label: 'health' }
];

const Services = () => {
  return (
    <div className="bg-white ">
<div className="text-center font-bold text-2xl  py-4 bg-gray-100 text-gray-800 shadow-lg font-serif	">
  Services
</div>


      <div className="container relative z-40 mx-auto mt-4 p-6">
        <div className="flex flex-wrap justify-center mx-auto lg:w-full md:w-5/6 xl:shadow-small-blue">
          {services.map((service, index) => (
            <motion.a 
              href="#"
              key={index}
              className="block w-1/2 py-10 text-center border lg:w-1/4"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <div>
                <service.icon className={`block mx-auto text-6xl ${service.color}`} />
                <p className="pt-4 text-sm font-medium capitalize text-gray-700 lg:text-lg md:text-base md:pt-6">
                  {service.label}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
