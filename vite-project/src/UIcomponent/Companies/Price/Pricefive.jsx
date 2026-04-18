import React from 'react';
import { motion } from 'framer-motion';
import { FaShoppingCart, FaStore, FaHeadset, FaCheck } from 'react-icons/fa';

const plansFive = [
  {
    name: 'Starter Shop',
    price: '$19/mo',
    icon: <FaShoppingCart className="text-pink-500 text-2xl" />,
    features: ['Up to 50 Products', 'Basic Storefront', 'Email Support'],
    bg: 'from-pink-100 to-pink-200 dark:from-pink-900 dark:to-pink-800',
    cta: 'Start Selling',
  },
  {
    name: 'Business Pro',
    price: '$79/mo',
    icon: <FaStore className="text-amber-500 text-2xl" />,
    features: [
      'Unlimited Products',
      'Advanced Themes',
      'Analytics Dashboard',
      'Priority Support',
    ],
    bg: 'from-amber-100 to-amber-200 dark:from-amber-900 dark:to-amber-800',
    highlight: true,
    cta: 'Upgrade Now',
  },
  {
    name: 'Marketplace Enterprise',
    price: 'Custom',
    icon: <FaHeadset className="text-teal-500 text-2xl" />,
    features: [
      'Multi-vendor Support',
      'White-label Branding',
      'Dedicated Manager',
      '24/7 Assistance',
    ],
    bg: 'from-teal-100 to-teal-200 dark:from-teal-900 dark:to-teal-800',
    cta: 'Contact Sales',
  },
];

const EcommercePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Scale Your Storefront with Confidence
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          Flexible pricing to grow your e-commerce business.
        </p>
      </div>

      <div className="mt-14 grid gap-10 md:grid-cols-3">
        {plansFive.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            className={`p-8 rounded-2xl shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-amber-400 dark:ring-amber-600' : ''
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
                  <FaCheck className="text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-base font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-amber-600 hover:bg-amber-100'
                  : 'bg-amber-500 text-white hover:bg-amber-600'
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

export default EcommercePricing;
