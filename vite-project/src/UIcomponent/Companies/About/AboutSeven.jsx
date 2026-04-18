import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaRocket, FaUsers, FaChartPie } from 'react-icons/fa';

export const AboutDigitalMarketing = () => {
  return (
    <section className="W-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left: Image or Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
            alt="Digital Marketing Strategy"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right: Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 dark:text-pink-400">
            <FaBullhorn className="text-xl" />
            Digital Marketing Experts
          </div>

          <h2 className="text-4xl font-extrabold leading-snug">
            Creative Strategies That Drive Real Results
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Digital, we blend data-driven strategies with creative brilliance to help brands rise above the noise.
            Whether it’s social media, SEO, PPC, or full-funnel marketing — we deliver results that speak for themselves.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <div className="flex items-center gap-3">
              <FaRocket className="text-purple-500 text-lg" />
              ROI-Focused Campaigns
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-500 text-lg" />
              Audience Engagement
            </div>
            <div className="flex items-center gap-3">
              <FaChartPie className="text-green-500 text-lg" />
              Real-Time Analytics
            </div>
            <div className="flex items-center gap-3">
              <FaBullhorn className="text-pink-500 text-lg" />
              Omni-Channel Promotion
            </div>
          </div>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Let's Boost Your Brand
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
