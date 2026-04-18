import { motion } from "framer-motion";
import AboutImg from "../../../assets/bg/ai.gif"; // Replace with your custom image

export const AboutTwo = () => {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={AboutImg}
            alt="About Saktrix"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 dark:text-gray-100 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-cyan-500">Saktrix UI</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI is a premium collection of fully responsive, animated components designed to help developers and startups build beautiful websites faster.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              ✅ Over 40 unique sections
            </li>
            <li className="flex items-center gap-2">
              ✅ Built with Tailwind CSS, React & Motion
            </li>
            <li className="flex items-center gap-2">
              ✅ Designed for both light and dark modes
            </li>
          </ul>
          <div className="pt-4">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
