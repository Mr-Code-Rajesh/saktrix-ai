import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBars, FaTimes, FaUserMd } from 'react-icons/fa';

export const NavbarMedical = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-md">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between font-medium">
        
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-500"
        >
          <FaHeartbeat className="text-pink-500" />
          MedConnect
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8 items-center text-gray-800 dark:text-white">
          <li><a href="#services" className="hover:text-teal-500 transition">Services</a></li>
          <li><a href="#doctors" className="hover:text-teal-500 transition">Doctors</a></li>
          <li><a href="#departments" className="hover:text-teal-500 transition">Departments</a></li>
          <li><a href="#contact" className="hover:text-teal-500 transition">Contact</a></li>
        </ul>

        {/* CTA + Login */}
        <div className="hidden md:flex gap-4 items-center">
          <a href="/login" className="text-gray-700 dark:text-white hover:text-teal-600 transition">Login</a>
          <a
            href="/book"
            className="px-5 py-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-full shadow hover:scale-105 transition"
          >
            Book Appointment
          </a>
        </div>

        {/* Mobile Icon */}
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
          className="md:hidden px-6 py-4 bg-white dark:bg-gray-950 border-t border-gray-300 dark:border-gray-700"
        >
          <ul className="space-y-4 text-gray-800 dark:text-white">
            <li><a href="#services" className="block">Services</a></li>
            <li><a href="#doctors" className="block">Doctors</a></li>
            <li><a href="#departments" className="block">Departments</a></li>
            <li><a href="#contact" className="block">Contact</a></li>
            <li><a href="/login" className="block">Login</a></li>
            <li>
              <a
                href="/book"
                className="inline-block bg-gradient-to-r from-blue-600 to-teal-500 text-white px-4 py-2 rounded-full w-full text-center"
              >
                Book Appointment
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </header>
  );
};
