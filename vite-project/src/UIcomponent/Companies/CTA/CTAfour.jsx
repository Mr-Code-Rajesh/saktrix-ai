import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload, FaBriefcase } from 'react-icons/fa';

export const CTACorporate = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Saktrix</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Let’s collaborate on your next corporate innovation. Contact our team or download our company profile to learn more about our services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow"
            >
              <FaEnvelope /> Contact Team
            </a>
            <a
              href="/Saktrix-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaDownload /> Download Profile
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1000&q=80"
            alt="Corporate team"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
