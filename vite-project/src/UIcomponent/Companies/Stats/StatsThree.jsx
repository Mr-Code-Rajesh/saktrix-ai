import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaCertificate, FaUserGraduate } from 'react-icons/fa';

export const StatsEdTech = () => {
  const statsThree = [
    { icon: <FaBook />, label: 'Courses Available', value: '320+' },
    { icon: <FaUserGraduate />, label: 'Students Enrolled', value: '25K+' },
    { icon: <FaGraduationCap />, label: 'Course Completions', value: '18K+' },
    { icon: <FaCertificate />, label: 'Certificates Issued', value: '12K+' },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
        >
          Empowering Education with Metrics
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Track learner progress, achievements, and educational outcomes in real-time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsThree.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3 text-indigo-500 dark:text-indigo-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};



