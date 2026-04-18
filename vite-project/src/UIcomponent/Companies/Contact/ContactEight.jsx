import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaInstagram, FaBehance, FaPhoneAlt } from 'react-icons/fa';

export const ContactCreativeAgency = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden">
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white/10 rounded-full blur-md"
            style={{
              width: `${Math.random() * 10 + 10}px`,
              height: `${Math.random() * 10 + 10}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left: Animated Intro */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Let's <span className="bg-gradient-to-r from-pink-500 to-purple-600 text-transparent bg-clip-text">Create</span> Together
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We love bold ideas. Whether it's a brand launch, product design, or full-blown creative campaign — drop us a line. Let’s build magic.
          </p>

          {/* Contact Options */}
          <div className="flex flex-wrap gap-4 mt-6">
            <a href="mailto:hello@saktrix.com" className="flex items-center gap-2 px-5 py-3 bg-black text-white rounded-lg dark:bg-white dark:text-black hover:scale-105 transition">
              <FaEnvelope /> Email Us
            </a>
            <a href="tel:+918888888888" className="flex items-center gap-2 px-5 py-3 bg-pink-500 text-white rounded-lg hover:scale-105 transition">
              <FaPhoneAlt /> Call Us
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:scale-105 transition">
              <FaInstagram /> Instagram
            </a>
            <a href="#" className="flex items-center gap-2 px-5 py-3 bg-purple-600 text-white rounded-lg hover:scale-105 transition">
              <FaBehance /> Behance
            </a>
          </div>
        </motion.div>

        {/* Right: Floating Form */}
        <motion.form
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 backdrop-blur-lg p-8 rounded-3xl shadow-xl space-y-6 relative z-10"
        >
          <div className="relative group">
            <label className="absolute -top-2 left-4 text-sm bg-white dark:bg-gray-900 px-1 text-gray-500 group-focus-within:text-pink-500 transition-all">
              Name
            </label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-pink-500 outline-none"
            />
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 text-sm bg-white dark:bg-gray-900 px-1 text-gray-500 group-focus-within:text-purple-500 transition-all">
              Email
            </label>
            <input
              type="email"
              placeholder="you@agency.com"
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-purple-500 outline-none"
            />
          </div>

          <div className="relative group">
            <label className="absolute -top-2 left-4 text-sm bg-white dark:bg-gray-900 px-1 text-gray-500 group-focus-within:text-blue-500 transition-all">
              Project Details
            </label>
            <textarea
              rows="4"
              placeholder="Tell us your idea..."
              className="w-full px-4 py-3 rounded-md border border-gray-300 dark:border-gray-700 bg-transparent focus:ring-2 focus:ring-blue-500 outline-none"
            />
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
            Submit Inquiry
          </button>
        </motion.form>
      </div>
    </section>
  );
};
