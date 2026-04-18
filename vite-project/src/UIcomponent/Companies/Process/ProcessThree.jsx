import React from 'react';
import { motion } from 'framer-motion';
import { FaKeyboard, FaBrain, FaBolt, FaRocket } from 'react-icons/fa';

const stepsthree = [
  {
    title: 'Input',
    description: 'Provide your prompt, data, or request — no complexity required.',
    icon: <FaKeyboard className="text-cyan-500 text-3xl" />,
  },
  {
    title: 'Analyze',
    description: 'Our AI understands context, patterns, and structure in real-time.',
    icon: <FaBrain className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Generate',
    description: 'You get accurate, fast, human-like results in seconds.',
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Optimize',
    description: 'Continuously refine outputs based on usage and feedback.',
    icon: <FaRocket className="text-pink-500 text-3xl" />,
  },
];

const AIProcess = () => {
  return (
    <section className="py-20  min-h-screen px-6 bg-gradient-to-br from-gray-50 to-cyan-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our AI Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From your input to optimized output — here’s the intelligent process behind the magic.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsthree.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
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

export default AIProcess;
