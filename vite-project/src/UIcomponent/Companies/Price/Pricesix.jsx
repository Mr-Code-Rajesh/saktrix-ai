import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaServer, FaCheckCircle } from 'react-icons/fa';

const plansSix = [
  {
    name: 'Personal',
    price: '$0/mo',
    icon: <FaWallet className="text-emerald-500 text-2xl" />,
    features: ['Basic Analytics', 'Spend Tracking', 'Standard Reports'],
    bg: 'from-emerald-100 to-emerald-200 dark:from-emerald-900 dark:to-emerald-800',
    cta: 'Start Free',
  },
  {
    name: 'Business',
    price: '$49/mo',
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    features: [
      'Multi-Account Support',
      'Custom Alerts',
      'Advanced Insights',
      'Priority Email Support',
    ],
    bg: 'from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800',
    highlight: true,
    cta: 'Upgrade Plan',
  },
  {
    name: 'Enterprise API',
    price: 'Custom',
    icon: <FaServer className="text-gray-600 dark:text-gray-300 text-2xl" />,
    features: [
      'Unlimited API Access',
      'Real-Time Sync',
      'Dedicated Manager',
      'SLA & Security Suite',
    ],
    bg: 'from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700',
    cta: 'Contact Sales',
  },
];

const FinancePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Transparent Plans for Every Financial Goal
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Whether you're budgeting, scaling, or integrating — we’ve got a tier for you.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansSix.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={`p-8 rounded-2xl shadow-md bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all`}
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

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
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

export default FinancePricing;
