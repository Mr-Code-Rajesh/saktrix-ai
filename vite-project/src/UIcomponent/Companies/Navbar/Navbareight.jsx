import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaRocket, FaUserCircle } from 'react-icons/fa';

export const NavbarSaaS = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        >
          <FaRocket />
          SaaSKit
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center font-medium text-gray-800 dark:text-white">
          <li><a href="#features" className="hover:text-pink-500 transition">Features</a></li>
          <li><a href="#pricing" className="hover:text-pink-500 transition">Pricing</a></li>
          <li><a href="#solutions" className="hover:text-pink-500 transition">Solutions</a></li>
          <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
        </ul>

        {/* User Icon / Action */}
        <div className="hidden md:flex items-center gap-4">
          <a href="/login" className="text-gray-700 dark:text-white hover:text-pink-500 font-medium">Login</a>
          <a
            href="/get-started"
            className="px-5 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden text-2xl text-gray-800 dark:text-white" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: "auto" }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-white dark:bg-black px-6 py-4 border-t border-gray-300 dark:border-white/10"
        >
          <ul className="space-y-4 text-gray-800 dark:text-white font-medium">
            <li><a href="#features" className="block hover:text-pink-500">Features</a></li>
            <li><a href="#pricing" className="block hover:text-pink-500">Pricing</a></li>
            <li><a href="#solutions" className="block hover:text-pink-500">Solutions</a></li>
            <li><a href="#contact" className="block hover:text-pink-500">Contact</a></li>
            <li><a href="/login" className="block hover:text-pink-500">Login</a></li>
            <li>
              <a
                href="/get-started"
                className="block text-center bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full px-4 py-2 mt-2"
              >
                Get Started
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
