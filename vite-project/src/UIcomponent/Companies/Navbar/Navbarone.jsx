import React from 'react';
import { motion } from 'framer-motion';
import { AiOutlineRobot, AiOutlineAppstore, AiOutlineCloud } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const AINavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 dark:from-indigo-900 dark:to-purple-800 py-4 px-6 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          className="text-white text-2xl font-bold"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          AI Innovations
        </motion.div>

        {/* Navbar Links */}
        <div className="hidden md:flex space-x-6">
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <Link to="/solutions" className="flex items-center space-x-2">
              <AiOutlineRobot />
              <span>Solutions</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <Link to="/products" className="flex items-center space-x-2">
              <AiOutlineAppstore />
              <span>Products</span>
            </Link>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="text-white"
          >
            <Link to="/about" className="flex items-center space-x-2">
              <AiOutlineCloud />
              <span>About</span>
            </Link>
          </motion.div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          className="md:hidden flex items-center justify-center py-2 px-4 bg-yellow-500 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/get-started">Get Started</Link>
        </motion.div>

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center space-x-4">
          <motion.button
            className="text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <AiOutlineRobot />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default AINavbar;
