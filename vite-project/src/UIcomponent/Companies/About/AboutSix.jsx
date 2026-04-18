import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

export const AboutEdTech = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/06/23/20/42/online-education-5339461_960_720.jpg"
            alt="Online Learning"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaGraduationCap className="text-xl" />
            Empowering Digital Learning
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Learn Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Grow Faster.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix EdTech, we build tools and platforms that make education accessible, engaging, and effective for every learner — anytime, anywhere.
            We believe in the power of AI + interactivity to personalize learning journeys.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLaptopCode className="text-purple-500 text-lg" />
              Interactive Online Courses
            </li>
            <li className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-pink-500 text-lg" />
              Live Expert Sessions
            </li>
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              AI-Based Personalization
            </li>
            <li className="flex items-center gap-3">
              <FaGraduationCap className="text-blue-500 text-lg" />
              Career-Focused Tracks
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Start Learning
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
