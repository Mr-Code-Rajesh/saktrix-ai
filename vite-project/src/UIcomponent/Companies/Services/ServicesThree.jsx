import { motion } from 'framer-motion';
import { FaDollarSign, FaBullhorn, FaChartBar, FaLightbulb } from 'react-icons/fa';

const StartupServicesComponent = () => {
  const servicesthree = [
    { icon: <FaDollarSign />, title: 'Funding', description: 'Get the capital needed to grow' },
    { icon: <FaBullhorn />, title: 'Marketing', description: 'Build your brand and reach new customers' },
    { icon: <FaChartBar />, title: 'Growth Strategy', description: 'Plan your way to success with data-driven strategies' },
    { icon: <FaLightbulb />, title: 'Innovation', description: 'Create unique solutions that disrupt the market' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-500 to-red-600 p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesthree.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }} // Scale effect on hover for the entire card
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-yellow-500 dark:text-yellow-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on hover for the icon
              >
                {service.icon}
              </motion.div>
            </div>
            <motion.h3
              className="text-xl font-semibold text-center text-gray-900 dark:text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 dark:text-gray-300 mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              {service.description}
            </motion.p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-yellow-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#f6ad55' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default StartupServicesComponent;
