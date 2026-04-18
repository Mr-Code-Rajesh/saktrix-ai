import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMicrochip, FaServer, FaCheckCircle } from 'react-icons/fa';

const plansThree = [
  {
    name: 'Starter',
    price: '$29/mo',
    icon: <FaRobot className="text-blue-500 text-2xl" />,
    features: [
      '5,000 API calls/mo',
      'Basic NLP & Vision',
      'Community Support',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Start Free',
  },
  {
    name: 'Pro AI',
    price: '$99/mo',
    icon: <FaMicrochip className="text-purple-500 text-2xl" />,
    features: [
      '50,000 API calls/mo',
      'Advanced AI Models',
      'Priority Support',
      'Team Collaboration',
    ],
    bg: 'from-purple-600 to-indigo-700 dark:from-purple-800 dark:to-indigo-900',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Enterprise AI',
    price: 'Custom',
    icon: <FaServer className="text-green-500 text-2xl" />,
    features: [
      'Unlimited API calls',
      'Dedicated AI Ops',
      '24/7 Support',
      'Custom Infrastructure',
    ],
    bg: 'from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800',
    cta: 'Contact Us',
  },
];

const AIPricing = () => {
  return (
    <section className="py-20 px-6 bg-black dark:bg-black">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-white"
          initial={{ opacity: 0, y: -25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Power Your Platform with AI
        </motion.h2>
        <p className="mt-4 text-lg text-gray-400">
          Flexible plans for AI startups, devs, and enterprise teams.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansThree.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl p-8 shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-purple-500' : ''
            }`}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-bold text-white mb-6">{plan.price}</p>

            <ul className="space-y-4 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center space-x-2 text-gray-300">
                  <FaCheckCircle className="text-green-400" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 text-lg font-semibold rounded-lg transition ${
                plan.highlight
                  ? 'bg-white text-indigo-700 hover:bg-indigo-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
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

export default AIPricing;
