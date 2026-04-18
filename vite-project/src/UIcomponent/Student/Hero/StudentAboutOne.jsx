import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function StudentHero1() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 text-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      <div className="max-w-5xl px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-6"
        >
          Hey, I'm <span className="text-yellow-300">Alex Carter</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-lg md:text-xl text-white/80 dark:text-gray-300 mb-8"
        >
          A passionate <span className="font-semibold text-white">Computer Science Student</span> building web apps, solving real-world problems, and learning every day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="flex justify-center gap-6"
        >
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-yellow-300 transition" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-yellow-300 transition" />
          </a>
          <a href="mailto:alex@email.com">
            <FaEnvelope className="text-3xl hover:text-yellow-300 transition" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
