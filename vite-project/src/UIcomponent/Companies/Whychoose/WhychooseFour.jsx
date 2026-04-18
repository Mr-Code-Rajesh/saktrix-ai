import React from 'react';
import { motion } from 'framer-motion';
import { FaPiggyBank, FaLock, FaWallet, FaChartPie } from 'react-icons/fa';

const WhyChooseFintech = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-white via-blue-50 to-green-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold"
        >
          Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Saktrix Fintech</span>?
        </motion.h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Next-gen UI components purpose-built for finance apps, banking platforms, and trading dashboards.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          {
            icon: <FaPiggyBank className="text-green-500 text-3xl" />,
            title: "Finance-Ready UI",
            desc: "Prebuilt components tailored for financial services, lending, and investments.",
          },
          {
            icon: <FaLock className="text-blue-500 text-3xl" />,
            title: "Bank-Grade Security",
            desc: "Compliant with fintech regulations and secure UX patterns out of the box.",
          },
          {
            icon: <FaWallet className="text-purple-500 text-3xl" />,
            title: "Wallet Integrations",
            desc: "Built to support crypto, e-wallets, and multi-currency user interfaces.",
          },
          {
            icon: <FaChartPie className="text-pink-500 text-3xl" />,
            title: "Real-Time Insights",
            desc: "Charts, analytics, and live data modules with buttery-smooth animation.",
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

export default WhyChooseFintech;
