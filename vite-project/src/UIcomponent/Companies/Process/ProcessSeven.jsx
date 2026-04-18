import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPenNib, FaMagic, FaPaperPlane } from 'react-icons/fa';

const stepsSeven = [
  {
    title: 'Ideate',
    description: 'We start with inspiration and a deep dive into your vision.',
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Design',
    description: 'Sketches to screens — we craft compelling visual stories.',
    icon: <FaPenNib className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Refine',
    description: 'Iterate with intention to make sure every detail shines.',
    icon: <FaMagic className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Your final product — pixel perfect and portfolio ready.',
    icon: <FaPaperPlane className="text-indigo-500 text-3xl" />,
  },
];

const CreativeProcess = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-zinc-900 dark:to-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Creative Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          We blend strategy, artistry, and soul into every project — here's how we do it.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSeven.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeProcess;
