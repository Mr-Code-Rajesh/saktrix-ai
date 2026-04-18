import { motion } from 'framer-motion'
import {
  SiAdguard,
  SiHubspot,
  SiMailchimp,
  SiBuffer,
  SiSemrush,
  SiSurveymonkey,
} from 'react-icons/si'

const marketingLogos = [
  { icon: SiAdguard, name: 'Adguard' },
  { icon: SiHubspot, name: 'Hubspot' },
  { icon: SiMailchimp, name: 'Mailchimp' },
  { icon: SiBuffer, name: 'Buffer' },
  { icon: SiSemrush, name: 'SEMrush' },
  { icon: SiSurveymonkey, name: 'SurveyMonkey' },
]

export default function DigitalMarketingLogoCloud() {
  return (
    <section className="relative bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#111827] dark:to-[#1f2937] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Powered by Creative Marketing Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {marketingLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                >
                  <Icon className="text-4xl text-fuchsia-600 dark:text-fuchsia-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
