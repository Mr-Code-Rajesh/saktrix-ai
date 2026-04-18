import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaWallet, FaUsers, FaChartPie } from 'react-icons/fa';
import bgImage from '../../assets/bg/fintech-bg.jpg'; // Replace with your own image path

export const StatsFintechBackground = () => {
  const statsFour = [
    { icon: <FaShieldAlt />, label: 'Secure Transactions', value: '8.5M+' },
    { icon: <FaWallet />, label: 'Digital Wallets', value: '2.4M+' },
    { icon: <FaUsers />, label: 'Active Users', value: '1.8M+' },
    { icon: <FaChartPie />, label: 'Investment Accounts', value: '600K+' },
  ];

  return (
    <section className="min-h-screen relative w-full py-28 px-6 bg-black text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: `url(${bgImage})` }}
      ></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 opacity-70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
        >
          Secure Finance That Scales
        </motion.h2>
        <p className="text-gray-300 mt-4 mb-16 max-w-2xl mx-auto">
          Our fintech ecosystem handles millions of transactions daily while protecting your assets with cutting-edge security.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFour.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
            >
              <div className="text-4xl text-green-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
