import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub } from 'react-icons/fa'

export const HeroStudentTech3D = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-800 dark:from-black dark:via-gray-900 dark:to-gray-950 text-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-16 z-10 relative">
        
        {/* Left Content */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight">
            <span className="text-cyan-400">Frontend Engineer</span> & UI Developer
          </h1>
          <p className="mt-4 text-gray-300 text-lg max-w-lg mx-auto lg:mx-0">
            Turning designs into dynamic user experiences using cutting-edge tech and clean code.
          </p>
          <div className="mt-6 flex gap-4 justify-center lg:justify-start">
            <FaHtml5 className="text-orange-500" size={28} />
            <FaCss3Alt className="text-blue-500" size={28} />
            <FaJs className="text-yellow-400" size={28} />
            <FaReact className="text-cyan-400" size={28} />
            <a href="#" className="text-white hover:text-purple-400">
              <FaGithub size={28} />
            </a>
          </div>
        </motion.div>

        {/* Right Code 3D Box */}
        <motion.div
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex-1 relative w-full max-w-lg"
        >
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700 transform rotate-x-6 rotate-y-3">
            <div className="bg-gray-900 p-4 rounded-md text-green-400 font-mono text-sm leading-relaxed">
              <pre>
{`function sayHi(name) {
  console.log(\`Hello, \${name}!\`);
}

const user = "Alex";
sayHi(user);`}
              </pre>
            </div>
          </div>
          {/* Glowing Gradient Blur */}
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 opacity-20 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  )
}
