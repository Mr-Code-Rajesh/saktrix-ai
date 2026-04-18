import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaRocket, FaStar } from 'react-icons/fa';

const plans = [
  {
    name: 'Basic',
    price: '$19/mo',
    icon: <FaStar className="text-blue-500" />,
    features: ['1 Project', 'Basic Support', 'Email Notifications'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
  {
    name: 'Pro',
    price: '$49/mo',
    icon: <FaRocket className="text-purple-600" />,
    features: ['10 Projects', 'Priority Support', 'Team Access', 'Analytics'],
    gradient: 'from-purple-500 to-indigo-600 dark:from-purple-700 dark:to-indigo-800',
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    icon: <FaCheckCircle className="text-green-500" />,
    features: ['Unlimited Projects', 'Dedicated Manager', 'Custom Integrations'],
    gradient: 'from-white to-gray-100 dark:from-gray-900 dark:to-gray-800',
  },
];

const SaaSPricing = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-3xl font-extrabold text-gray-900 dark:text-white"
        >
          Flexible Plans for Every Team
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
          Choose a plan that works best for your SaaS business.
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`rounded-2xl shadow-xl p-8 transition-colors duration-300 bg-gradient-to-br ${plan.gradient} ${
              plan.highlight ? 'text-white' : 'text-gray-800 dark:text-white'
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              {plan.icon}
            </div>
            <p className="text-3xl font-extrabold mb-6">{plan.price}</p>
            <ul className="space-y-3">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <FaCheckCircle className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-6 w-full py-2 px-4 rounded-lg font-medium transition ${
                plan.highlight
                  ? 'bg-white text-indigo-600 hover:bg-gray-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`}
            >
              {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SaaSPricing;
