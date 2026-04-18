import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaMapMarkedAlt,
  FaDollarSign,
  FaHeadset
} from "react-icons/fa";

const featuresFive = [
  {
    icon: <FaHome className="text-orange-500 text-3xl" />,
    title: "Property Showcase",
    desc: "Highlight stunning properties with dynamic media, 3D views, and carousel sliders."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-600 text-3xl" />,
    title: "Interactive Maps",
    desc: "Built-in location maps, nearby amenities, and school zone overlays for smart searches."
  },
  {
    icon: <FaDollarSign className="text-yellow-500 text-3xl" />,
    title: "Mortgage Calculator",
    desc: "Instant calculations with down payment, interest rates, and amortization breakdowns."
  },
  {
    icon: <FaHeadset className="text-blue-500 text-3xl" />,
    title: "Agent Chat & Support",
    desc: "Live chat widgets and contact scheduling to close deals faster than ever."
  }
];

export const FeatureGridRealEstate = () => {
  return (
    <section className="w-full  min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400 via-yellow-400 to-pink-400 blur-[180px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 mb-6"
        >
          Real Estate Interfaces Built to Convert
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Showcase listings, simplify buying decisions, and empower agents with UI blocks built for today’s real estate platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFive.map((feature, index) => (
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
