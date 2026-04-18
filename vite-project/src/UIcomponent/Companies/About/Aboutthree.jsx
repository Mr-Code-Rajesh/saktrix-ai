import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaClinicMedical, FaCheckCircle } from 'react-icons/fa';

export const AboutMedical = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaClinicMedical className="text-xl" />
            Your Trusted Health Partner
          </div>
          <h2 className="text-4xl font-bold leading-snug">
            Dedicated Medical Care <br /> With a Human Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Medical, we combine cutting-edge healthcare technology with expert human care.
            From personalized diagnosis to complete wellness journeys, we empower healthier lives — one patient at a time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaUserMd className="text-blue-500 text-xl" />
              <span>Certified Doctors</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeartbeat className="text-pink-500 text-xl" />
              <span>Advanced Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>24/7 Emergency Care</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClinicMedical className="text-purple-500 text-xl" />
              <span>Multi-Speciality Clinics</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Book Appointment
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267d0?auto=format&fit=crop&w=800&q=80"
            alt="Doctor"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
