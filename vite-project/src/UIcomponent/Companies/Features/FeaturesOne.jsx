import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaHandshake,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Data-Driven Results",
    desc: "We leverage analytics to optimize your business strategy for maximum ROI."
  },
  {
    icon: <FaHandshake className="text-purple-500 text-3xl" />,
    title: "Trusted Partnerships",
    desc: "Our long-standing corporate partnerships ensure continuity and trust."
  },
  {
    icon: <FaUserTie className="text-teal-500 text-3xl" />,
    title: "Executive-Level Support",
    desc: "Get direct access to our senior consultants and strategic advisors."
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    title: "Enterprise-Ready Systems",
    desc: "Scalable solutions tailored for large organizations and global teams."
  }
];

export const FeatureGridCorporate = () => {
  return (
    <section className="w-full min-h-screen  py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Corporate Excellence, Delivered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We help large enterprises stay ahead of the curve with cutting-edge technology and strategic consulting.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
