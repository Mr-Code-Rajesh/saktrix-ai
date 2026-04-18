import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaArrowRight, FaBriefcase } from 'react-icons/fa';

export const CTACreativeAgency = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Portfolio Message */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Show Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Some Love</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We design captivating visuals and unique digital experiences. Explore our portfolio and let’s collaborate to create something unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaBriefcase /> View Portfolio
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaPaintBrush /> Let’s Collaborate <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right: Floating Creative Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1581090700227-1f9a983f5ed8?auto=format&fit=crop&w=1000&q=80"
            alt="Creative visual"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
