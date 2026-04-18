import { motion } from 'framer-motion'
import { FaBullhorn } from 'react-icons/fa'

export default function MarketingNewsletter() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-pink-100 via-fuchsia-200 to-purple-200 dark:from-[#2e1065] dark:via-[#6b21a8] dark:to-[#581c87] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          📣 Boost Your Brand With Pro Tips
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Subscribe to weekly growth hacks, trends, and social media strategies.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-lg"
          >
            Subscribe <FaBullhorn />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
