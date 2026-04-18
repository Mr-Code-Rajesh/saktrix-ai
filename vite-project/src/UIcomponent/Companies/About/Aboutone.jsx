import { motion } from "framer-motion";
import { FaCogs, FaCloud, FaShieldAlt } from "react-icons/fa";
import SaaSImage from "../../../assets/bg/ai.gif"; // Replace with your custom SaaS illustration/image

export  const AboutSaaS = ()=> {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Smart Solutions <br />
            for Modern <span className="text-indigo-500">SaaS Platforms</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI empowers SaaS developers with high-quality, reusable, animated components that ensure fast development and pixel-perfect design across all devices.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCogs className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Modular Design</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCloud className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Cloud Ready</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaShieldAlt className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Secure & Scalable</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Explore Features
          </button>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={SaaSImage}
            alt="SaaS App Illustration"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}
