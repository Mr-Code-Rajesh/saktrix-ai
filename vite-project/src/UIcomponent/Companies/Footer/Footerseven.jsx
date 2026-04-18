import { motion } from "framer-motion";
import { FaTwitter, FaGithub, FaLinkedin, FaRobot } from "react-icons/fa";

const FooterAI = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#000428] via-[#004e92] to-[#000428] dark:from-[#0f0f0f] dark:via-[#1a1a1a] dark:to-[#0f0f0f] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-bold flex items-center gap-2 text-cyan-400">
            <FaRobot className="text-4xl" /> NeuroSync
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Building smarter worlds with AI. Automate, analyze, evolve.
          </p>
        </div>

        {/* Products */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Products</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">AI Chatbot</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Vision API</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Auto Insights</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Model Hub</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Resources</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-cyan-400 transition-all">Documentation</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Blog</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">Support</a></li>
            <li><a href="#" className="hover:text-cyan-400 transition-all">API Status</a></li>
          </ul>
        </div>

        {/* Connect */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-cyan-300">Connect</h2>
          <div className="flex gap-4 text-xl">
            <a href="#"><FaGithub className="hover:text-gray-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-blue-400 transition" /></a>
            <a href="#"><FaLinkedin className="hover:text-blue-300 transition" /></a>
          </div>
          <form className="mt-6">
            <input
              type="email"
              placeholder="Subscribe to newsletter"
              className="bg-white/10 dark:bg-white/5 placeholder:text-gray-300 text-sm px-3 py-2 rounded-l-lg w-2/3 focus:outline-none"
            />
            <button className="bg-cyan-500 hover:bg-cyan-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Join
            </button>
          </form>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} NeuroSync. Powered by intelligence, designed for the future.
      </div>
    </footer>
  );
};

export default FooterAI;
