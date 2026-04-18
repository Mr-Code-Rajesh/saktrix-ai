import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaGraduationCap, FaUserAlt, FaRegLightbulb } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const EdTechNavbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-500 to-green-400 dark:from-blue-700 dark:to-green-600 py-4 px-6 shadow-lg">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Logo */}
          <motion.div
            className="text-white text-2xl font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            EdTech
          </motion.div>
          
          {/* Navbar Links */}
          <div className="hidden md:flex space-x-6">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <Link to="/courses" className="flex items-center space-x-2">
                <FaBook />
                <span>Courses</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <Link to="/about" className="flex items-center space-x-2">
                <FaGraduationCap />
                <span>About</span>
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="text-white"
            >
              <Link to="/contact" className="flex items-center space-x-2">
                <FaUserAlt />
                <span>Contact</span>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Call to Action Button */}
        <motion.div
          className="md:hidden flex items-center justify-center py-2 px-4 bg-yellow-500 text-white rounded-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/start-learning">Start Learning</Link>
        </motion.div>

        {/* Dark/Light Mode Toggle */}
        <div className="flex items-center space-x-4">
          <motion.button
            className="text-white"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => document.documentElement.classList.toggle('dark')}
          >
            <FaRegLightbulb />
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default EdTechNavbar;
