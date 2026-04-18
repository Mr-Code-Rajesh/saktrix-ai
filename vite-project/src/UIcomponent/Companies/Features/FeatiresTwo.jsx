import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserNurse,
  FaShieldAlt,
  FaClinicMedical
} from "react-icons/fa";

const featuresTwo = [
  {
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    title: "Real-Time Monitoring",
    desc: "Track patient vitals and health data in real time with precision dashboards."
  },
  {
    icon: <FaUserNurse className="text-blue-500 text-3xl" />,
    title: "Care Team Access",
    desc: "Enable seamless collaboration between doctors, nurses, and patients."
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-3xl" />,
    title: "HIPAA-Compliant Security",
    desc: "Ensure patient data is secure, encrypted, and fully compliant with regulations."
  },
  {
    icon: <FaClinicMedical className="text-purple-500 text-3xl" />,
    title: "Clinic & Lab Integration",
    desc: "Streamline appointments, lab results, and EMR records into one platform."
  }
];

export const FeatureGridHealthcare = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Soft glow circle */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-10 blur-[160px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Smarter Tools for Modern Healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our healthcare components are built to support doctors, patients, and administrators in delivering better outcomes.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresTwo.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
