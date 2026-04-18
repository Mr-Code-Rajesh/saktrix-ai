import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaServer, FaChevronDown } from 'react-icons/fa';

const saasFaqs = [
  {
    question: 'What is included in the free plan?',
    answer: 'Our free plan includes access to core features, up to 3 projects, and basic support.',
  },
  {
    question: 'Can I upgrade or downgrade at any time?',
    answer: 'Yes, you can upgrade, downgrade, or cancel your subscription at any time via your dashboard.',
  },
  {
    question: 'Is my data secure?',
    answer: 'Absolutely. We use industry-standard encryption, backups, and security protocols.',
  },
  {
    question: 'Do you offer team collaboration features?',
    answer: 'Yes, our Pro and Enterprise plans come with advanced team collaboration tools.',
  },
];

export const Faq4 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-indigo-100 to-white dark:from-[#0f172a] dark:to-[#1e2633] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white">FAQs for SaaS Users</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-xl mx-auto">
            Answers to the most common questions about our SaaS product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {saasFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-indigo-200 dark:border-indigo-500/30 rounded-xl bg-white dark:bg-slate-800 shadow-md transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between px-5 py-5 text-left text-base font-medium text-gray-900 dark:text-white hover:bg-indigo-50 dark:hover:bg-slate-700 transition"
              >
                <span className="flex items-center gap-2">
                  <FaServer className="text-indigo-500 dark:text-indigo-400" />
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-indigo-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-5 text-gray-700 dark:text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
