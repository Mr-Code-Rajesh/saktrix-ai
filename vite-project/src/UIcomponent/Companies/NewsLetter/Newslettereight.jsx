import { motion } from 'framer-motion'
import { FaRobot } from 'react-icons/fa'

export default function AINewsletter() {
  return (
    <section className="bg-gradient-to-br from-[#e0f7fa] via-[#f1f1f1] to-[#f8bbd0] dark:from-[#0f0c29] dark:via-[#302b63] dark:to-[#24243e] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🤖 Stay Ahead with AI Trends
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Get weekly insights on artificial intelligence, innovation, and automation — right to your inbox.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="future@you.ai"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-700 text-white rounded-lg transition-all shadow-lg"
          >
            Subscribe <FaRobot />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
