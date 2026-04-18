import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from 'react-icons/fa';

export const ContactDigitalMarketing = () => {
  return (
    <section className="bg-gradient-to-br from-white via-gray-50 to-pink-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto space-y-20">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            Let’s Grow Your Brand 💼
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Whether you’re looking to boost leads, increase conversions, or build awareness — let’s talk!
          </p>
        </motion.div>

        {/* Contact Form & CTA */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6 bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-white/10"
          >
            <div>
              <label className="block mb-1 text-sm font-semibold">Your Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-md dark:bg-black dark:border-gray-700" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-md dark:bg-black dark:border-gray-700" placeholder="jane@brand.com" />
            </div>
            <div>
              <label className="block mb-1 text-sm font-semibold">Your Message</label>
              <textarea rows="4" className="w-full px-4 py-2 border rounded-md dark:bg-black dark:border-gray-700" placeholder="Let's work together..."></textarea>
            </div>
            <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </motion.form>

          {/* CTAs and Testimonials */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-between gap-10"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Quick Connect</h3>
              <div className="flex flex-wrap gap-4">
                <a href="https://wa.me/918888888888" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-green-500 text-white rounded-lg shadow hover:brightness-110 transition">
                  <FaWhatsapp /> WhatsApp
                </a>
                <a href="mailto:contact@saktrix.com" className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg shadow hover:brightness-110 transition">
                  <FaEnvelope /> Email
                </a>
                <a href="https://m.me/saktrixagency" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-5 py-3 bg-indigo-600 text-white rounded-lg shadow hover:brightness-110 transition">
                  <FaFacebookMessenger /> Messenger
                </a>
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/10 p-6 rounded-xl shadow-md border border-white/5">
              <p className="italic text-sm text-gray-700 dark:text-gray-300">
                “Saktrix helped us 10x our conversion rates in just 3 months. Incredible strategy & creative team.”
              </p>
              <p className="text-sm font-semibold mt-2 text-pink-600 dark:text-pink-400">— Alex, Growth Manager @TechBrand</p>
            </div>

            {/* Logos */}
            <div className="flex gap-6 items-center mt-4 opacity-70 grayscale dark:invert">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="client" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/5/59/Accenture_Logo.svg" alt="client" className="h-6" />
              <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Genpact_logo.svg" alt="client" className="h-6" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
