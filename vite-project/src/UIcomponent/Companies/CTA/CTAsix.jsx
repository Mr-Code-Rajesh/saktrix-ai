import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaShieldAlt, FaHeartbeat, FaStethoscope } from 'react-icons/fa';

export const CTAMedical = () => {
  return (
    <section className=" w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Prioritize <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Patient Trust</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Empower your healthcare platform with trusted UI components tailored for hospitals, clinics, and care services. HIPAA-compliant, scalable, and beautifully crafted.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg">
            <FaUserMd /> Request a Free Consultation
          </button>
        </div>

        {/* Certifications/Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-500" />
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaHeartbeat className="text-red-500" />
            WHO Certified Standards
          </div>
          <div className="flex items-center gap-2">
            <FaStethoscope className="text-green-600" />
            Trusted by 100+ Clinics
          </div>
        </div>
      </motion.div>
    </section>
  );
};
