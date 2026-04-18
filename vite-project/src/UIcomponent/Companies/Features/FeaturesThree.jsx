import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCogs,
  FaCloud
} from "react-icons/fa";

const featuresThree = [
  {
    icon: <FaRobot className="text-blue-500 text-3xl" />,
    title: "AI-Driven UI Components",
    desc: "Modular building blocks powered by intelligent behavior and real-time learning."
  },
  {
    icon: <FaBrain className="text-pink-500 text-3xl" />,
    title: "Cognitive Automation",
    desc: "Leverage ML to reduce manual workflows and improve business logic."
  },
  {
    icon: <FaCogs className="text-purple-500 text-3xl" />,
    title: "Customizable Pipelines",
    desc: "Plug-and-play APIs with pre-trained models for text, vision, and speech."
  },
  {
    icon: <FaCloud className="text-cyan-500 text-3xl" />,
    title: "Cloud-Native Infrastructure",
    desc: "Built to scale with seamless deployments via OpenAI, LangChain, and more."
  }
];

export const FeatureGridAISaaS = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Glow Circle Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[180px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6"
        >
          Built for the Next Generation of AI SaaS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Empower your product with blazing-fast, intelligent, and scalable UI tools tailored for modern AI workflows.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresThree.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
