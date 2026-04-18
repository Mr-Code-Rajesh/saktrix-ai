import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle } from 'react-icons/fa';

const faqsTwo = [
  {
    question: 'What platforms do you specialize in?',
    answer: 'We create campaigns for Instagram, Facebook, YouTube, and Google Ads — tailored to your brand.',
  },
  {
    question: 'Do you offer SEO services?',
    answer: 'Yes, our SEO team helps improve your visibility organically with keyword targeting and content strategy.',
  },
  {
    question: 'Can you manage our social media accounts?',
    answer: 'Absolutely! We offer full social media management including content, engagement, and reporting.',
  },
  {
    question: 'How do we measure campaign success?',
    answer: 'We use real-time dashboards and monthly reports to show performance, reach, and ROI.',
  },
];

export const Faq5 = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="relative bg-white dark:bg-[#0e0e11] py-20 px-6 overflow-hidden">
      {/* Gradient Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 rounded-full opacity-20 blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full opacity-20 blur-3xl -z-10" />

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Title Section */}
        <div>
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Still have questions? Here are the most common things clients ask before they start their digital marketing journey with us.
          </p>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqsTwo.map((faq, index) => (
            <div key={index} className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left text-lg font-medium text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-[#1a1a1a] transition"
              >
                <span className="flex items-center gap-2">
                  <FaQuestionCircle className="text-pink-500" />
                  {faq.question}
                </span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-pink-400"
                >
                  ▼
                </motion.span>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-5 pb-4 text-gray-700 dark:text-gray-300"
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
