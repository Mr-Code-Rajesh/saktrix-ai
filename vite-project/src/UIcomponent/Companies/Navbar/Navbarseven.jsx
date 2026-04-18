import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaRocket, FaBars, FaTimes } from 'react-icons/fa';

export const NavbarStartup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-semibold">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          <FaBolt className="text-yellow-400 animate-ping-slow" />
          Launchify 🚀
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-gray-800 dark:text-white text-base">
          <li><a href="#product" className="hover:text-pink-500 transition">Product</a></li>
          <li><a href="#vision" className="hover:text-pink-500 transition">Vision</a></li>
          <li><a href="#team" className="hover:text-pink-500 transition">Team</a></li>
          <li><a href="#pricing" className="hover:text-pink-500 transition">Pricing</a></li>
        </ul>

        {/* Call to Action */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-gray-700 dark:text-white hover:text-purple-500">Log in</a>
          <a
            href="/get-demo"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-pink-500 text-white rounded-full hover:scale-105 transition shadow-lg"
          >
            Get Demo
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden text-2xl text-gray-900 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.4 }}
          className="md:hidden px-6 py-4 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-700"
        >
          <ul className="space-y-4 text-gray-900 dark:text-white">
            <li><a href="#product" className="block">Product</a></li>
            <li><a href="#vision" className="block">Vision</a></li>
            <li><a href="#team" className="block">Team</a></li>
            <li><a href="#pricing" className="block">Pricing</a></li>
            <li><a href="/login" className="block">Log in</a></li>
            <li>
              <a
                href="/get-demo"
                className="inline-block bg-gradient-to-r from-blue-600 to-pink-500 text-white px-4 py-2 rounded-full mt-2 w-full text-center"
              >
                Get Demo
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
