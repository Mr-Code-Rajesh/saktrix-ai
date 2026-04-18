import { motion } from 'framer-motion'
import {
  SiAirbnb,
  SiSpotify,
  SiUber,
  SiZoom,
  SiStripe,
  SiPinterest,
} from 'react-icons/si'

const startupLogos = [
  { icon: SiAirbnb, name: 'Airbnb' },
  { icon: SiSpotify, name: 'Spotify' },
  { icon: SiUber, name: 'Uber' },
  { icon: SiZoom, name: 'Zoom' },
  { icon: SiStripe, name: 'Stripe' },
  { icon: SiPinterest, name: 'Pinterest' },
]

export default function StartupLogoCloud() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Backed by innovative startups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {startupLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ rotate: 3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl"
                >
                  <Icon className="text-4xl text-gray-700 dark:text-gray-300" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
