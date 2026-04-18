import React from 'react';
import { motion } from 'framer-motion';
import { FaSmileWink } from 'react-icons/fa';

export const NotFoundFriendly = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-pink-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl space-y-8"
      >
        {/* Emoji + 404 */}
        <div className="flex flex-col items-center gap-3">
          <FaSmileWink className="text-6xl text-pink-500 animate-bounce" />
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            404
          </h1>
        </div>

        {/* Message */}
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Oops! This page went out for a coffee break ☕. Don’t worry, we’ll help you get back on track.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Go Back Home
        </a>
      </motion.div>
    </section>
  );
};
