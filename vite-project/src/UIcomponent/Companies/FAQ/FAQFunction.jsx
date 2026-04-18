import { motion,AnimatePresence } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { FaCopy } from "react-icons/fa";
import { FaQuestionCircle } from 'react-icons/fa';
import { FaServer } from 'react-icons/fa';
import { FaHeartbeat } from 'react-icons/fa';



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





function FAQComponents ({htmlCode,reactCode,SectionShow}){
    const [view, setView] = useState("preview"); // 'preview' | 'code'
    const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

    const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
    };

  return(
    <>
        <section className="min-h-screen w-full my-15 bg-white  text-black dark:text-white flex flex-col items-center justify-center relative overflow-hidden  dark:bg-gray-900 rounded-2xl  shadow-2xl border border-gray-300  dark:border-gray-700 transition-all duration-500">
        
        <div className="min-h-screen w-full mx-auto">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300  dark:border-gray-800 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("preview")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "preview"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("code")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "code"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Code
              </button>
            </div>

            {view === "code" && (
              <div className="flex items-center space-x-2">
                <select
                  onChange={(e) => setCodeType(e.target.value)}
                  value={codeType}
                  className="rounded-md border-gray-300  dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  <FaCopy />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>



    {/* Hero page view start  */} 

   {view === "preview" ? (
    (SectionShow)

   ) : (
    <section className=" w-full overflow-x-scroll bg-gray-100 dark:bg-gray-900">
      <pre className="text-left text-sm  text-gray-800 dark:text-gray-200 w-full h-[90%] p-4 rounded">
         {codeType === "html" ? htmlCode : reactCode}
      </pre>
    </section>
   )}


</div>
</section>
      
             
    </>
  )
}

{/* Covert to (Pure HTML + Tailwind + Font Awesome or other free icons cdn as your wish)*/}


export function FAQdemoOne(){
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  }; 

  return(
  <FAQComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { useState } from 'react';
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

`
}

SectionShow={
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
}
  />
)
}

export function FAQdemoTwo(){
   const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return(
<>
<FAQComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { useState } from 'react';
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
                  className={\`transition-transform duration-300 \${activeIndex === index ? 'rotate-180' : ''}\`}
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

`
}
SectionShow={
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
}

/>
</>
)
}

export function FAQdemoThree(){
  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => setOpenIndex(openIndex === index ? null : index);

  return(
<>
<FAQComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { useState } from 'react';
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

`
}
SectionShow={
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
}
/>
</>
)
}

export function FAQdemoFour(){

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return(
<>
<FAQComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { useState } from 'react';
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
                  className={\`text-indigo-400 transition-transform duration-300 \${
                    openIndex === index ? 'rotate-180' : ''
                  }\`}
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

`
}
SectionShow={
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
}

/>
</>
)
}

export function FAQdemoFive(){

  const [openIndex, setOpenIndex] = useState(null);
  const toggleFAQ = (index) => {
  setOpenIndex(openIndex === index ? null : index);
  };

  return(
<>
<FAQComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { useState } from 'react';
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
                  className={\`text-blue-500 dark:text-blue-300 transition-transform duration-300 \${
                    openIndex === index ? 'rotate-180' : ''
                  }\`}
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

`
}
SectionShow={
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
}

/>
</>
)
}