import { motion } from 'framer-motion';

export default function AboutMinimalQuote() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-950 px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl"
      >
        <blockquote className="text-2xl md:text-3xl font-light italic text-gray-800 dark:text-gray-200 leading-relaxed">
          “Code is not just logic — it’s art, structure, and a voice in the digital world.”
        </blockquote>

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-8 text-right pr-4"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 font-medium">
            — Aiden T.
          </p>

          {/* Signature Style */}
          <p className="mt-2 text-xl font-signature text-blue-600 dark:text-cyan-400 tracking-widest">
            ~ AidenTech
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}


{/* Notes 
    
    
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap" rel="stylesheet">


🖋️ Add This to Tailwind Config (Optional – for signature font):

// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      signature: ['"Great Vibes"', 'cursive'], // or any elegant font
    },
  },
},


    
*/}