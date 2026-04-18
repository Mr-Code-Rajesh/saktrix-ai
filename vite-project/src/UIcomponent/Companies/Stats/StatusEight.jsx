import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaHandsHelping, FaSmileBeam, FaFlagCheckered } from 'react-icons/fa';

export const StatsStartup = () => {
  const statsEight = [
    {
      label: 'Projects Launched',
      value: '150+',
      icon: <FaFire />,
    },
    {
      label: 'Partnerships Formed',
      value: '75+',
      icon: <FaHandsHelping />,
    },
    {
      label: 'Happy Clients',
      value: '1.2K',
      icon: <FaSmileBeam />,
    },
    {
      label: 'Global Reach',
      value: '42 Countries',
      icon: <FaFlagCheckered />,
    },
  ];

  return (
    <section className="min-h-screen relative py-20 px-6 bg-gradient-to-tr from-purple-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Light burst background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Bold Numbers Back Our Mission
        </h2>
        <p className="text-gray-400 text-lg">
          Our startup accelerates fast and scales globally with measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {statsEight.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition"
          >
            <div className="text-4xl text-pink-400 mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-300 mt-2 text-sm uppercase tracking-wide font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
