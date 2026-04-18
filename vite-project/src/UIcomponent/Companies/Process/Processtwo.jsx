import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaSlidersH, FaPlug, FaChartLine } from 'react-icons/fa';

const stepstwo = [
  {
    title: 'Sign Up',
    description: 'Create your account in seconds — no credit card needed.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Customize',
    description: 'Tailor the platform to fit your team and workflow.',
    icon: <FaSlidersH className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Integrate',
    description: 'Connect your favorite tools and automate tasks.',
    icon: <FaPlug className="text-green-500 text-3xl" />,
  },
  {
    title: 'Scale',
    description: 'Track growth with real-time dashboards and insights.',
    icon: <FaChartLine className="text-purple-500 text-3xl" />,
  },
];

const SaaSProcess = () => {
  return (
    <section className="py-20 min-h-screen px-6 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our Platform Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We simplify your journey from startup to scale-up — in just four streamlined steps.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepstwo.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
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

export default SaaSProcess;
