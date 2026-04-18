import { motion } from 'framer-motion';
import { FaSearch, FaBullhorn, FaShareAlt, FaEnvelope, FaChartLine } from 'react-icons/fa';

const DigitalMarketingServicesComponent = () => {
  const servicesFive = [
    { icon: <FaSearch />, title: 'SEO', description: 'Improve your website ranking on search engines' },
    { icon: <FaBullhorn />, title: 'PPC Advertising', description: 'Targeted ads to boost your business visibility' },
    { icon: <FaShareAlt />, title: 'Social Media Marketing', description: 'Engage your audience across social platforms' },
    { icon: <FaEnvelope />, title: 'Email Marketing', description: 'Personalized email campaigns to connect with customers' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Measure and optimize your marketing efforts' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-orange-500 p-10 rounded-lg shadow-lg dark:bg-gray-800">
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
        {servicesFive.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.1 }}
          >
            <div className="flex justify-center mb-4">
              <motion.div
                className="text-4xl text-blue-500 dark:text-blue-300"
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
              className="absolute inset-0 border-4 border-transparent group-hover:border-blue-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#2b6cb0' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default DigitalMarketingServicesComponent;
