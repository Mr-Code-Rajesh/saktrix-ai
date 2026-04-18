import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaUserMd, FaHospitalAlt, FaCheck } from 'react-icons/fa';

const plansFour = [
  {
    name: 'Basic Care',
    price: '$39/mo',
    icon: <FaHeartbeat className="text-sky-500 text-2xl" />,
    features: ['1 Virtual Visit/mo', 'Basic Reports', '24/7 Chat Support'],
    gradient: 'from-sky-100 to-sky-200 dark:from-sky-900 dark:to-sky-800',
    cta: 'Get Started',
  },
  {
    name: 'Plus Care',
    price: '$89/mo',
    icon: <FaUserMd className="text-teal-500 text-2xl" />,
    features: [
      '3 Virtual Visits/mo',
      'Advanced Reports',
      'Wellness Dashboard',
      'Priority Doctor Access',
    ],
    gradient: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    highlight: true,
    cta: 'Subscribe Now',
  },
  {
    name: 'Full Care',
    price: 'Custom',
    icon: <FaHospitalAlt className="text-green-600 text-2xl" />,
    features: [
      'Unlimited Visits',
      'Dedicated Physician',
      'Lab Integration',
      'Custom Health Plan',
    ],
    gradient: 'from-green-100 to-green-200 dark:from-green-900 dark:to-green-800',
    cta: 'Contact Us',
  },
];

const HealthcarePricing = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Affordable Healthcare Plans
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Choose a plan that fits your wellness journey.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFour.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.03 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.gradient} transition ${
              plan.highlight ? 'ring-4 ring-teal-400 dark:ring-teal-600' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-bold text-gray-800 dark:text-white mb-6">
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
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-teal-600 hover:bg-teal-100'
                  : 'bg-teal-600 text-white hover:bg-teal-700'
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

export default HealthcarePricing;
