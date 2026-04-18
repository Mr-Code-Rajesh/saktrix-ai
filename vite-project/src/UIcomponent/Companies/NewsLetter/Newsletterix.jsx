import { motion } from 'framer-motion'
import { FaPaintBrush } from 'react-icons/fa'

export default function CreativeNewsletter() {
  return (
    <section className="bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-100 dark:from-[#1f1f1f] dark:via-[#2b2a35] dark:to-[#3b3b4f] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🎨 Let Your Inbox Inspire You
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get creative prompts, design tips, and curated inspiration every week.
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
            placeholder="you@inspiration.com"
            className="px-5 py-3 w-full sm:w-80 rounded-2xl border border-pink-300 dark:border-purple-500 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl transition-all shadow-md"
          >
            Subscribe <FaPaintBrush />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
