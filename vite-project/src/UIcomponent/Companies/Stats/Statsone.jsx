import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaChartLine, FaCloud } from 'react-icons/fa';

export const StatsSaaS = () => {
  const statsone = [
    { label: 'Users', value: '25K+', icon: <FaUsers /> },
    { label: 'Deployments', value: '9K+', icon: <FaRocket /> },
    { label: 'Uptime', value: '99.99%', icon: <FaCloud /> },
    { label: 'Growth', value: '400%', icon: <FaChartLine /> },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Trusted by thousands
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track the performance of your SaaS in real-time.
        </p>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsone.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
