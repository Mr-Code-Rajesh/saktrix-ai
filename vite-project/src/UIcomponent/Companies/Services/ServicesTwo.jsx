import { motion } from 'framer-motion';
import { FaCog, FaChartLine, FaTasks, FaUsers } from 'react-icons/fa';

const SaaSServicesComponent = () => {
  const servicesTwo = [
    { icon: <FaCog />, title: 'Automation', description: 'Automate your workflows for efficiency' },
    { icon: <FaChartLine />, title: 'Analytics', description: 'Real-time analytics for better decision-making' },
    { icon: <FaTasks />, title: 'Project Management', description: 'Organize and manage your team\'s projects' },
    { icon: <FaUsers />, title: 'Customer Support', description: '24/7 support to keep your customers happy' },
  ];

  return (
    <div className=" min-h-screen bg-gradient-to-r from-indigo-500 to-purple-700 p-10 rounded-lg shadow-lg dark:bg-gray-800">
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
        {servicesTwo.map((service, index) => (
          <motion.div
            key={index}
            className="group relative p-8 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className="flex justify-center mb-4">
              <div className="text-4xl text-indigo-500 dark:text-indigo-300">
                {service.icon}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-center text-gray-900 dark:text-white">{service.title}</h3>
            <p className="text-center text-gray-600 dark:text-gray-300 mt-2">{service.description}</p>
            <motion.div
              className="absolute inset-0 border-4 border-transparent group-hover:border-indigo-500 rounded-lg transition-all duration-500"
              whileHover={{ borderWidth: '4px', borderColor: '#4c51bf' }}
            ></motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default SaaSServicesComponent;
