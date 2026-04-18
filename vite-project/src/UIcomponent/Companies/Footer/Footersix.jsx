import { motion } from 'framer-motion';
import { FaBehance, FaDribbble, FaInstagram, FaEnvelope } from 'react-icons/fa';

const FooterCreativeAgency = () => {
  return (
    <footer className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-[#0d0d0d] dark:via-[#1f1f1f] dark:to-[#141414] text-white px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Brand Identity */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-pink-500 to-red-500">
            CREOVIBE
          </h1>
          <p className="mt-3 text-sm text-gray-300">
            Turning ideas into visuals. We design, brand, and build digital vibes.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Explore</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-pink-400 transition-all">Work</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Services</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Studio</a></li>
            <li><a href="#" className="hover:text-pink-400 transition-all">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-bold mb-4">What We Do</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-purple-400 transition-all">Branding</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">UI/UX Design</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">Web Development</a></li>
            <li><a href="#" className="hover:text-purple-400 transition-all">3D & Motion</a></li>
          </ul>
        </div>

        {/* Social + Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Stay in the Loop</h2>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="Enter email"
              className="px-3 py-2 w-full bg-white/10 text-sm rounded-l-lg placeholder:text-gray-300 focus:outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-r-lg text-white text-sm">
              Send
            </button>
          </form>
          <div className="flex gap-4 mt-3">
            <a href="#"><FaDribbble className="hover:text-pink-400 transition text-xl" /></a>
            <a href="#"><FaBehance className="hover:text-blue-400 transition text-xl" /></a>
            <a href="#"><FaInstagram className="hover:text-fuchsia-500 transition text-xl" /></a>
            <a href="#"><FaEnvelope className="hover:text-yellow-400 transition text-xl" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-400 dark:text-gray-600 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} CREOVIBE. Crafted with passion by the vibesmiths.
      </div>
    </footer>
  );
};

export default FooterCreativeAgency;
