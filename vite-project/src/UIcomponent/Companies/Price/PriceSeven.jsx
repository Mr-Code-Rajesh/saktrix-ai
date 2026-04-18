import React from 'react';
import { motion } from 'framer-motion';
import { FaPenNib, FaBrush, FaPalette, FaCheck } from 'react-icons/fa';

const plansSeven = [
  {
    name: 'Basic',
    price: '$12/mo',
    icon: <FaPenNib className="text-indigo-500 text-2xl" />,
    features: ['Portfolio Hosting', 'Custom Domain', 'Basic SEO'],
    bg: 'from-indigo-200 to-indigo-300 dark:from-indigo-900 dark:to-indigo-800',
    cta: 'Get Started',
  },
  {
    name: 'Pro Creator',
    price: '$34/mo',
    icon: <FaBrush className="text-pink-500 text-2xl" />,
    features: [
      'Client Galleries',
      'HD Image Hosting',
      'Blog & Newsletter',
      'Priority Support',
    ],
    bg: 'from-pink-200 to-pink-300 dark:from-pink-900 dark:to-pink-800',
    highlight: true,
    cta: 'Go Pro',
  },
  {
    name: 'Agency Bundle',
    price: '$99/mo',
    icon: <FaPalette className="text-purple-500 text-2xl" />,
    features: [
      'Unlimited Projects',
      'Team Collaboration',
      'White-label Design',
      'Account Manager',
    ],
    bg: 'from-purple-200 to-purple-300 dark:from-purple-900 dark:to-purple-800',
    cta: 'Talk to Us',
  },
];

const CreativePricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-zinc-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Design Plans That Grow With You
        </motion.h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          Whether you're freelancing or building a studio, pick the perfect portfolio plan.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansSeven.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className={`rounded-3xl p-8 shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-pink-400 dark:ring-pink-600' : ''
            } backdrop-blur-md bg-opacity-60 transition-all`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                {plan.name}
              </h3>
              {plan.icon}
            </div>

            <p className="text-3xl font-semibold text-zinc-800 dark:text-white mb-6">
              {plan.price}
            </p>

            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center text-zinc-700 dark:text-zinc-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 font-medium rounded-lg ${
                plan.highlight
                  ? 'bg-white text-pink-600 hover:bg-pink-100'
                  : 'bg-indigo-600 text-white hover:bg-indigo-700'
              } transition`}
            >
              {plan.cta}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativePricing;
