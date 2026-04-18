import { motion } from "framer-motion";
import { FaGithub, FaTwitter, FaGlobe, FaLinkedin } from "react-icons/fa";

export const HeroGalaxy = () => {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-black dark:from-black dark:via-gray-900 dark:to-black overflow-hidden text-white">
      {/* Particle Background (You can animate more if you want later) */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full overflow-hidden opacity-30">
          <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-white rounded-full animate-ping"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping"></div>
          <div className="absolute bottom-10 left-2/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="relative z-10 text-center max-w-3xl"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-white/20 shadow-lg shadow-cyan-500/30 bg-gradient-to-br from-cyan-400 to-blue-700 dark:from-cyan-600 dark:to-blue-900"
        >
          <img
            src="/your-avatar.png"
            alt="Dev Avatar"
            className="rounded-full object-cover w-full h-full"
          />
        </motion.div>

        <h1 className="text-4xl md:text-5xl font-bold">
          Exploring Code Across the Galaxy 🚀
        </h1>
        <p className="mt-4 text-lg text-gray-300 dark:text-gray-400">
          I'm a student developer passionate about building solutions that feel out of this world.
        </p>

        <div className="mt-8 flex justify-center gap-5">
          <a href="#" className="hover:text-cyan-400 transition"><FaGithub size={24} /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaTwitter size={24} /></a>
          <a href="#" className="hover:text-green-400 transition"><FaGlobe size={24} /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaLinkedin size={24} /></a>
        </div>
      </motion.div>
    </section>
  );
};
