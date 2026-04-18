import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaArrowRight } from 'react-icons/fa';

export const CTAEdTech = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Text + CTA */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Learn with Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Certify Your Skills.
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Join 50,000+ learners on Saktrix Academy. Start practical learning today and earn certificates that boost your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaGraduationCap /> Start Learning <FaArrowRight />
            </a>
            <a
              href="/certificate"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaCertificate /> View Certificates
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1584697964364-1635e90f0b45?auto=format&fit=crop&w=1000&q=80"
            alt="Learning"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
