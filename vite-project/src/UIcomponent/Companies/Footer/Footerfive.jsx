import { motion } from 'framer-motion';
import { FaLinkedin, FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

const FooterBusiness = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-white dark:from-[#0d0d0d] dark:to-[#1a1a1a] text-gray-800 dark:text-gray-300 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10"
      >
        {/* Company */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 dark:text-white">Nexura Corp</h1>
          <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
            Premium consulting and enterprise solutions tailored to grow your business effectively.
          </p>
        </div>

        {/* Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Consulting</a></li>
            <li><a href="#" className="hover:underline">Business Audit</a></li>
            <li><a href="#" className="hover:underline">Tech Solutions</a></li>
            <li><a href="#" className="hover:underline">Training</a></li>
          </ul>
        </div>

        {/* Newsletter & Social */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
          <p className="text-sm mb-4">Get monthly updates, tips, and insights for scaling your business.</p>
          <form className="flex mb-4">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-3 py-2 rounded-l-md bg-gray-200 dark:bg-gray-700 text-sm focus:outline-none"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-md text-sm">
              Subscribe
            </button>
          </form>
          <div className="flex gap-4">
            <a href="#"><FaLinkedin className="hover:text-blue-500 transition" /></a>
            <a href="#"><FaFacebookF className="hover:text-blue-600 transition" /></a>
            <a href="#"><FaTwitter className="hover:text-cyan-500 transition" /></a>
            <a href="#"><FaEnvelope className="hover:text-rose-500 transition" /></a>
          </div>
        </div>
      </motion.div>

      <div className="mt-12 text-center text-sm text-gray-500 dark:text-gray-600 border-t border-gray-200 dark:border-gray-700 pt-6">
        © {new Date().getFullYear()} Nexura Corp. All Rights Reserved.
      </div>
    </footer>
  );
};

export default FooterBusiness;
