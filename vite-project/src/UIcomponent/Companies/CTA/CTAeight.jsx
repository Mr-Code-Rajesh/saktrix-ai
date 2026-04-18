import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLock, FaEnvelope } from 'react-icons/fa';

export const CTASaas = () => {
  return (
    <section className="w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Glowing Shape */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-[160px] opacity-20 -translate-x-1/2 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Supercharge Your Workflow with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> Saktrix UI</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join 10,000+ developers building SaaS interfaces with blazing-fast components, advanced animation, and ultra-clean design.
        </p>

        {/* Input + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-96">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg animate-pulse hover:animate-none">
            <FaRocket className="inline mr-2" />
            Get Started Free
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4">
          <FaLock className="text-green-500" />
          No spam. 100% secure. Cancel anytime.
        </div>
      </motion.div>
    </section>
  );
};
