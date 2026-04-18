import React, { useState } from "react";
import { motion } from "framer-motion";
import BgImg from '../../assets/bg/snow1.jpg'

const cardData = [
  {
    id: 27,
    title: "Reveal Sliding Layers",
    description: "Sliding overlay layers reveal hidden premium content on hover.",
    bgImage: BgImg,
    revealContent: "🔥 Get Pro Access Now",
  },
];

const CardType27 = () => {
  const card = cardData.find((item) => item.id === 27);
  const [hovered, setHovered] = useState(false);

  const slideVariants = {
    initial: { y: 0 },
    hoverTop: { y: "-100%", transition: { duration: 0.5 } },
    hoverBottom: { y: "100%", transition: { duration: 0.5 } },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="w-80 h-60 relative overflow-hidden rounded-2xl shadow-2xl group cursor-pointer"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image */}
        <img
          src={card.bgImage}
          alt="background"
          className="w-full h-full object-cover absolute inset-0 z-0"
        />

        {/* Sliding Top Layer */}
        <motion.div
          variants={slideVariants}
          initial="initial"
          animate={hovered ? "hoverTop" : "initial"}
          className="absolute top-0 left-0 w-full h-1/2 bg-black/60 z-10"
        />

        {/* Sliding Bottom Layer */}
        <motion.div
          variants={slideVariants}
          initial="initial"
          animate={hovered ? "hoverBottom" : "initial"}
          className="absolute bottom-0 left-0 w-full h-1/2 bg-black/60 z-10"
        />

        {/* Reveal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hovered ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-4"
        >
          <h3 className="text-xl font-bold">{card.title}</h3>
          <p className="mt-2 text-sm">{card.description}</p>
          <button className="mt-4 px-4 py-2 bg-white text-black rounded-md font-semibold hover:scale-105 transition-transform">
            {card.revealContent}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default CardType27;
