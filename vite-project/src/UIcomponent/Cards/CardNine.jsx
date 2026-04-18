import React, { useState } from "react";
import { motion } from "framer-motion";
import bgImg from '../../assets/bg/snow1.jpg'

const cardData = [
  {
    id: 29,
    title: "Split Reveal Card",
    description: "This card splits apart to reveal hidden content. A powerful visual for showcasing features.",
    bgImage: bgImg,
    revealText: "🎉 Get Access Now",
  },
];


const CardType29 = () => {
  const card = cardData.find((item) => item.id === 29);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="relative w-80 h-60 rounded-xl overflow-hidden shadow-2xl group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image */}
        <img
          src={card.bgImage}
          alt="split background"
          className="absolute w-full h-full object-cover z-0"
        />

        {/* Left Half */}
        <motion.div
          initial={{ x: 0 }}
          animate={hovered ? { x: "-100%" } : { x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 left-0 w-1/2 h-full bg-black/70 z-10"
        />

        {/* Right Half */}
        <motion.div
          initial={{ x: 0 }}
          animate={hovered ? { x: "100%" } : { x: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-black/70 z-10"
        />

        {/* Center Reveal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6"
        >
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p className="text-sm mt-1">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md hover:scale-105 transition-transform">
            {card.revealText}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardType29;
