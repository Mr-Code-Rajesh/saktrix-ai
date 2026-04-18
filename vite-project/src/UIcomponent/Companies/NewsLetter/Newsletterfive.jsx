import { motion } from 'framer-motion'
import { FaChartLine } from 'react-icons/fa'

export default function FinanceNewsletter() {
  return (
    <section className="bg-gradient-to-r from-gray-100 via-blue-100 to-gray-200 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
        >
          💼 Financial Insights. Direct to Your Inbox.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly updates on markets, investing tips, and smart money moves.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="your@email.com"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaChartLine />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
