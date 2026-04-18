import React from 'react';
import { motion } from 'framer-motion';
import { FaDiscord, FaCalendarAlt, FaEnvelopeOpenText } from 'react-icons/fa';

export const ContactStartup = () => {
  return (
    <section className="relative z-10 py-20 px-6 bg-gradient-to-br from-blue-50 via-purple-100 to-pink-100 dark:from-gray-900 dark:via-gray-950 dark:to-black transition-colors duration-500">
      <div className="max-w-4xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          Let’s Talk Ideas 💡
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mt-4"
        >
          Have a project in mind, or just want to jam on ideas? We’re always excited to hear from like-minded creators, founders, and dreamers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 flex flex-wrap gap-4 justify-center"
        >
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg shadow-lg font-semibold hover:opacity-90 transition"
          >
            <FaCalendarAlt /> Book a Call
          </a>
          <a
            href="mailto:hello@saktrix.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg font-semibold hover:opacity-90 transition"
          >
            <FaEnvelopeOpenText /> Email Us
          </a>
          <a
            href="https://discord.com/invite/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-lg text-gray-900 dark:text-white font-semibold hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <FaDiscord /> Join on Discord
          </a>
        </motion.div>
      </div>
    </section>
  );
};
