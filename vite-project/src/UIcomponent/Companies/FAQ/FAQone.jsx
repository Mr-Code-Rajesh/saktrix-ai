import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const faqData = [
  {
    question: "What is Saktrix UI?",
    answer:
      "Saktrix UI is a premium component library offering production-ready, animated, and ultra-customizable UI blocks for modern web apps."
  },
  {
    question: "Is it free to use?",
    answer:
      "You can use all components in your personal and commercial projects. No attribution required."
  },
  {
    question: "Does it support dark mode?",
    answer:
      "Yes! Every component is built with dark mode support using Tailwind's 'dark:' utility classes."
  },
  {
    question: "Can I customize the components?",
    answer:
      "Absolutely. Every element is easily customizable with Tailwind classes and inline styles."
  },
];

export default function FAQModernAccordion() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
      };

  return (
    <section className="min-h-screen bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-gray-950 py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Frequently Asked <span className="text-indigo-500">Questions</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-12">
          Get all the answers about our components, licensing, and usage.
        </p>

        <div className="space-y-4 text-left">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-6 focus:outline-none text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                </motion.span>
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={openIndex === index ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-6 pb-6 text-gray-700 dark:text-gray-300"
              >
                {faq.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
