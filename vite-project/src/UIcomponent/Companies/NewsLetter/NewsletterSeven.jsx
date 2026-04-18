import { motion } from 'framer-motion'
import { FaCode } from 'react-icons/fa'

export default function DevNewsletter() {
  return (
    <section className="bg-gradient-to-r from-slate-100 via-slate-200 to-slate-300 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#1e293b] py-20 font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3"
        >
          👨‍💻 Dev Logs in Your Inbox
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          viewport={{ once: true }}
          className="text-gray-700 dark:text-gray-300 mb-8"
        >
          Weekly code insights, tool updates, and productivity hacks.
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
            placeholder="dev@you.com"
            className="px-5 py-3 w-full sm:w-80 rounded-md border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md transition-all shadow-lg"
          >
            Subscribe <FaCode />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
