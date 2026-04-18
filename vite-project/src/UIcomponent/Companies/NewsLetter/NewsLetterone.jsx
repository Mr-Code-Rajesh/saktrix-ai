import { motion } from 'framer-motion'
import { FiSend } from 'react-icons/fi'

export default function SaaSNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-blue-50 to-blue-100 dark:from-[#0f172a] dark:to-[#1e293b] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Stay Ahead With Product Updates
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to receive the latest features, improvements & industry insights.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="px-5 py-3 w-full sm:w-80 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition-all shadow-lg"
          >
            Subscribe <FiSend />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
