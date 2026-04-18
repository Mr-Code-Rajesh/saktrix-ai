import { motion } from 'framer-motion'
import { FaRobot, FaCodeBranch, FaGraduationCap, FaUserAstronaut } from 'react-icons/fa'

export const HeroStudentAIBio = () => {
  const timeline = [
    {
      year: '2020',
      title: 'Started Coding',
      icon: <FaCodeBranch className="text-blue-400" size={22} />,
      desc: 'Wrote my first line of HTML and got addicted to building things.'
    },
    {
      year: '2022',
      title: 'Completed CS Degree',
      icon: <FaGraduationCap className="text-yellow-400" size={22} />,
      desc: 'Graduated with a Computer Science degree, specializing in frontend dev.'
    },
    {
      year: '2023',
      title: 'Built 10+ Projects',
      icon: <FaUserAstronaut className="text-pink-400" size={22} />,
      desc: 'Created full-stack apps, portfolio sites, and contributed to open source.'
    }
  ]

  return (
    <section className="w-full min-h-screen px-6 py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors duration-500 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-16">
        
        {/* Left AI Intro */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500">
              Hello, I’m coded for creation.
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-lg mx-auto lg:mx-0">
            My story is powered by curiosity and compiled through creativity. Here’s my journey so far:
          </p>
          <div className="mt-6 text-cyan-400">
            <FaRobot size={28} className="inline-block mr-2" />
            Version 1.0 | Student Developer
          </div>
        </motion.div>

        {/* Timeline Right */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 w-full max-w-xl"
        >
          <div className="space-y-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className="bg-white dark:bg-gray-800 shadow-lg rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-gray-100 dark:bg-gray-700">{item.icon}</div>
                  <div>
                    <h4 className="text-xl font-semibold">{item.title}</h4>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{item.year}</span>
                  </div>
                </div>
                <p className="mt-3 text-gray-600 dark:text-gray-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
