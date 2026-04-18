// ContactSaaS.jsx

import { motion } from 'framer-motion';
import { FaEnvelope, FaPhoneAlt, FaRocket } from 'react-icons/fa';

const ContactSaaS = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-gradient-to-br from-white to-blue-50 dark:from-gray-950 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Left Side – Intro Text */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-purple-400 bg-blue-100 dark:bg-white/10 px-4 py-2 rounded-full w-fit shadow-sm">
            <FaRocket />
            SaaS Support
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's build the next big thing together 🚀
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Got a question or need support for your SaaS app? We’re here 24/7 to help you scale faster.
          </p>
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaEnvelope className="text-blue-600 dark:text-purple-400" />
              support@saktrixui.com
            </div>
            <div className="flex items-center gap-3 text-gray-700 dark:text-gray-200">
              <FaPhoneAlt className="text-blue-600 dark:text-purple-400" />
              +1 (800) 123-4567
            </div>
          </div>
        </motion.div>

        {/* Right Side – Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 md:p-10 border border-gray-200 dark:border-white/10"
        >
          <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">
            Send Us a Message
          </h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
              required
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-purple-500"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 rounded-lg text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSaaS;
