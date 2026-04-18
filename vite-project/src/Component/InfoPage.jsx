import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // if routing is used
import home1 from '../assets/bg/home1.png'; // optional hero image

export const Info = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 overflow-hidden px-6">

      {/* Particles background effect */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff0b,_#000000)] opacity-20 animate-pulse"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center flex flex-col items-center space-y-8">

        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-4xl md:text-6xl font-extrabold leading-tight"
        >
          Welcome to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Saktrix</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-300 max-w-2xl text-lg md:text-xl"
        >
          Empowering Businesses with AI, Web Technologies, and Research-driven Insights.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="flex flex-col md:flex-row gap-6 mt-6"
        >
          <Link
            to="/projects"
            className="px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
          >
            View Projects
          </Link>
          <Link
            to="/contact"
            className="px-8 py-4 border border-white/20 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
          >
            Let's Connect
          </Link>
        </motion.div>

      </div>

      {/* Optional Image / Illustration */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-0 right-0 w-80 md:w-96 opacity-40"
      >
        <img src={home1} alt="Futuristic AI" className="w-full h-full object-contain" />
      </motion.div>

    </section>
  );
};
