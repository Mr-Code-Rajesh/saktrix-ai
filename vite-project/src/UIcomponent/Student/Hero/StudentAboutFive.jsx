import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

export const HeroTypeMode = () => {
  const words = ["Frontend Developer", "React Enthusiast", "Creative Coder"];
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index === words.length) return;

    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 1000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 50 : 150);

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white dark:bg-black text-gray-900 dark:text-white transition duration-500 px-4 py-20">
      <div className="text-center max-w-2xl mx-auto">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <FaLaptopCode className="mx-auto mb-6 text-4xl text-blue-500 dark:text-cyan-400" />
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Hey, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Sakthi</span>
          </h1>
          <h2 className="text-2xl sm:text-3xl font-medium h-12">
            {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
          </h2>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-base max-w-lg mx-auto">
            A student developer passionate about clean UI, accessibility, and intuitive experiences. Let’s build something awesome together.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="inline-block px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
