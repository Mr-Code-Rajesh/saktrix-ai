import { motion } from "framer-motion";
import HeroImg from "/images/hero-split.png"; // Replace with your image path

export default function HeroSplit() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Build Next-Level{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Interfaces
            </span>{" "}
            with Saktrix
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Discover ultra-modern UI components, animations, and effects — all production-ready and easy to integrate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition">
              Explore Library
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition">
              Documentation
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-[500px] flex justify-center"
        >
          <img
            src={HeroImg}
            alt="UI Illustration"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
