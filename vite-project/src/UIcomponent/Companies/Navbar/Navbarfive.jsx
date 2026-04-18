import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaBars, FaTimes } from 'react-icons/fa';

export const NavbarCorporate = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/90 dark:bg-black/80 backdrop-blur-sm border-b border-gray-300 dark:border-white/10 shadow-sm">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-medium">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-gray-700 dark:from-blue-400 dark:to-gray-300"
        >
          <FaBuilding />
          CorpEdge
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 items-center text-gray-800 dark:text-white">
          <li><a href="#about" className="hover:text-blue-600 transition">About</a></li>
          <li><a href="#services" className="hover:text-blue-600 transition">Services</a></li>
          <li><a href="#careers" className="hover:text-blue-600 transition">Careers</a></li>
          <li><a href="#contact" className="hover:text-blue-600 transition">Contact</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex gap-4 items-center">
          <a
            href="/download-brochure"
            className="px-5 py-2 border border-gray-400 dark:border-gray-600 text-gray-800 dark:text-white rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download Brochure
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl text-gray-800 dark:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.4 }}
          className="md:hidden px-6 py-4 bg-white dark:bg-black border-t border-gray-300 dark:border-gray-600"
        >
          <ul className="space-y-4 text-gray-900 dark:text-white">
            <li><a href="#about" className="block">About</a></li>
            <li><a href="#services" className="block">Services</a></li>
            <li><a href="#careers" className="block">Careers</a></li>
            <li><a href="#contact" className="block">Contact</a></li>
            <li>
              <a
                href="/download-brochure"
                className="inline-block w-full text-center px-4 py-2 mt-2 rounded-full bg-gradient-to-r from-blue-600 to-gray-700 text-white"
              >
                Download Brochure
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
