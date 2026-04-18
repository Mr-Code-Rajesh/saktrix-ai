import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaQuestionCircle } from 'react-icons/fa';

const faqs = [
  {
    question: 'What is Saktrix UI?',
    answer: 'Saktrix UI is a modern React component library with animated, accessible, and responsive designs for any business type.',
  },
  {
    question: 'Is it compatible with Tailwind CSS?',
    answer: 'Yes, all components are built using Tailwind CSS for fast styling and customization.',
  },
  {
    question: 'Does it support dark mode?',
    answer: 'Absolutely. Every component supports both light and dark themes using Tailwind’s dark mode classes.',
  },
  {
    question: 'Can I use these components commercially?',
    answer: 'Yes, all components are free of copyright issues and ready for commercial projects.',
  },
];

export const Faq2 = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 dark:from-gray-900 dark:via-gray-800 dark:to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white">Frequently Asked <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Questions</span></h2>
          <p className="mt-4 text-gray-300 max-w-xl mx-auto">Find answers to common questions about our UI library and features.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/5 dark:bg-white/10 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex justify-between items-center w-full text-left text-lg font-semibold text-white"
              >
                <span className="flex items-center gap-3">
                  <FaQuestionCircle className="text-yellow-400" />
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}
                />
              </button>

              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="mt-4 overflow-hidden text-gray-300"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
