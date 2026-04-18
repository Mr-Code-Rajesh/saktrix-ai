import { motion } from "framer-motion";
import GlowPanel from "/images/hero-ui-glow-side.png"; // Replace with unique image


export const HeroSplitGlow = ()=> {
  return (
    <section className="relative w-full min-h-screen flex items-center px-6 sm:px-12 py-20 bg-white dark:bg-zinc-900 transition-colors">
      {/* Glowing Background Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-indigo-600 blur-3xl opacity-30 rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
              Next-Level Interfaces
            </span>{" "}
            for Every Creator
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 text-lg">
            Saktrix helps you build stunning user experiences — faster, smarter, and cleaner — with prebuilt motion-powered components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
              Explore Components
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={GlowPanel}
            alt="UI Panel Glowing"
            className="w-full max-w-lg mx-auto rounded-xl shadow-xl border border-white/10 dark:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
