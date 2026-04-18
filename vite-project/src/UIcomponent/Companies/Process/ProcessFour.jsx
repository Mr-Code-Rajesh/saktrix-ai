import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaUserMd, FaPrescriptionBottleAlt, FaClipboardCheck } from 'react-icons/fa';

const stepsFour = [
  {
    title: 'Book Appointment',
    description: 'Schedule visits easily with online booking and availability check.',
    icon: <FaCalendarCheck className="text-emerald-500 text-3xl" />,
  },
  {
    title: 'Consult Doctor',
    description: 'Connect with certified professionals through secure video or in-person sessions.',
    icon: <FaUserMd className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Receive Treatment',
    description: 'Access personalized care plans and prescribed medications with ease.',
    icon: <FaPrescriptionBottleAlt className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Follow-Up',
    description: 'Track progress and schedule follow-ups for complete recovery.',
    icon: <FaClipboardCheck className="text-teal-500 text-3xl" />,
  },
];

const HealthcareProcess = () => {
  return (
    <section className="py-20 min-h-screen px-6 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We Care For You
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From booking to recovery — we streamline healthcare with compassion and tech.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFour.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
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

export default HealthcareProcess;
