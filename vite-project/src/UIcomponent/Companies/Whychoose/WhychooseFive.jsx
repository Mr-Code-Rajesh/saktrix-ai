import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaMapMarkedAlt, FaHandshake, FaRegBuilding } from 'react-icons/fa';

const WhyChooseRealEstate = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-orange-50 via-white to-yellow-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Saktrix RealEstate</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          High-performance UI components tailored for agencies, agents, and real estate startups to build trust and drive conversions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaHome className="text-orange-500 text-3xl" />,
            title: "Property Showcases",
            desc: "Visually stunning layouts for listings, virtual tours, and neighborhood previews.",
          },
          {
            icon: <FaMapMarkedAlt className="text-yellow-500 text-3xl" />,
            title: "Smart Maps Integration",
            desc: "Seamless support for location filtering, distance-based searches, and maps.",
          },
          {
            icon: <FaHandshake className="text-green-500 text-3xl" />,
            title: "Built for Agents",
            desc: "Agent-centric design systems with CRM-ready UI modules.",
          },
          {
            icon: <FaRegBuilding className="text-indigo-500 text-3xl" />,
            title: "Enterprise-Ready",
            desc: "Scalable UI kits perfect for multi-property firms and listing networks.",
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

export default WhyChooseRealEstate;
