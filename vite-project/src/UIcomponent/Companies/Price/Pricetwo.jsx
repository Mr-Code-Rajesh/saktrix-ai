import React from 'react';
import { motion } from 'framer-motion';
import { FaUserGraduate, FaChalkboardTeacher, FaUniversity, FaCheck } from 'react-icons/fa';

const plansTwo = [
  {
    name: 'Student',
    price: '$9/mo',
    icon: <FaUserGraduate className="text-indigo-500 text-2xl" />,
    features: ['Access to courses', 'Community support', 'Progress tracking'],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    cta: 'Join Now',
  },
  {
    name: 'Teacher',
    price: '$29/mo',
    icon: <FaChalkboardTeacher className="text-purple-600 text-2xl" />,
    features: ['Course creation', 'Student analytics', 'Priority support'],
    bg: 'from-purple-100 to-purple-200 dark:from-purple-900 dark:to-purple-800',
    cta: 'Start Teaching',
    highlight: true,
  },
  {
    name: 'Institution',
    price: 'Custom',
    icon: <FaUniversity className="text-green-600 text-2xl" />,
    features: ['Multiple seats', 'Admin dashboard', 'Dedicated manager'],
    bg: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const EdTechPricing = () => {
  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Empower Your Learning Journey
        </motion.h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your educational needs.
        </p>
      </div>

      <div className="mt-12 grid gap-8 md:grid-cols-3">
        {plansTwo.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.bg} transition duration-300 ${
              plan.highlight
                ? 'border-4 border-purple-400 dark:border-purple-600'
                : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-2xl font-extrabold mb-4 text-gray-800 dark:text-white">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 rounded-lg font-semibold transition-all ${
                plan.highlight
                  ? 'bg-white text-purple-600 hover:bg-purple-100'
                  : 'bg-purple-600 text-white hover:bg-purple-700'
              }`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EdTechPricing;
