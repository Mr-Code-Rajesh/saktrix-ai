import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';

const WhyChooseELearning = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-indigo-600">Saktrix Learn</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The smartest UI kit built to deliver engaging, accessible, and scalable online education experiences.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaGraduationCap className="text-indigo-500 text-3xl" />,
            title: "Modern LMS Ready",
            desc: "Components tailored for student dashboards, quizzes, and course structures.",
          },
          {
            icon: <FaLaptopCode className="text-blue-500 text-3xl" />,
            title: "Responsive by Default",
            desc: "Beautifully responsive layouts optimized for mobile, tablet, and desktop.",
          },
          {
            icon: <FaChalkboardTeacher className="text-green-500 text-3xl" />,
            title: "Instructor Friendly",
            desc: "Modules designed for tutor profiles, live classes, and resource sharing.",
          },
          {
            icon: <FaCertificate className="text-purple-500 text-3xl" />,
            title: "Gamified UX",
            desc: "Badge, certificate, and achievement-ready designs to boost engagement.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg backdrop-blur border border-gray-200 dark:border-white/10 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseELearning;
