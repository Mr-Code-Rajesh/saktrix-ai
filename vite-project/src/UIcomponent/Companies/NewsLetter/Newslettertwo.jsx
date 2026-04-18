import { motion } from 'framer-motion'
import { FaRocket } from 'react-icons/fa'

export default function StartupNewsletter() {
  return (
    <section className="bg-gradient-to-tr min-h-screen from-fuchsia-100 via-pink-100 to-rose-100 dark:from-[#1a1a2e] dark:via-[#16213e] dark:to-[#0f3460] py-20">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-extrabold text-gray-800 dark:text-white mb-4"
        >
          🚀 Join the Next-Gen Founders Network
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="text-gray-600 dark:text-gray-300 mb-8"
        >
          Get exclusive growth hacks, startup guides & VC updates straight to your inbox.
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
            placeholder="you@startup.com"
            className="px-5 py-3 w-full sm:w-80 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          />
          <button
            type="submit"
            className="flex items-center gap-2 px-6 py-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-xl transition-all shadow-xl"
          >
            Subscribe <FaRocket />
          </button>
        </motion.form>
      </div>
    </section>
  )
}
