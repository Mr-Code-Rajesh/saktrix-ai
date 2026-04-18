import { motion } from 'framer-motion';
import { FaMobileAlt, FaRobot, FaCloud, FaBlockchain, FaShieldAlt } from 'react-icons/fa';

const TechAgencyMatrixServicesComponent = () => {
  const servicesEight = [
    { icon: <FaMobileAlt />, title: 'App Development', description: 'Innovative mobile apps for modern businesses' },
    { icon: <FaRobot />, title: 'AI & Machine Learning', description: 'Automate and optimize with cutting-edge AI' },
    { icon: <FaCloud />, title: 'Cloud Computing', description: 'Seamless and scalable cloud solutions' },
    { icon: <FaBlockchain />, title: 'Blockchain Development', description: 'Decentralized and secure blockchain solutions' },
    { icon: <FaShieldAlt />, title: 'Cybersecurity', description: 'Protect your digital assets with robust security' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-500 to-black p-10 rounded-lg shadow-lg dark:bg-gray-800">
       <div className=" flex flex-col gap-2 items-center mb-10">
           <h2 className='text-3xl font-medium '> Our Services</h2>
           <p className='max-w-4xl text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, corrupti atque! Ex eaque, porro repellat, enim voluptatibus <br/> nam facilis aperiam cumque corrupti autem dolore minus fugit beatae ratione ipsa libero?</p>
         </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {servicesEight.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-black dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-green-500 dark:text-green-300"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                whileHover={{ scale: 1.2 }} // Scale effect on icon hover
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
              className="absolute inset-0 border-4 border-transparent group-hover:border-green-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#32cd32' }} // Neon green border
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechAgencyMatrixServicesComponent;
