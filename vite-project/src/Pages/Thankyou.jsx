import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Only if you're using react-router
import { FaCheckCircle } from 'react-icons/fa'; 

export const ThankYou = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6">
      <div className="text-center space-y-8">

        {/* Checkmark Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 150, damping: 10 }}
          className="flex justify-center"
        >
          <FaCheckCircle className="text-green-400 text-6xl md:text-8xl" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white"
        >
          Thank You!
        </motion.h1>

        {/* Sub Text */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-gray-400 max-w-xl mx-auto text-lg"
        >
          Your message has been successfully sent.  
          We’ll get back to you very soon! 🚀
        </motion.p>

        {/* Back Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block mt-6 px-8 py-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition-all"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </section>
  );
};
