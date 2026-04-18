import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'


const cardData = [
  {
    id: 25,
    title: "Exploding Icon Reveal",
    description: "Icon explodes into parts to reveal hidden content with cinematic animation.",
    icon: IconsImg,
  },
];


const CardType25 = () => {
  const card = cardData.find((item) => item.id === 25);
  const [hovered, setHovered] = useState(false);

  const pieces = Array.from({ length: 6 });

  const pieceVariants = {
    initial: { opacity: 1, scale: 1, x: 0, y: 0 },
    explode: (i) => ({
      opacity: 0,
      scale: 1.5,
      x: (Math.random() - 0.5) * 150,
      y: (Math.random() - 0.5) * 150,
      transition: { duration: 0.6, delay: i * 0.05 },
    }),
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-80 h-60 bg-white dark:bg-gray-800 rounded-xl shadow-2xl relative flex items-center justify-center overflow-hidden"
      >
        {/* Explosion Pieces */}
        <AnimatePresence>
          {!hovered &&
            pieces.map((_, i) => (
              <motion.img
                key={i}
                custom={i}
                initial="initial"
                animate={hovered ? "explode" : "initial"}
                variants={pieceVariants}
                src={card.icon}
                alt="exploding piece"
                className="absolute w-10 h-10 object-contain"
              />
            ))}
        </AnimatePresence>

        {/* Revealed Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="z-10 text-center px-6"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md hover:scale-105 transition-transform">
            Launch
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardType25;
