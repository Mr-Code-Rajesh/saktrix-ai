import { motion } from 'framer-motion'
import {
  SiMayoClinic,
  SiCvshealth,
  SiModerna,
  SiPfizer,
  SiAbbvie,
  SiJohnsonandjohnson,
} from 'react-icons/si'

const medicalLogos = [
  { icon: SiMayoClinic, name: 'Mayo Clinic' },
  { icon: SiCvshealth, name: 'CVS Health' },
  { icon: SiModerna, name: 'Moderna' },
  { icon: SiPfizer, name: 'Pfizer' },
  { icon: SiAbbvie, name: 'Abbvie' },
  { icon: SiJohnsonandjohnson, name: 'J&J' },
]

export default function MedicalLogoCloud() {
  return (
    <section className="bg-blue-50 dark:bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12">
          Trusted by Healthcare Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {medicalLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm dark:shadow-md"
                >
                  <Icon className="text-4xl text-blue-600 dark:text-blue-300 transition-all" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
