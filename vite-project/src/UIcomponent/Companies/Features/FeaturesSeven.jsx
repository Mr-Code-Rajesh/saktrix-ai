import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaChartPie,
  FaSearchDollar,
  FaMailBulk
} from "react-icons/fa";

const featuresSeven = [
  {
    icon: <FaBullhorn className="text-pink-500 text-3xl" />,
    title: "Campaign Management",
    desc: "Launch and monitor ad campaigns across platforms with real-time insights."
  },
  {
    icon: <FaChartPie className="text-purple-500 text-3xl" />,
    title: "Analytics Dashboard",
    desc: "Visualize engagement, CTR, and conversions with actionable data breakdowns."
  },
  {
    icon: <FaSearchDollar className="text-indigo-500 text-3xl" />,
    title: "SEO & SEM Tools",
    desc: "Boost rankings and optimize paid ads with built-in keyword intelligence."
  },
  {
    icon: <FaMailBulk className="text-yellow-500 text-3xl" />,
    title: "Email Marketing Suite",
    desc: "Create, segment, and track high-converting email campaigns with ease."
  }
];

export const FeatureGridDigitalMarketing = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-indigo-500 to-yellow-400 blur-[150px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6"
        >
          Digital Tools That Drive Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our marketing toolkit gives agencies and freelancers everything they need to execute campaigns, analyze metrics, and grow ROI.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSeven.map((feature, index) => (
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
