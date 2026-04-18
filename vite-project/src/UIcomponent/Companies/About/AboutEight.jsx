import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";
import StartupImg from "../../../assets/bg/ai.gif"; // Replace with your own startup-friendly image

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function AboutStartup () {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={StartupImg}
            alt="Startup Growth"
            className="rounded-xl shadow-2xl w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-tight"
          >
            Fuel Your <span className="text-pink-500">Startup Journey</span>
            <br /> with Saktrix UI
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Launch faster and look professional from day one. Our ready-to-use
            components save you hours of design and build time so you can focus on scaling.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
          >
            <div className="flex flex-col items-center text-center">
              <FaRocket className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Fast Launch</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Client-Ready</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLightbulb className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Creative First</p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            Build with Saktrix
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
