import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaLink, FaChartLine, FaPiggyBank } from 'react-icons/fa';

const stepsSix = [
  {
    title: 'Create Account',
    description: 'Sign up in minutes with secure identity verification.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Connect Bank',
    description: 'Link your bank accounts safely to monitor activity.',
    icon: <FaLink className="text-green-500 text-3xl" />,
  },
  {
    title: 'Track & Analyze',
    description: 'Visualize your finances with real-time dashboards.',
    icon: <FaChartLine className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Invest or Save',
    description: 'Automate your savings or start investing smartly.',
    icon: <FaPiggyBank className="text-indigo-500 text-3xl" />,
  },
];

const FinanceProcess = () => {
  return (
    <section className=" min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Financial Journey, Simplified
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A secure, simple process to take control of your money and future.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSix.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
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

export default FinanceProcess;
