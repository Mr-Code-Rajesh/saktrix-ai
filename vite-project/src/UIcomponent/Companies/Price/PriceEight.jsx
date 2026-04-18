import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkedAlt, FaPlaneDeparture, FaStar, FaCheck } from 'react-icons/fa';

const plansEight = [
  {
    name: 'Explorer',
    price: '$49/trip',
    icon: <FaMapMarkedAlt className="text-yellow-500 text-2xl" />,
    features: ['Access to Group Tours', 'Daily Itineraries', 'Basic Travel Insurance'],
    bg: 'from-yellow-100 to-orange-200 dark:from-yellow-900 dark:to-orange-900',
    cta: 'Book Now',
  },
  {
    name: 'Jetsetter',
    price: '$149/trip',
    icon: <FaPlaneDeparture className="text-blue-500 text-2xl" />,
    features: [
      'Flight Booking Help',
      'Priority Hotel Deals',
      'Local Sim & Support',
      'Premium Itineraries',
    ],
    bg: 'from-blue-100 to-cyan-200 dark:from-blue-900 dark:to-cyan-900',
    highlight: true,
    cta: 'Upgrade',
  },
  {
    name: 'VIP Pass',
    price: '$349/trip',
    icon: <FaStar className="text-purple-500 text-2xl" />,
    features: [
      'Private Travel Concierge',
      'Custom Routes',
      'VIP Event Entry',
      '24/7 Priority Support',
    ],
    bg: 'from-purple-100 to-pink-200 dark:from-purple-900 dark:to-pink-900',
    cta: 'Join VIP',
  },
];

const TravelPricing = () => {
  return (
    <section className="py-20 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Choose Your Journey Package
        </motion.h2>
        <p className="mt-3 text-gray-600 dark:text-gray-300">
          From explorers to elite travelers — we’ve got your trip mapped out.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-3">
        {plansEight.map((plan, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-3xl shadow-lg bg-gradient-to-br ${plan.bg} ${
              plan.highlight ? 'ring-4 ring-blue-400 dark:ring-blue-600' : ''
            } transition-all`}
          >
            <div className="flex justify-between items-center mb-6">
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
                <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                  <FaCheck className="text-green-500 mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2 px-4 font-semibold rounded-lg ${
                plan.highlight
                  ? 'bg-white text-blue-700 hover:bg-blue-100'
                  : 'bg-yellow-600 text-white hover:bg-yellow-700'
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

export default TravelPricing;
