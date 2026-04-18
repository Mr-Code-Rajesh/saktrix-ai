import React from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaMapMarkedAlt,
  FaClock,
  FaWarehouse
} from "react-icons/fa";

const featuresEight = [
  {
    icon: <FaTruckMoving className="text-blue-500 text-3xl" />,
    title: "Fleet Management",
    desc: "Track and control your entire delivery fleet in real-time with precision logistics."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-500 text-3xl" />,
    title: "Live Route Tracking",
    desc: "Monitor shipments across locations with GPS-integrated route visualizations."
  },
  {
    icon: <FaClock className="text-yellow-500 text-3xl" />,
    title: "ETA Optimization",
    desc: "Predict arrival times and reduce delays with AI-assisted traffic analytics."
  },
  {
    icon: <FaWarehouse className="text-indigo-500 text-3xl" />,
    title: "Warehouse Sync",
    desc: "Keep your warehouse in sync with smart stock-level triggers and automation."
  }
];

export const FeatureGridLogistics = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Industrial Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500 blur-[140px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 mb-6"
        >
          Power Your Logistics with Precision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Optimize fleet, improve delivery timelines, and scale distribution seamlessly with our advanced logistics interface.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresEight.map((feature, index) => (
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
