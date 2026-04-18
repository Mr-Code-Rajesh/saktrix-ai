import { motion } from 'framer-motion';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const FooterMedical = () => {
  return (
    <footer className="bg-gradient-to-br from-teal-600 to-cyan-800 dark:from-gray-900 dark:to-gray-950 text-white px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10"
      >
        {/* Logo & Brief */}
        <div>
          <h2 className="text-3xl font-bold mb-2">MediCore</h2>
          <p className="text-sm text-white/80">
            MediCore is your trusted partner for telemedicine and health tech solutions. We're here to care.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm text-white/90">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-white/70" /> +1 (800) 123-4567
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-white/70" /> support@medicore.com
            </li>
            <li className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-white/70" /> 123 Health St, Wellness City, USA
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-white/90">
            <li><a href="#" className="hover:underline">Our Services</a></li>
            <li><a href="#" className="hover:underline">Doctors</a></li>
            <li><a href="#" className="hover:underline">Patient Portal</a></li>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
          </ul>
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="mt-10 border-t border-white/20 pt-6 text-center text-sm text-white/70">
        © {new Date().getFullYear()} MediCore. All rights reserved.
      </div>
    </footer>
  );
};

export default FooterMedical;
