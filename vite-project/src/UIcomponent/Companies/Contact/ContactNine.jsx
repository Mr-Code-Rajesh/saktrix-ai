import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa';

export const HeroContactLanding = () => {
  const scrollToContact = () => {
    const section = document.getElementById("main-contact-form");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-gray-950 dark:via-gray-900 dark:to-black flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      
      {/* Glowing Background Orb */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-pink-400 via-purple-600 to-blue-400 blur-[150px] opacity-20 -translate-x-1/2 -z-10" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 leading-tight">
          Have a Vision? <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Let’s Bring It to Life.
          </span>
        </h1>
        <p className="text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-10 text-lg">
          Reach out to us and let’s create something extraordinary together — from digital strategy to product design.
        </p>

        <button
          onClick={scrollToContact}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Contact Us <FaArrowDown />
        </button>
      </motion.div>
    </section>
  );
};

{/* 
    🧠 How to Use:
Add this at the top of your landing page.

Ensure your actual form section has the ID main-contact-form, like this:

html
Copy
Edit
<section id="main-contact-form">...</section>
Done! 🎯 Now you have a full-page, smooth-scrolling contact callout.
    
    */}
