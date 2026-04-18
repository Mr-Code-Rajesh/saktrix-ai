import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

export const AboutBusinessConsulting = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            <FaBriefcase className="text-xl" />
            Expert Business Advisory
          </div>

          <h2 className="text-4xl font-extrabold leading-tight">
            Strategic Consulting for Your Business Growth
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Saktrix Consulting brings together deep industry knowledge, data-driven strategies, and practical execution to unlock business potential.
            We partner with startups, SMBs, and enterprises to drive sustainable transformation.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              Innovative Growth Solutions
            </li>
            <li className="flex items-center gap-3">
              <FaHandshake className="text-blue-500 text-lg" />
              Long-Term Partnerships
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-500 text-lg" />
              ROI-Focused Strategies
            </li>
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-purple-500 text-lg" />
              Industry-Proven Methods
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Side Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=800&q=80"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
