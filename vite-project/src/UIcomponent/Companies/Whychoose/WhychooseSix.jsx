import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaBullhorn, FaPaintBrush, FaSearchDollar } from 'react-icons/fa';

const WhyChooseMarketing = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-yellow-50 via-white to-pink-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Glow Ball */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-yellow-400 via-pink-400 to-red-500 blur-[160px] opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Saktrix Marketing</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We build blazing-fast, high-converting components for digital campaigns, funnels, and client dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaChartLine className="text-pink-500 text-3xl" />,
            title: 'Conversion Focused',
            desc: 'Optimized layouts that drive leads, clicks, and customer actions.',
          },
          {
            icon: <FaBullhorn className="text-red-500 text-3xl" />,
            title: 'Campaign Ready',
            desc: 'Plug-and-play banners, CTAs, and announcement UI blocks.',
          },
          {
            icon: <FaPaintBrush className="text-yellow-500 text-3xl" />,
            title: 'Creative Friendly',
            desc: 'Designed for stunning visuals, brand kits, and motion-rich showcases.',
          },
          {
            icon: <FaSearchDollar className="text-green-500 text-3xl" />,
            title: 'SEO & PPC Optimized',
            desc: 'Snappy, semantic, and lightweight components that Google loves.',
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            className="p-6 rounded-2xl bg-white/80 dark:bg-black/40 shadow-lg backdrop-blur border border-gray-200 dark:border-white/10 hover:scale-105 transition-transform"
          >
            <div className="flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseMarketing;
