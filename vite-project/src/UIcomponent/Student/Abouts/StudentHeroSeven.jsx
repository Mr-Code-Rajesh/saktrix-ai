import { motion } from 'framer-motion';

export default function AboutImageQuote() {
  return (
    <section className="w-full bg-white dark:bg-gray-950 px-6 py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/your-image.jpg"
            alt="My Portrait"
            className="rounded-3xl shadow-xl w-full object-cover"
          />
        </motion.div>

        {/* Right: Text + Quote */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-gray-800 dark:text-gray-100"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            👋 Hey, I’m <span className="text-blue-600 dark:text-cyan-400">Sakthi</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            I’m a passionate student developer focused on crafting clean user experiences, building accessible web apps, and continuously learning. From design thinking to real-world coding, my journey reflects a balance of creativity and logic.
          </p>

          <div className="mt-6 p-4 border-l-4 border-blue-600 dark:border-cyan-400 bg-blue-50 dark:bg-gray-900 rounded-md">
            <p className="italic text-gray-700 dark:text-gray-300">
              “Code is more than syntax—it's a language of possibility. I write mine with purpose.”
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
