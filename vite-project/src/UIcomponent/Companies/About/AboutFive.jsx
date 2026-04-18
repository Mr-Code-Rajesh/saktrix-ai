import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCloud, FaCogs, FaLock } from 'react-icons/fa';

export const AboutAISaas = () => {
  return (
    <section className="w-full min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaRobot className="text-xl" />
            AI-Powered SaaS Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Automate Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Scale With Smart AI.
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix AI SaaS delivers automation, predictions, and decision-making superpowers through powerful machine learning APIs, scalable cloud services, and secure infrastructure.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Infrastructure
            </li>
            <li className="flex items-center gap-3">
              <FaCogs className="text-purple-400 text-lg" />
              Real-Time AI Workflows
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-pink-400 text-lg" />
              Enterprise-Grade Security
            </li>
            <li className="flex items-center gap-3">
              <FaRobot className="text-cyan-400 text-lg" />
              No-Code AI Integrations
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
              Explore Platform
            </button>
          </div>
        </motion.div>

        {/* Right: Glowing Tech Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-80 md:h-96 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-pink-400/20 rounded-3xl flex items-center justify-center shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2023/03/29/15/10/ai-7886155_960_720.png"
            alt="AI SaaS Graphic"
            className="w-3/4 h-3/4 object-contain animate-pulse"
          />
        </motion.div>
      </div>

      {/* Blurred Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
};
