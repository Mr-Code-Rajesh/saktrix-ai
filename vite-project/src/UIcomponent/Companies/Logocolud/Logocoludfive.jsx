import { motion } from 'framer-motion'
import {
  SiDribbble,
  SiBehance,
  SiFigma,
  SiAdobe,
  SiSketch,
  SiCanva,
} from 'react-icons/si'

const portfolioLogos = [
  { icon: SiDribbble, name: 'Dribbble' },
  { icon: SiBehance, name: 'Behance' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiAdobe, name: 'Adobe' },
  { icon: SiSketch, name: 'Sketch' },
  { icon: SiCanva, name: 'Canva' },
]

export default function CreativePortfolioLogoCloud() {
  return (
    <section className="bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Featured In Creative Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {portfolioLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
                  className="p-4 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all"
                >
                  <Icon className="text-4xl text-pink-500 dark:text-pink-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
