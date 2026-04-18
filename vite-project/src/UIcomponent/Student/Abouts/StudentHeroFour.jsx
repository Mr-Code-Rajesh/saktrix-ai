import { motion } from 'framer-motion';
import { FaEnvelope, FaUserGraduate, FaCode } from 'react-icons/fa';

export default function AboutAIIdentityCard() {
  return (
    <section className="min-h-screen py-20 px-6 bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative max-w-md w-full bg-gradient-to-br from-blue-100 via-white to-blue-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-950 border border-blue-400 dark:border-cyan-600 shadow-2xl rounded-3xl p-8 overflow-hidden"
      >
        {/* Glowing border animation */}
        <div className="absolute inset-0 border-4 border-blue-500 dark:border-cyan-400 rounded-3xl animate-pulse pointer-events-none opacity-20"></div>

        {/* Avatar */}
        <div className="flex justify-center mb-6 relative">
          <motion.img
            src="https://i.pravatar.cc/150?img=5"
            alt="Avatar"
            className="w-28 h-28 rounded-full border-4 border-blue-400 dark:border-cyan-400 z-10 relative"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          {/* Scan line */}
          <motion.div
            className="absolute top-0 left-1/2 w-32 h-1 bg-blue-500 dark:bg-cyan-400 opacity-30"
            initial={{ y: -20 }}
            animate={{ y: 80 }}
            transition={{ duration: 1.8, repeat: Infinity, repeatType: 'reverse' }}
          />
        </div>

        {/* Identity Info */}
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-center">
            Aiden Techsmith
          </h2>
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Aspiring Frontend Developer | AI Enthusiast
          </p>

          <div className="grid gap-3 mt-6 text-sm">
            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-500 dark:text-cyan-400" />
              <span className="text-gray-700 dark:text-gray-300">aiden.techsmith@email.com</span>
            </div>
            <div className="flex items-center gap-3">
              <FaUserGraduate className="text-blue-500 dark:text-cyan-400" />
              <span className="text-gray-700 dark:text-gray-300">CS Undergrad – Class of 2025</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCode className="text-blue-500 dark:text-cyan-400" />
              <span className="text-gray-700 dark:text-gray-300">React, Next.js, Tailwind</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
