import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaPlus, FaMinus, FaHeadset } from 'react-icons/fa'
import { MdMarkEmailRead } from "react-icons/md";

const faqs = [
   {
    question: "🎫 Can I use Saktrix UI components for commercial projects?",
    answer:
      "Yes! All components are license-free for personal and commercial use. Build anything — portfolios, client sites, dashboards, and more.",
  },
  {
    question: "🔁 Is there any refund policy?",
    answer:
      "Due to the nature of digital products, we do not offer refunds after purchase. Please preview the free components before upgrading.",
  },
  {
    question: "🔒 Do I need to credit Saktrix UI when I use the components?",
    answer:
      "No need! You can use Saktrix UI components freely in your projects — no attribution required, but we always appreciate it.",
  },
  {
    question: "💼 How do I get team access?",
    answer:
      "We offer a special Team Pack that includes 5 user seats. Perfect for agencies or startups. Choose 'Team Access' at checkout.",
  },
  {
    question: "🤝 How does the Referral Partner Program work?",
    answer:
      "Refer your friends to Saktrix UI! You’ll earn **20% credit** for every product they purchase. If 10 friends each buy a $19 product — you get **$38** credited to your account. Credits can be used for future purchases or upgrades.",
  },
  {
    question: ' ❓ Will I receive updates after purchasing?',
    answer:
      'Absolutely! All lifetime and subscription users receive ongoing updates with new components and fixes.',
  },
  {
    question: ' ✔️ What tech stack is used in Saktrix UI?',
    answer:
      'Saktrix UI is built using React, Tailwind CSS, and Framer Motion — optimized for modern developer experience.',
  },
  {
    question: ' 🖥️ Do you offer technical support?',
    answer:
      'Saktrix UI is a self-serve product. We do not offer technical support. However, if you have a bug to report, please open an issue here and we will fix it as soon as possible.',
  },
]

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <motion.div
      layout
      className={`rounded-2xl border mb-4 transition-all overflow-hidden ${
        isOpen ? 'bg-white/10 border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]' : 'bg-white/5 border-white/5'
      }`}
    >
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center text-left p-6"
      >
        <h4 className={`text-lg font-bold transition-colors ${isOpen ? 'text-cyan-400' : 'text-white'}`}>
          {faq.question}
        </h4>
        <div className={`p-2 rounded-lg transition-colors ${isOpen ? 'bg-cyan-500 text-white' : 'bg-white/5 text-slate-500'}`}>
          {isOpen ? <FaMinus className="text-sm" /> : <FaPlus className="text-sm" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
              {faq.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export const FAQSection =()=> {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="bg-slate-950 py-24 px-6 neural-grid">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-white mb-6"
        >
          Frequently Asked <span className="saktrix-aurora-text">Questions</span>
        </motion.h2>
        <p className="mb-16 text-lg text-slate-400 max-w-2xl mx-auto">
          Neural protocols, licensing, and integration — everything you need to know about the Saktrix ecosystem.
        </p>

        <div className="text-left">
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => toggleFAQ(i)}
            />
          ))}
        </div>

        <div className="mt-16 p-8 rounded-3xl border border-white/5 bg-white/5 backdrop-blur-md relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-3 bg-cyan-500/10 text-cyan-400 rounded-bl-2xl">
            <FaHeadset className="text-xl" />
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-left">
              <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
              <p className="text-slate-400 text-sm">Our neural support team is available 24/7 to assist with your integration.</p>
            </div>
            <button className="px-8 py-3 bg-white text-black font-bold rounded-xl hover:bg-cyan-400 transition-all shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                Email Prototype
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
