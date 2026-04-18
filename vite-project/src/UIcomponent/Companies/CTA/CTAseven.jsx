import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';

export const CTAStartup = () => {
  return (
    <section className="bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Ready to Scale Your Startup?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Let’s Build Your Next Big Thing
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We help founders and innovators build stunning user interfaces fast. Schedule a free demo and explore how Saktrix UI accelerates your MVP to market.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-xl"
          >
            <FaCalendarAlt /> Schedule Your Demo
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-4 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
          <FaUsers className="text-blue-500" />
          Trusted by 2,500+ growing startups
        </div>
      </motion.div>
    </section>
  );
};
