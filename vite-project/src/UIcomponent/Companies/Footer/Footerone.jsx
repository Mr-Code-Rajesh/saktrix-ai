import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa';

const FooterSaaS = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-900 via-sky-900 to-black dark:from-gray-900 dark:via-gray-950 dark:to-black text-white py-12 px-6">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Logo & Tagline */}
        <div>
          <h2 className="text-3xl font-bold mb-2">SaasyWave</h2>
          <p className="text-gray-300 dark:text-gray-400">Empowering your business with scalable SaaS solutions.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">About Us</a></li>
            <li><a href="#" className="hover:text-white transition">Careers</a></li>
            <li><a href="#" className="hover:text-white transition">Blog</a></li>
            <li><a href="#" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
            <li><a href="#" className="hover:text-white transition">Cloud Hosting</a></li>
            <li><a href="#" className="hover:text-white transition">API Integration</a></li>
            <li><a href="#" className="hover:text-white transition">Data Analytics</a></li>
            <li><a href="#" className="hover:text-white transition">Consulting</a></li>
          </ul>
        </div>

        {/* Social & Contact */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect with Us</h3>
          <div className="flex gap-4 mb-4">
            <a href="#"><FaFacebookF className="text-blue-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaTwitter className="text-sky-400 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaLinkedinIn className="text-blue-600 hover:text-white hover:scale-110 transition" size={20} /></a>
            <a href="#"><FaDribbble className="text-pink-400 hover:text-white hover:scale-110 transition" size={20} /></a>
          </div>
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SaasyWave. All rights reserved.</p>
        </div>
      </motion.div>
    </footer>
  );
};

export default FooterSaaS;
