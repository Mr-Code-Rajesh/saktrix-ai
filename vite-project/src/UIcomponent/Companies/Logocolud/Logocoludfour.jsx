import { motion } from 'framer-motion'
import {
  SiGithub,
  SiVisualstudiocode,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'

const devToolLogos = [
  { icon: SiGithub, name: 'GitHub' },
  { icon: SiVisualstudiocode, name: 'VS Code' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiVercel, name: 'Vercel' },
]

export default function TechToolsLogoCloud() {
  return (
    <section className="bg-gray-50 dark:bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 font-mono">
          Powered by Developer Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {devToolLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                >
                  <Icon className="text-4xl text-gray-900 dark:text-cyan-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
