import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaUserFriends, FaAward, FaPenNib } from 'react-icons/fa';

export const StatsCreativeAgency = () => {
  const statstwo = [
    { label: 'Design Projects', value: '450+', icon: <FaPalette /> },
    { label: 'Clients', value: '120+', icon: <FaUserFriends /> },
    { label: 'Awards Won', value: '17', icon: <FaAward /> },
    { label: 'Creative Experts', value: '32', icon: <FaPenNib /> },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-tr from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white overflow-hidden">
      {/* Glass Morphism Card Container */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          Numbers That Tell Our Story
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-14">
          From branding to digital experiences — our creative agency transforms ideas into impactful visual solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
          {statstwo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3 text-pink-500 dark:text-pink-400">
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
