import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaHeartbeat } from 'react-icons/fa';

const medicalFaqs = [
  {
    question: 'What services does your clinic offer?',
    answer: 'We provide general checkups, diagnostics, pediatric care, mental health consultations, and specialized treatments.',
  },
  {
    question: 'Do you accept insurance plans?',
    answer: 'Yes, we accept most major insurance providers. Contact our front desk for specific plan eligibility.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book online through our portal or call our 24/7 support line to schedule your appointment.',
  },
  {
    question: 'Are emergency services available?',
    answer: 'Yes, our emergency care unit is open 24/7 with qualified staff ready to assist you immediately.',
  },
];

export const Faq3 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-blue-100 to-white dark:from-[#0f172a] dark:to-[#1e293b] transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 dark:text-white">Frequently Asked Questions</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3">
            Get answers about our medical services, booking, and more.
          </p>
        </div>

        <div className="space-y-6">
          {medicalFaqs.map((faq, index) => (
            <div
              key={index}
              className="border border-blue-200 dark:border-gray-600 rounded-xl overflow-hidden shadow-md dark:shadow-blue-900 bg-white dark:bg-slate-800 transition"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-5 text-left text-lg font-medium text-blue-900 dark:text-white hover:bg-blue-50 dark:hover:bg-slate-700 transition"
              >
                <span className="flex items-center gap-3">
                  <FaHeartbeat className="text-red-400 dark:text-red-300" />
                  {faq.question}
                </span>
                <FaChevronDown
                  className={`text-blue-500 dark:text-blue-300 transition-transform duration-300 ${
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
                    className="px-6 pb-5 text-gray-700 dark:text-gray-300"
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
