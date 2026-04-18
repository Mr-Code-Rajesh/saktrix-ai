// ContactSaaS.tsx
import { motion } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";

export const ContactSaaS = () => {
  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-br from-indigo-900 via-purple-900 to-black dark:from-gray-950 dark:via-gray-900 dark:to-black transition-colors">
      {/* Overlay Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.3),transparent)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(139,92,246,0.2),transparent)] pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto rounded-3xl bg-white/5 dark:bg-white/10 backdrop-blur-lg border border-white/10 shadow-2xl p-10 md:p-16">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl md:text-5xl font-bold text-white"
        >
          Get in <span className="text-purple-400">Touch</span> with Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-gray-300 mt-4 max-w-2xl mx-auto"
        >
          Reach out for collaborations, support, or any questions you have.
        </motion.p>

        <form
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-white/10 text-white placeholder-gray-400 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-white/10 text-white placeholder-gray-400 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="md:col-span-2 bg-white/10 text-white placeholder-gray-400 p-4 rounded-xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-purple-500"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            type="submit"
            className="md:col-span-2 py-3 px-8 rounded-xl bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold hover:opacity-90 transition"
          >
            Send Message
          </motion.button>
        </form>

        <div className="flex justify-center gap-6 mt-10 text-white text-xl">
          <a href="mailto:contact@saktrix.com" className="hover:text-purple-400 transition">
            <FaEnvelope />
          </a>
          <a href="tel:+1234567890" className="hover:text-purple-400 transition">
            <FaPhoneAlt />
          </a>
          <a href="https://linkedin.com" className="hover:text-purple-400 transition">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
};
