import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaGraduationCap,
  FaChartLine
} from "react-icons/fa";

const featuresSix = [
  {
    icon: <FaChalkboardTeacher className="text-indigo-500 text-3xl" />,
    title: "Live Classes",
    desc: "Host real-time sessions with chat, polls, whiteboards, and screen sharing."
  },
  {
    icon: <FaVideo className="text-pink-500 text-3xl" />,
    title: "On-Demand Content",
    desc: "Upload lectures, tutorials, and modules accessible anytime, anywhere."
  },
  {
    icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
    title: "Certification System",
    desc: "Award trackable course certificates with student analytics and leaderboards."
  },
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "Progress Insights",
    desc: "Track individual learning stats, engagement rates, and course completion."
  }
];

export const FeatureGridELearning = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 mb-6"
        >
          Transform Online Learning Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Engage students and instructors with powerful e-learning features — designed for schools, bootcamps, and knowledge marketplaces.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSix.map((feature, index) => (
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
