import { motion } from 'framer-motion'
import { FaGithub, FaDribbble, FaBehance, FaEnvelope } from 'react-icons/fa'

const floatingVariants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

export const HeroStudentCreative = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-gradient-to-br from-fuchsia-600 via-indigo-600 to-blue-700 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-10 z-10 relative">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Hi, I’m <span className="text-yellow-300">Alex</span>
            <br />A Creative Frontend Developer
          </h1>
          <p className="mt-4 text-lg text-gray-200 dark:text-gray-300 max-w-xl mx-auto lg:mx-0">
            Passionate about blending design and logic to craft interactive, beautiful, and smooth digital experiences.
          </p>
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <a href="#" className="p-3 rounded-full bg-white text-black hover:bg-yellow-300 transition">
              <FaGithub size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-black hover:bg-pink-500 transition">
              <FaDribbble size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-black hover:bg-blue-500 transition">
              <FaBehance size={20} />
            </a>
            <a href="#" className="p-3 rounded-full bg-white text-black hover:bg-red-500 transition">
              <FaEnvelope size={20} />
            </a>
          </div>
        </div>

        {/* Right Avatar Bubble */}
        <div className="flex-1 relative flex items-center justify-center">
          <motion.img
            src="/student-avatar1.png"
            alt="Student"
            className="w-64 h-64 object-cover rounded-full border-8 border-white shadow-xl"
            variants={floatingVariants}
            animate="animate"
          />

          {/* Floating Mini Icons */}
          <motion.img
            src="/float-react.png"
            alt="React"
            className="w-10 absolute top-10 left-12"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.2 }}
          />
          <motion.img
            src="/float-html.png"
            alt="HTML"
            className="w-10 absolute top-6 right-16"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.4 }}
          />
          <motion.img
            src="/float-js.png"
            alt="JS"
            className="w-10 absolute bottom-8 left-20"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.6 }}
          />
          <motion.img
            src="/float-css.png"
            alt="CSS"
            className="w-10 absolute bottom-6 right-14"
            variants={floatingVariants}
            animate="animate"
            transition={{ delay: 0.8 }}
          />
        </div>
      </div>
    </section>
  )
}
