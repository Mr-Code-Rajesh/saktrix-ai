import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';

export const NotFoundFuturistic = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl space-y-8"
      >
        {/* Icon & Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white w-24 h-24 rounded-full text-4xl shadow-lg"
        >
          <FaRobot />
        </motion.div>

        {/* Glitchy 404 */}
        <h1 className="text-7xl font-extrabold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            404
          </span>
          <span className="absolute top-0 left-0 blur-sm opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
            404
          </span>
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg">
          Looks like our bot wandered into the void. The page you're looking for doesn't exist.
        </p>

        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
        >
          <FaArrowLeft /> Return to Home
        </a>
      </motion.div>
    </section>
  );
};
