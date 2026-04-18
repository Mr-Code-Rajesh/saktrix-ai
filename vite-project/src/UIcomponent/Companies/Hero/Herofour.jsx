import { motion } from "framer-motion";
import Aivideo from '../../../assets/Video/Aivideo.mp4'

{/*
   Assets Needed:
Add your video inside public/videos/hero-tech-bg.mp4
  
*/}

export default function HeroVideoBg() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Aivideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-10 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Empower Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg sm:text-xl mt-6 text-gray-200 max-w-3xl mx-auto"
        >
          Launch unforgettable web experiences using Saktrix UI. Powered by performance, built with passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Launch Demo
          </button>
          <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition">
            View Library
          </button>
        </motion.div>
      </div>
    </section>
  );
}
