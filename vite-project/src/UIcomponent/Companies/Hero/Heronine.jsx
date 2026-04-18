import { motion } from "framer-motion";
import BgImg from "/your-assets/business-bg.jpg"; // Replace with your own image path

export default function HeroSplitCard() {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${BgImg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 dark:bg-black/70 backdrop-blur-sm" />

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Glass Card */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 dark:bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-8 md:p-12 shadow-2xl text-white space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Supercharge Your <span className="text-cyan-400">Business</span> with Saktrix
          </h2>
          <p className="text-gray-200 text-base leading-relaxed">
            Explore our modern UI components, tailored for startups and tech brands. With Saktrix UI, speed up your dev process 10× faster.
          </p>
          <ul className="list-disc list-inside text-sm text-cyan-100 space-y-1">
            <li>20+ ready-to-use sections</li>
            <li>Responsive & Dark Mode Support</li>
            <li>Built with React, TailwindCSS & Framer Motion</li>
          </ul>
        </motion.div>

        {/* CTA Box */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left space-y-6"
        >
          <span className="inline-block text-xs uppercase tracking-wide text-cyan-300 bg-white/10 px-3 py-1 rounded-full">
            🌟 Featured Product
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            Design. Build. <br />
            Launch with <span className="text-cyan-400">Confidence</span>.
          </h1>
          <p className="text-gray-300 max-w-lg">
            Use our UI kit to kickstart your next product idea in no time — perfect for devs, designers, and startup teams.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition">
              Get the UI Kit
            </button>
            <button className="px-6 py-3 border border-white/30 text-white rounded-lg hover:bg-white/10 transition">
              View Docs
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
