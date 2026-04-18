import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroGlassVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black overflow-hidden transition-colors">
      {/* Floating Glow Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500 blur-[160px] opacity-20 rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 blur-[200px] opacity-25 rounded-full z-0" />

      {/* Glassmorphic Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
          Beautiful UI. Blazing Speed.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Saktrix Powered
          </span>
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          Supercharge your project with responsive, aesthetic, and motion-enhanced components — all customizable in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="px-6 py-3 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Watch Demo ▶
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
