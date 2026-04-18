import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaBars, FaTimes } from 'react-icons/fa';

export const NavbarCreativeAgency = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full z-50">
      <div className="backdrop-blur-md bg-white/30 dark:bg-black/30 border-b border-white/10 shadow-md">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
          >
            <FaPaintBrush className="text-pink-500" />
            NeonStudio
          </motion.div>

          {/* Desktop Nav */}
          <ul className="hidden md:flex gap-10 text-lg text-gray-900 dark:text-white font-medium">
            <li className="hover:underline underline-offset-4 transition">Work</li>
            <li className="hover:underline underline-offset-4 transition">Services</li>
            <li className="hover:underline underline-offset-4 transition">Studio</li>
            <li className="hover:underline underline-offset-4 transition">Contact</li>
          </ul>

          {/* CTA Button */}
          <div className="hidden md:flex">
            <a
              href="/hire"
              className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold hover:scale-105 transition shadow-lg"
            >
              Let’s Talk
            </a>
          </div>

          {/* Mobile Icon */}
          <div className="md:hidden text-2xl text-gray-900 dark:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </nav>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white dark:bg-black px-6 py-4 border-t border-white/10"
        >
          <ul className="space-y-4 text-gray-800 dark:text-white font-medium">
            <li><a href="#work">Work</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#studio">Studio</a></li>
            <li><a href="#contact">Contact</a></li>
            <li>
              <a
                href="/hire"
                className="block w-full text-center px-4 py-2 mt-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white"
              >
                Let’s Talk
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
