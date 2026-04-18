import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaChartLine, FaCogs, FaShieldAlt } from 'react-icons/fa';

const WhyChooseAISaaS = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-gray-50 via-purple-50 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">Saktrix AI</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Elevate your AI-driven SaaS platform with scalable, secure, and lightning-fast UI components built for the future.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaRobot className="text-purple-500 text-3xl" />,
            title: "AI-First Design",
            desc: "Components optimized for ML workflows, data dashboards, and intelligent interaction.",
          },
          {
            icon: <FaChartLine className="text-blue-500 text-3xl" />,
            title: "Lightning Speed",
            desc: "Built with performance-first mindset to keep your SaaS blazing fast under heavy load.",
          },
          {
            icon: <FaCogs className="text-pink-500 text-3xl" />,
            title: "Modular & Scalable",
            desc: "Flexible architecture for plug-and-play AI modules and customizable interfaces.",
          },
          {
            icon: <FaShieldAlt className="text-green-500 text-3xl" />,
            title: "Secure by Design",
            desc: "Security-first UI practices with GDPR-ready, privacy-respecting components.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg backdrop-blur border border-gray-200 dark:border-white/10 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseAISaaS;
