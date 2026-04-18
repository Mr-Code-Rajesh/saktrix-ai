import { motion } from "framer-motion";
import UiGlow from "/images/hero-glow-ui.png"; // Replace with your image

export default function HeroGlowCenter() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 bg-white dark:bg-zinc-900 transition-colors">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse">
            Design the Impossible
          </span>{" "}
          with Saktrix
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl"
        >
          Build interfaces that feel alive. Saktrix UI gives you creative freedom with stunning motion, styling, and developer-ready code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Start Creating
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Browse Components
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-10 w-full max-w-xl"
        >
          <img
            src={UiGlow}
            alt="Creative UI Glow"
            className="w-full rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] dark:shadow-[0_0_60px_rgba(236,72,153,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
