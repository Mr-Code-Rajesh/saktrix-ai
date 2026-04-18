import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const stepsFive = [
  {
    title: 'Discover',
    description: 'Browse thousands of products tailored to your style and needs.',
    icon: <FaSearch className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Add to Cart',
    description: 'Quickly save your favorites and explore bundle options.',
    icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Checkout',
    description: 'Fast and secure checkout with multiple payment options.',
    icon: <FaCreditCard className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Get your items fast with real-time tracking and notifications.',
    icon: <FaTruck className="text-green-500 text-3xl" />,
  },
];

const EcommerceProcess = () => {
  return (
    <section className="py-20  min-h-screen px-6 bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shopping Made Simple
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From finding the perfect item to delivery at your doorstep — here’s how we work.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFive.map((step, index) => (
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

export default EcommerceProcess;
