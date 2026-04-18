import { motion } from "framer-motion";
import { FaCode, FaPaintBrush } from "react-icons/fa";

export const HeroSplitMirror = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-4 py-20 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-black transition-colors duration-500">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Left: Code Side */}
        <motion.div
          initial={{ x: -60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-black text-white p-8 rounded-3xl shadow-lg border border-gray-800 relative overflow-hidden"
        >
          <FaCode className="text-4xl text-cyan-400 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Code with Purpose</h2>
          <p className="text-gray-300 mb-6">
            I write scalable, maintainable, and accessible code with love and logic.
          </p>
          <pre className="bg-gray-900 p-4 rounded-lg text-sm overflow-x-auto">
{`const mission = "Build meaningful apps";
const stack = ["React", "Tailwind", "Framer Motion"];
console.log(mission, stack);`}
          </pre>
        </motion.div>

        {/* Right: Design Side */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.9 }}
          className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 p-8 rounded-3xl shadow-lg border border-gray-300 dark:border-gray-700 relative overflow-hidden"
        >
          <FaPaintBrush className="text-4xl text-pink-500 mb-4" />
          <h2 className="text-3xl font-bold mb-3">Design with Emotion</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I craft clean interfaces with a passion for motion, color, and usability.
          </p>
          <div className="grid grid-cols-3 gap-3">
            <div className="bg-gradient-to-tr from-pink-200 to-purple-300 dark:from-pink-700 dark:to-purple-800 h-16 rounded-lg shadow-sm"></div>
            <div className="bg-gradient-to-tr from-blue-200 to-cyan-300 dark:from-blue-800 dark:to-cyan-900 h-16 rounded-lg shadow-sm"></div>
            <div className="bg-gradient-to-tr from-yellow-200 to-orange-300 dark:from-yellow-600 dark:to-orange-800 h-16 rounded-lg shadow-sm"></div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
