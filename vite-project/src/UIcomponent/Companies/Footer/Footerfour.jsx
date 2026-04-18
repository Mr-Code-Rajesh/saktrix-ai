import { motion } from 'framer-motion';
import { FaFacebookF, FaInstagram, FaTwitter, FaBehance, FaEnvelope } from 'react-icons/fa';

const FooterDigitalMarketing = () => {
  return (
    <footer className="bg-gradient-to-tr from-[#1a1a40] via-[#0f0f2f] to-[#1a1a40] dark:from-gray-950 dark:to-black text-white px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start"
      >
        {/* Brand */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">Adverzo</h1>
          <p className="text-white/70 mt-4 text-sm">
            We help brands grow through digital creativity, content campaigns, and conversion-first strategy.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#"><FaFacebookF className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaInstagram className="hover:text-pink-400 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-400 transition" /></a>
            <a href="#"><FaBehance className="hover:text-indigo-400 transition" /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-bold mb-4">Services</h2>
          <ul className="space-y-2 text-white/80 text-sm">
            <li><a href="#" className="hover:underline">SEO Optimization</a></li>
            <li><a href="#" className="hover:underline">Content Marketing</a></li>
            <li><a href="#" className="hover:underline">Brand Strategy</a></li>
            <li><a href="#" className="hover:underline">Social Ads</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h2 className="text-lg font-bold mb-4">Subscribe</h2>
          <p className="text-white/70 text-sm mb-4">Get insights, strategy tips, and the latest trends right in your inbox.</p>
          <form className="flex items-center border border-white/20 rounded-md overflow-hidden">
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 bg-transparent text-sm focus:outline-none placeholder:text-white/60"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 px-4 py-2 text-white flex items-center gap-1"
            >
              <FaEnvelope /> Join
            </button>
          </form>
        </div>
      </motion.div>

      {/* Bottom Note */}
      <div className="mt-10 text-center text-sm text-white/50 border-t border-white/20 pt-5">
        © {new Date().getFullYear()} Adverzo Agency. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterDigitalMarketing;
