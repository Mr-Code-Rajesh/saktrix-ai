import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';

export const AboutFintechSaaS = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[150px] -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaWallet className="text-xl" />
            Fintech + SaaS Innovation
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Empowering Financial Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              with Automation & Insight
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix Fintech Suite simplifies financial workflows using intelligent automation, cloud security, and
            real-time analytics. Designed for modern startups and enterprise finance teams.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-400 text-lg" />
              Real-Time Financial Dashboards
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-purple-400 text-lg" />
              End-to-End Data Security
            </li>
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Architecture
            </li>
            <li className="flex items-center gap-3">
              <FaWallet className="text-pink-400 text-lg" />
              Smart Expense Management
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              Get Free Demo
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/10/11/05/48/chart-7512572_960_720.png"
            alt="Fintech SaaS"
            className="w-full h-full object-contain bg-white/5 p-4"
          />
        </motion.div>
      </div>
    </section>
  );
};
