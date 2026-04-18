import React from "react";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaChartLine,
  FaFingerprint,
  FaLock
} from "react-icons/fa";

const featuresFour = [
  {
    icon: <FaWallet className="text-green-500 text-3xl" />,
    title: "Smart Wallet Integration",
    desc: "Seamless connection with digital wallets, payment gateways, and blockchain tech."
  },
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Live Market Insights",
    desc: "Real-time data visualization and financial trends backed by secure APIs."
  },
  {
    icon: <FaFingerprint className="text-purple-500 text-3xl" />,
    title: "Biometric Security",
    desc: "Next-gen identity verification with biometric and AI-based risk scoring."
  },
  {
    icon: <FaLock className="text-yellow-500 text-3xl" />,
    title: "Bank-Grade Encryption",
    desc: "End-to-end encryption and compliance for enterprise-grade Fintech solutions."
  }
];

export const FeatureGridFintech = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mb-6"
        >
          Fintech UI Components That Inspire Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Build secure, scalable financial applications with ready-to-use, premium-grade UI blocks tailored for digital finance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFour.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
