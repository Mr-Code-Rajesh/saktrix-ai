import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMagic, FaBolt } from 'react-icons/fa';

export const CTAAIService = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden relative">
      {/* Glow Ball */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[180px] opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          Power Your Product with AI
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Integrate intelligent features, automate workflows, and launch smarter solutions with our modular AI UI components.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition shadow-xl animate-pulse hover:animate-none"
          >
            <FaBolt /> Try AI Toolkit
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            <FaMagic /> Request Demo
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-400 flex justify-center gap-2 items-center">
          <FaRobot className="text-pink-500" />
          Built with OpenAI, TensorFlow, and LangChain
        </div>
      </motion.div>
    </section>
  );
};
