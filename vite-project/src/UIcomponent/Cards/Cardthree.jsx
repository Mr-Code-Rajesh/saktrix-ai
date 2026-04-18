import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 5,
    title: "Gradient Cursor Sync",
    description: "Card gradient & text sync with cursor color on hover.",
    icon: IconsImg,
  },
];

const CardType5 = () => {
  const card = cardData.find((item) => item.id === 5);
  const [hovered, setHovered] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-6">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        animate={{
          background: hovered
            ? "linear-gradient(135deg, #ff0080, #7928ca)"
            : "linear-gradient(135deg, #38bdf8, #3b82f6)",
        }}
        transition={{ duration: 0.4 }}
        className="w-80 h-52 p-6 rounded-xl shadow-xl cursor-pointer relative overflow-hidden"
      >
        <div className="z-10 relative flex flex-col items-center justify-center text-center h-full">
          <img
            src={card.icon}
            alt="icon"
            className="w-12 h-12 mb-3"
            style={{ filter: hovered ? "brightness(2)" : "brightness(1)" }}
          />
          <h3
            className={`text-xl font-bold ${
              hovered ? "text-white" : "text-gray-800 dark:text-white"
            }`}
          >
            {card.title}
          </h3>
          <p
            className={`text-sm mt-2 ${
              hovered ? "text-white/80" : "text-gray-600 dark:text-gray-300"
            }`}
          >
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardType5;
