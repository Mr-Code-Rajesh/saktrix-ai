import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function HeroTypewriter() {
  const phrases = ["Build. Launch. Repeat.", "Design Faster.", "Deploy Smarter."];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout;
    if (typing && text.length < phrases[index].length) {
      timeout = setTimeout(() => {
        setText(prev => prev + phrases[index][text.length]);
      }, 80);
    } else if (typing) {
      timeout = setTimeout(() => setTyping(false), 1200);
    } else {
      timeout = setTimeout(() => {
        setText("");
        setTyping(true);
        setIndex((index + 1) % phrases.length);
      }, 1000);
    }
    return () => clearTimeout(timeout);
  }, [text, typing, index]);

  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black transition-colors px-6">
      {/* Background Glows */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] bg-indigo-500 blur-[180px] opacity-20 dark:opacity-30 rounded-full z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 blur-[160px] opacity-25 dark:opacity-35 rounded-full z-0" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold text-zinc-900 dark:text-white mb-6">
          Launch with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400">
            Saktrix UI
          </span>
        </h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-700 dark:text-zinc-300 min-h-[2.5rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {text}
          <span className="animate-pulse">|</span>
        </motion.p>

        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Explore Docs
          </button>
        </div>
      </div>

      {/* Scroll Cue Arrow */}
      <div className="absolute bottom-6 z-10">
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="text-3xl text-zinc-700 dark:text-zinc-300"
        >
          ↓
        </motion.div>
      </div>
    </section>
  );
}
