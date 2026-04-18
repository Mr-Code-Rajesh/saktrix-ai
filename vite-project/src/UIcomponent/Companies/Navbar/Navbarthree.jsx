import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaBars, FaTimes, FaCreditCard, FaChartLine, FaPiggyBank } from 'react-icons/fa';

export const NavbarFintech = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-300 dark:border-white/10 shadow">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-green-400"
        >
          <FaLock className="text-blue-600" />
          FinSecure
        </motion.div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 text-gray-800 dark:text-white font-medium relative">
          <li><a href="#platform" className="hover:text-blue-500">Platform</a></li>
          <li><a href="#pricing" className="hover:text-blue-500">Pricing</a></li>

          {/* Solutions with dropdown */}
          <li
            className="relative cursor-pointer"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <span className="hover:text-blue-500 flex items-center gap-1">Solutions ▾</span>
            {dropdownOpen && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-8 left-0 bg-white dark:bg-gray-900 shadow-xl rounded-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800"><FaCreditCard /> Payments</li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800"><FaChartLine /> Investments</li>
                <li className="flex items-center gap-2 px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-800"><FaPiggyBank /> Savings</li>
              </motion.ul>
            )}
          </li>

          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>

        {/* CTA */}
        <div className="hidden md:flex gap-4">
          <a
            href="/signin"
            className="text-gray-700 dark:text-white hover:text-blue-500"
          >
            Sign In
          </a>
          <a
            href="/get-started"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow hover:scale-105 transition"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl text-gray-800 dark:text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: 'auto' }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white dark:bg-black px-6 py-4 border-t border-gray-300 dark:border-gray-600"
        >
          <ul className="space-y-4 text-gray-800 dark:text-white">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li>
              <span className="block font-semibold">Solutions</span>
              <ul className="ml-4 mt-2 space-y-1 text-sm">
                <li><FaCreditCard className="inline" /> Payments</li>
                <li><FaChartLine className="inline" /> Investments</li>
                <li><FaPiggyBank className="inline" /> Savings</li>
              </ul>
            </li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="/signin">Sign In</a></li>
            <li>
              <a
                href="/get-started"
                className="block text-center bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-full"
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
