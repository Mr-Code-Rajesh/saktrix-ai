import { motion } from 'framer-motion'
import {
  SiGoogle,
  SiMicrosoft,
  SiSlack,
  SiNotion,
  SiDropbox,
  SiZendesk,
} from 'react-icons/si'

const logos = [
  { icon: SiGoogle, name: 'Google' },
  { icon: SiMicrosoft, name: 'Microsoft' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
  { icon: SiDropbox, name: 'Dropbox' },
  { icon: SiZendesk, name: 'Zendesk' },
]

export default function SaaSLogoCloud() {
  return (
    <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Trusted by top SaaS companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-4xl text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
