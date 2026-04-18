import React from "react";
import { motion } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 4,
    title: "Rotate & Scale",
    description: "Card rotates and scales up on hover for 3D motion.",
    icon: IconsImg,
  },
];


const CardType4 = () => {
  const card = cardData.find((item) => item.id === 4);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-200 to-white dark:from-gray-900 dark:to-black p-6">
      <motion.div
        whileHover={{ rotate: 6, scale: 1.07 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="w-80 h-52 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-xl cursor-pointer"
      >
        <div className="flex flex-col justify-center items-center h-full text-center">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{card.description}</p>
        </div>
      </motion.div>
    </div>
  );
};

export default CardType4;
