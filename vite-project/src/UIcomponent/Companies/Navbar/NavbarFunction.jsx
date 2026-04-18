import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { AiOutlineRobot, AiOutlineAppstore, AiOutlineCloud } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FaBook, FaGraduationCap, FaUserAlt, FaRegLightbulb } from 'react-icons/fa';
import { FaLock, FaBars, FaTimes, FaCreditCard, FaChartLine, FaPiggyBank } from 'react-icons/fa';
import { FaPaintBrush } from 'react-icons/fa';
import { FaBuilding } from 'react-icons/fa';
import { FaHeartbeat, FaUserMd } from 'react-icons/fa';
import { FaBolt, FaRocket } from 'react-icons/fa';
import {  FaUserCircle } from 'react-icons/fa';




function NavbarComponents ({htmlCode,reactCode,SectionShow}){
    const [view, setView] = useState("preview"); // 'preview' | 'code'
    const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

    const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
    };

  return(
    <>
        <section className="min-h-screen w-full my-15 bg-white  text-black dark:text-white flex flex-col items-center justify-center relative overflow-hidden  dark:bg-gray-900 rounded-2xl  shadow-2xl border border-gray-300  dark:border-gray-700 transition-all duration-500">
        
        <div className="min-h-screen w-full mx-auto">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300  dark:border-gray-800 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("preview")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "preview"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("code")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "code"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Code
              </button>
            </div>

            {view === "code" && (
              <div className="flex items-center space-x-2">
                <select
                  onChange={(e) => setCodeType(e.target.value)}
                  value={codeType}
                  className="rounded-md border-gray-300  dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  <FaCopy />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>



    {/* Hero page view start  */} 

   {view === "preview" ? (
    (SectionShow)

   ) : (
    <section className=" w-full overflow-x-scroll bg-gray-100 dark:bg-gray-900">
      <pre className="text-left text-sm  text-gray-800 dark:text-gray-200 w-full h-[90%] p-4 rounded">
         {codeType === "html" ? htmlCode : reactCode}
      </pre>
    </section>
   )}


</div>
</section>
      
             
    </>
  )
}

{/* Covert to (Pure HTML + Tailwind + Font Awesome or other free icons cdn as your wish)*/}


export function NavbarOne(){
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React from 'react';
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

`
}

SectionShow={
<>
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
</>
}
/>
</>
  )
}

export function NavbarTwo(){
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`
`
}

SectionShow={
<>
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
</>
}
/>
</>
  )
}

export function NavbarThree(){
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
   <header className="w-full  z-50 bg-white/80 dark:bg-gray-950/90 backdrop-blur-md border-b border-gray-300 dark:border-white/10 shadow">
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
</>
}
/>
</>
  )
}

export function NavbarFour(){
  const [menuOpen, setMenuOpen] = useState(false);
  
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
 <header className="w-full  z-50">
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
</>
}
/>
</>
  )
}

export function NavbarFive(){
  const [isOpen, setIsOpen] = useState(false);
  
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
 <header className="w-full  z-50 bg-white/90 dark:bg-black/80 backdrop-blur-sm border-b border-gray-300 dark:border-white/10 shadow-sm">
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
</>
}
/>
</>
  )
}

export function NavbarSix(){
   const [isOpen, setIsOpen] = useState(false);
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
  <header className="w-full  z-50 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-md">
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
</>
}
/>
</>
  )
}

export function NavbarSeven(){
  const [isOpen, setIsOpen] = useState(false);
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
   <header className="w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-md border-b border-gray-200 dark:border-white/10">
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
</>
}
/>
</>
  )
}

export function NavbarEight(){
  const [open, setOpen] = useState(false);
  return(
<>
<NavbarComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React, { useState } from 'react';
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

`
}

SectionShow={
<>
 <header className="w-full z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-sm border-b border-gray-200 dark:border-white/10">
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
</>
}
/>
</>
  )
}






