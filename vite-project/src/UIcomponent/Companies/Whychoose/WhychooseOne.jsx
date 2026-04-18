import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaShieldAlt, FaCogs } from 'react-icons/fa';

const WhyChooseStartup = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-950 dark:via-black dark:to-gray-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500">Saktrix UI</span>?
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
          Trusted by founders, loved by developers. Here's why startups around the world choose us to launch their MVPs faster and better.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaRocket className="text-purple-600 dark:text-purple-400 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Lightning Fast</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Pre-built components to speed up your development and launch faster than your competitors.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaShieldAlt className="text-blue-600 dark:text-blue-400 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Secure & Scalable</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Built with best practices in mind, our components are scalable and enterprise-ready.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaCogs className="text-pink-600 dark:text-pink-400 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Modular Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Each block is designed to plug-and-play, giving you full control over your product’s experience.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseStartup;
