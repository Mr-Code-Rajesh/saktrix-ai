import React from 'react';
import { motion } from 'framer-motion';
import contactImage from '../../../assets/bg/contact-brand.jpg'; // Replace with your own

export const ContactSplitLayout = () => {
  return (
    <section className="w-full bg-white dark:bg-black text-gray-900 dark:text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left: Form */}
        <motion.form
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="bg-white dark:bg-gray-950 shadow-xl rounded-2xl p-10 border border-gray-200 dark:border-gray-800 space-y-6"
        >
          <h2 className="text-4xl font-bold mb-2">Let's Work Together</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Have an idea or project? We’d love to hear from you.
          </p>

          <div>
            <label className="block text-sm mb-1 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-pink-500"
              placeholder="Jane Doe"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="jane@brand.com"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border dark:border-gray-700 border-gray-300 rounded-md bg-transparent outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Tell us what you're thinking..."
            />
          </div>

          <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Send Inquiry
          </button>
        </motion.form>

        {/* Right: Image or Visual */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="rounded-2xl overflow-hidden shadow-2xl"
        >
          <img
            src={contactImage}
            alt="Creative Collaboration"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
};
