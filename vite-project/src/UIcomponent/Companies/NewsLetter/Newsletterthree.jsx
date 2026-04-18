import { motion } from 'framer-motion'
import { FaHeartbeat } from 'react-icons/fa'

export default function MedicalNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-cyan-50 to-teal-100 dark:from-[#0f172a] dark:to-[#134e4a] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-4"
        >
          🩺 Stay Informed. Stay Healthy.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get the latest healthcare updates, wellness tips, and medical news.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-all shadow-md"
          >
            Subscribe <FaHeartbeat />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
