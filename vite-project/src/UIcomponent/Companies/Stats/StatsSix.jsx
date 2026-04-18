import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBuilding, FaUserTie, FaChartBar } from 'react-icons/fa';
import StatsImage from '../../assets/corporate-stats.jpg'; // Replace with your real image

export const StatsCorporateSplit = () => {
  const statsSix = [
    { icon: <FaBuilding />, label: 'Clients Worldwide', value: '80+' },
    { icon: <FaHandshake />, label: 'Years of Partnership', value: '10+' },
    { icon: <FaChartBar />, label: 'Growth Rate', value: '215%' },
    { icon: <FaUserTie />, label: 'Consultants', value: '120+' },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <img
            src={StatsImage}
            alt="Corporate Stats"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            We Deliver Results That Matter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Our team of experts empowers businesses to scale with long-term strategy, innovation, and execution.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {statsSix.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
