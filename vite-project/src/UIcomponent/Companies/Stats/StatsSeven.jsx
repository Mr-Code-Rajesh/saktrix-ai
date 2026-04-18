import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaClinicMedical, FaHeartbeat, FaAward } from 'react-icons/fa';

export const StatsMedical = () => {
  const statsSeven = [
    {
      label: 'Doctors Onboarded',
      value: '250+',
      icon: <FaUserMd />,
    },
    {
      label: 'Clinics Served',
      value: '120+',
      icon: <FaClinicMedical />,
    },
    {
      label: 'Lives Improved',
      value: '10K+',
      icon: <FaHeartbeat />,
    },
    {
      label: 'Care Awards',
      value: '15+',
      icon: <FaAward />,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-tr from-white to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Trusted by thousands of healthcare professionals and patients across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsSeven.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
