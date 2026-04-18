import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

export const CTAFintech = () => {
  return (
    <section className="bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Secure Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
            Financial Journey
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built for Fintech innovators, with banking-grade security and performance-optimized UI blocks. Instill confidence in every transaction.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <FaCreditCard /> Get Started with Saktrix
          </motion.button>
        </div>

        {/* Security Assurance Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaLock className="text-blue-500" />
            End-to-End Encryption
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-600" />
            PCI-DSS Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-purple-500" />
            99.99% Uptime Guarantee
          </div>
        </div>
      </motion.div>
    </section>
  );
};
