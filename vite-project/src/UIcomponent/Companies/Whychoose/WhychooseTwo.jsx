import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaShieldAlt } from 'react-icons/fa';

const WhyChooseHealthcare = () => {
  return (
    <section className="w-full py-20 px-6 bg-gradient-to-br from-green-50 via-white to-blue-100 dark:from-gray-950 dark:via-black dark:to-gray-900 transition-colors">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto text-center space-y-10"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Why Choose <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-blue-500">Saktrix UI</span> for Healthcare?
        </h2>

        <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto text-lg">
          Empower hospitals, clinics, and digital health apps with trusted, secure, and accessible UI components built for patient-first platforms.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaHeartbeat className="text-red-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Patient-Centered Design</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Interfaces crafted to prioritize ease, clarity, and care across patient journeys.
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaUserMd className="text-blue-500 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">Built for Professionals</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Designed with doctors, nurses, and admins in mind for clinical-grade performance.
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            <FaShieldAlt className="text-green-600 text-3xl mb-4 mx-auto" />
            <h3 className="font-bold text-xl text-gray-800 dark:text-white mb-2">HIPAA & GDPR Ready</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Privacy-first architecture with compliance baked into every component.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhyChooseHealthcare;
