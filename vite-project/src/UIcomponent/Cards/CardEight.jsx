import React from "react";
import { motion } from "framer-motion";
import { FaHourglassHalf } from "react-icons/fa";

const cardData = [
  {
    id: 32,
    title: "Frosted Glass Card",
    description:
      "A stylish frosted glass effect card with blur and smooth hover animation.",
    icon: <FaHourglassHalf />,
  },
];

const CardType32 = () => {
  const card = cardData.find((item) => item.id === 32);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-300 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6">
      <motion.div
        className="w-80 h-56 rounded-xl bg-white/30 dark:bg-gray-700/30 backdrop-blur-md border border-white/25 dark:border-gray-500/30 shadow-lg cursor-pointer flex flex-col items-center justify-center p-6 text-gray-900 dark:text-gray-100"
        whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(255,255,255,0.3)" }}
        transition={{ type: "spring", stiffness: 150, damping: 12 }}
      >
        <img src={card.icon} alt="glass icon" className="w-14 h-14 mb-4" />
        <h3 className="text-2xl font-semibold">{card.title}</h3>
        <p className="mt-2 text-center text-sm">{card.description}</p>
      </motion.div>
    </div>
  );
};

export default CardType32;
