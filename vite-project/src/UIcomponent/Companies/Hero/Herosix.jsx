import { motion } from "framer-motion";

export const HeroGradientCard = ()=> {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-30 dark:opacity-40 z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[160px] opacity-25 dark:opacity-35 z-0" />

      {/* Gradient Border Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-3xl p-1 shadow-xl"
      >
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-3xl">
          <div className="bg-white dark:bg-zinc-900 rounded-[22px] p-10 sm:p-14 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
                Interfaces That Inspire
              </span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-zinc-300 text-lg">
              Unlock your brand’s potential with Saktrix UI — powerful, motion-ready components crafted for modern developers and visionary creators.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
                Start Building
              </button>
              <button className="px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
