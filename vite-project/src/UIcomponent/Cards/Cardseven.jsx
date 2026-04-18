import React from "react";
import { motion } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 2,
    title: "Neon Glow Hover",
    description: "Glowing neon border and text effect on hover.",
    icon: IconsImg,
  },
];


const CardType2 = () => {
  const card = cardData.find((item) => item.id === 2);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="relative w-80 h-52 p-6 rounded-xl bg-black text-white dark:bg-black shadow-lg group transition-all duration-300 border border-transparent"
      >
        {/* Glow border */}
        <div className="absolute inset-0 rounded-xl z-0 transition-all duration-300 group-hover:shadow-[0_0_25px_4px_#00fff7] group-hover:border-[#00fff7]" />

        {/* Card Content */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-white group-hover:text-[#00fff7] transition duration-300">
            {card.title}
          </h3>
          <p className="text-gray-300 group-hover:text-[#9efffc] transition duration-300 text-sm">
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardType2;
