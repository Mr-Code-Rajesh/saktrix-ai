import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaInstagram, FaRocket } from 'react-icons/fa';

const FooterStartup = () => {
  return (
    <footer className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-14">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8"
      >
        {/* Brand & Mission */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaRocket className="text-white text-2xl" />
            <span className="text-2xl font-bold">Launchly</span>
          </div>
          <p className="text-sm text-white/80">
            Fueling early-stage startups with growth tools, analytics, and branding support. Let’s go to the moon 🚀.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Features</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Guides</a></li>
            <li><a href="#" className="hover:underline">Support</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect</h4>
          <div className="flex gap-4 mt-2">
            <a href="#" className="hover:scale-110 transition"><FaTwitter size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:scale-110 transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="mt-10 border-t border-white/20 pt-5 text-center text-sm text-white/70">
        © {new Date().getFullYear()} Launchly Inc. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterStartup;
