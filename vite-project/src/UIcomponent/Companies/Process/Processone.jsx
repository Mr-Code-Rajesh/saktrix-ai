import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChalkboardTeacher, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const steps = [
  {
    title: 'Discover',
    description: 'Find courses tailored to your interests and career goals.',
    icon: <FaSearch className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Learn',
    description: 'Engage with expert-led lessons and immersive content.',
    icon: <FaChalkboardTeacher className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Practice',
    description: 'Apply knowledge through quizzes, projects, and challenges.',
    icon: <FaLaptopCode className="text-green-500 text-3xl" />,
  },
  {
    title: 'Achieve',
    description: 'Earn certificates and advance your career with confidence.',
    icon: <FaGraduationCap className="text-purple-500 text-3xl" />,
  },
];

const EdTechProcess = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Learning Journey
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We believe in a step-by-step approach to mastering new skills — here’s how it works.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-all"
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

export default EdTechProcess;
