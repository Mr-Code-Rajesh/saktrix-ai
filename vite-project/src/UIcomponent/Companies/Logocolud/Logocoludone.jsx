import { motion } from 'framer-motion'
import {
  SiOpenai,
  SiTensorflow,
  SiPython,
  SiAmazonaws,
  SiMicrosoftazure,
  SiGooglecloud,
} from 'react-icons/si'

const aiLogos = [
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiPython, name: 'Python' },
  { icon: SiAmazonaws, name: 'AWS' },
  { icon: SiMicrosoftazure, name: 'Azure' },
  { icon: SiGooglecloud, name: 'Google Cloud' },
]

export default function AiInnovationLogoCloud() {
  return (
    <section className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-black dark:to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-12">
          Built on AI & Innovation
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {aiLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all backdrop-blur-lg"
                >
                  <Icon className="text-4xl text-cyan-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
