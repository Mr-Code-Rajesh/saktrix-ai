import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaHourglassHalf } from "react-icons/fa";


const cardData = [
  {
    id: 31,
    title: "Glowing Border Pulse",
    description: "A card with a neon glowing border that pulses to draw user attention.",
    icon: <FaHourglassHalf />,
  },
];

const pulseAnimation = {
  animate: {
    boxShadow: [
      "0 0 8px 2px rgba(59, 130, 246, 0.8)",
      "0 0 16px 6px rgba(59, 130, 246, 0.4)",
      "0 0 8px 2px rgba(59, 130, 246, 0.8)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const CardType31 = () => {
  const card = cardData.find((item) => item.id === 31);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <motion.div
        className="w-72 h-48 rounded-xl bg-gray-800 flex flex-col items-center justify-center p-6 cursor-pointer text-white relative"
        initial={{ boxShadow: "0 0 0px 0px rgba(59, 130, 246, 0)" }}
        animate={controls}
        variants={pulseAnimation}
      >
        <img src={card.icon} alt="neon glow icon" className="w-14 h-14 mb-4" />
        <h3 className="text-xl font-bold text-center">{card.title}</h3>
        <p className="mt-2 text-center text-sm text-gray-300">{card.description}</p>
      </motion.div>
    </div>
  );
};

export default CardType31;
