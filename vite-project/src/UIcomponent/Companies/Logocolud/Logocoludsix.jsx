import { motion } from 'framer-motion'
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiChase,
  SiGoldmansachs,
} from 'react-icons/si'

const financeLogos = [
  { icon: SiVisa, name: 'Visa' },
  { icon: SiMastercard, name: 'Mastercard' },
  { icon: SiAmericanexpress, name: 'Amex' },
  { icon: SiPaypal, name: 'PayPal' },
  { icon: SiChase, name: 'Chase' },
  { icon: SiGoldmansachs, name: 'Goldman Sachs' },
]

export default function FinanceLogoCloud() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Trusted by Financial Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {financeLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md"
                >
                  <Icon className="text-4xl text-blue-800 dark:text-blue-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
