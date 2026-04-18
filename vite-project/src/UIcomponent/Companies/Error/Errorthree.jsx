import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export const Error404Brutalist = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Glitch Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[20rem] font-extrabold text-black/5 dark:text-white/5 uppercase tracking-widest leading-none z-0 glitch-text opacity-20">
        404
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black dark:text-white glitch"
        >
          Page Lost
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          The page you're looking for has gone rogue or never existed.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold border-2 border-black dark:border-white transition hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg"
        >
          <FaArrowLeft />
          Go Back Home
        </motion.a>
      </motion.div>

      {/* Glitch Animation CSS */}
      <style>
        {`
          .glitch-text {
            animation: glitch 2s infinite;
          }

          .glitch {
            position: relative;
            color: white;
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            width: 100%;
            overflow: hidden;
          }

          .glitch::before {
            left: -2px;
            text-shadow: -2px 0 red;
            animation: glitchTop 2s infinite;
          }

          .glitch::after {
            left: 2px;
            text-shadow: -2px 0 blue;
            animation: glitchBottom 2s infinite;
          }

          @keyframes glitchTop {
            0% {
              clip-path: inset(0 0 80% 0);
            }
            20% {
              clip-path: inset(10% 0 60% 0);
            }
            40% {
              clip-path: inset(30% 0 40% 0);
            }
            60% {
              clip-path: inset(50% 0 20% 0);
            }
            80% {
              clip-path: inset(70% 0 10% 0);
            }
            100% {
              clip-path: inset(0 0 80% 0);
            }
          }

          @keyframes glitchBottom {
            0% {
              clip-path: inset(70% 0 0 0);
            }
            20% {
              clip-path: inset(60% 0 10% 0);
            }
            40% {
              clip-path: inset(40% 0 30% 0);
            }
            60% {
              clip-path: inset(20% 0 50% 0);
            }
            80% {
              clip-path: inset(10% 0 70% 0);
            }
            100% {
              clip-path: inset(70% 0 0 0);
            }
          }
        `}
      </style>
    </section>
  );
};
