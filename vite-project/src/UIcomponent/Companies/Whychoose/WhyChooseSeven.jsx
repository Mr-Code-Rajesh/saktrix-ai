import React from 'react';
import { motion } from 'framer-motion';
import { FaTruckMoving, FaMapMarkedAlt, FaBoxes, FaClock } from 'react-icons/fa';

const WhyChooseLogistics = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-blue-50 via-gray-100 to-teal-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Glow Layer */}
      <div className="absolute bottom-0 right-1/2 translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-teal-400 via-blue-500 to-gray-500 blur-[160px] opacity-20 -z-10 rounded-full"></div>

      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-teal-500 to-green-500">Saktrix Logistics</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We help logistics providers build next-gen platforms that move faster, track smarter, and scale globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaTruckMoving className="text-blue-600 text-3xl" />,
            title: 'Fleet Management',
            desc: 'Real-time dashboard components for vehicle tracking and task routing.',
          },
          {
            icon: <FaMapMarkedAlt className="text-green-600 text-3xl" />,
            title: 'Live Location UI',
            desc: 'Geolocation-ready UI blocks built for integrations with map APIs.',
          },
          {
            icon: <FaBoxes className="text-yellow-500 text-3xl" />,
            title: 'Inventory Interfaces',
            desc: 'Grid views, filters, and stock visualizers tailored for warehouses.',
          },
          {
            icon: <FaClock className="text-teal-500 text-3xl" />,
            title: 'On-Time Delivery UX',
            desc: 'Components that display delivery ETAs, status updates, and SLAs.',
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

export default WhyChooseLogistics;
