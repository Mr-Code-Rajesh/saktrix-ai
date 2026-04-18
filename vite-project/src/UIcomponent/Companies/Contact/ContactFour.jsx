import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export const ContactMedical = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-bl from-teal-50 to-white dark:from-[#0c1f1e] dark:to-black transition-colors">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Contact Info Section */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-extrabold text-teal-700 dark:text-teal-300">
            Contact Our Clinic
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We're here to help. Whether you have a medical concern, need to book
            an appointment, or just have a question, feel free to reach out.
          </p>

          <div className="space-y-4">
            <div className="flex items-center gap-4 text-teal-700 dark:text-teal-300">
              <FaPhoneAlt />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-4 text-teal-700 dark:text-teal-300">
              <FaEnvelope />
              <span>care@healthplus.com</span>
            </div>
            <div className="flex items-center gap-4 text-teal-700 dark:text-teal-300">
              <FaMapMarkerAlt />
              <span>123 Health Street, Chennai, IN</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 space-y-6 border border-gray-200 dark:border-gray-700"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 rounded-xl bg-teal-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-xl bg-teal-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            rows={4}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl bg-teal-50 dark:bg-gray-800 text-gray-800 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="w-full py-3 px-6 bg-teal-600 text-white font-semibold rounded-xl hover:bg-teal-700 transition"
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};
