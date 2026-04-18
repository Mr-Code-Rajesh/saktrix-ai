import React from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaFax, FaMapMarkerAlt } from 'react-icons/fa';

export const ContactCorporate = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
        
        {/* Left: Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold">Get in Touch</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We're here to answer your business inquiries. Reach out via phone, email, or our contact form.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-500 text-lg" />
              <span>123 Saktrix Blvd, Chennai, TN 600001</span>
            </li>
            <li className="flex items-center gap-3">
              <FaPhone className="text-green-500 text-lg" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-purple-500 text-lg" />
              <span>contact@saktrix.com</span>
            </li>
            <li className="flex items-center gap-3">
              <FaFax className="text-pink-500 text-lg" />
              <span>+91 2222 3333 (Fax)</span>
            </li>
          </ul>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10 shadow-xl"
        >
          <div>
            <label className="block mb-1 text-sm font-medium">Full Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
};
