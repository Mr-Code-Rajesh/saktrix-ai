import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaGlobe, FaTwitter } from "react-icons/fa";

export const HeroAIInterface = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-950 via-black to-gray-900 dark:from-black dark:via-gray-900 dark:to-black text-white overflow-hidden">
      {/* Glowing Grid Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_#2a2a2a_1px,_transparent_1px)] [background-size:20px_20px] opacity-20 z-0"></div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.1 }}
        className="relative z-10 max-w-4xl text-center"
      >
        {/* Floating AI Avatar */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full border-4 border-cyan-400 bg-gradient-to-br from-cyan-500 to-blue-700 shadow-2xl shadow-cyan-500/30 mb-6"
        >
          <img
            src="/ai-avatar.png"
            alt="AI Avatar"
            className="rounded-full w-full h-full object-cover"
          />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          Hello, I'm <span className="text-cyan-400">CodeNova</span> 🤖
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          I'm your AI-powered developer companion, built with React, JavaScript, and curiosity.
        </motion.p>

        {/* Terminal-like Typewriter */}
        <div className="mt-8 text-sm md:text-base font-mono text-green-400 bg-black/50 border border-green-600 rounded-lg p-4 inline-block text-left max-w-xl mx-auto shadow-inner">
          <span className="animate-pulse"> Currently debugging the universe...</span>
        </div>

        {/* Social Icons */}
        <div className="mt-8 flex justify-center gap-6 text-white">
          <a href="#" className="hover:text-cyan-400 transition"><FaGithub size={22} /></a>
          <a href="#" className="hover:text-blue-500 transition"><FaLinkedin size={22} /></a>
          <a href="#" className="hover:text-green-400 transition"><FaGlobe size={22} /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTwitter size={22} /></a>
        </div>
      </motion.div>
    </section>
  );
};
