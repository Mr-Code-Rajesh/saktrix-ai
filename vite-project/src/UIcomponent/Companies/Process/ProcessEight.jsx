import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaCalendarAlt, FaWallet, FaCocktail } from 'react-icons/fa';

const stepsEight = [
  {
    title: 'Explore',
    description: 'Discover exciting destinations and unforgettable events.',
    icon: <FaGlobe className="text-teal-500 text-3xl" />,
  },
  {
    title: 'Plan',
    description: 'We tailor your itinerary or event to match your dreams.',
    icon: <FaCalendarAlt className="text-sky-500 text-3xl" />,
  },
  {
    title: 'Book',
    description: 'Secure your trip or event package with ease and confidence.',
    icon: <FaWallet className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Enjoy',
    description: 'Live the moment — we take care of the rest behind the scenes.',
    icon: <FaCocktail className="text-pink-500 text-3xl" />,
  },
];

const TravelEventsProcess = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-teal-100 to-sky-100 dark:from-slate-900 dark:to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Journey, Our Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Whether it’s a dream vacation or an iconic event, we make it effortless from start to celebration.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsEight.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelEventsProcess;
