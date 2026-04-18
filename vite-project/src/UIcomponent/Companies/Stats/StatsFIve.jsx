import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaServer, FaCodeBranch } from 'react-icons/fa';

export const StatsAITech = () => {
  const statsFive = [
    { icon: <FaBrain />, label: 'AI Models Trained', value: '1.2M' },
    { icon: <FaRobot />, label: 'Automations Deployed', value: '85K+' },
    { icon: <FaServer />, label: 'Data Processed Daily', value: '12TB' },
    { icon: <FaCodeBranch />, label: 'Integrations', value: '300+' },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Pulse Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00f2ff22,_transparent)] animate-pulse opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          Supercharged Tech, Quantified
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Our infrastructure scales neural systems, automates workflows, and processes data at mind-blowing speeds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFive.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="text-4xl text-cyan-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-extrabold text-white">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
