import React from "react";
import { motion } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 1,
    title: "Progress Border",
    description: "A card with a loading-style animated border on hover.",
    icon: IconsImg, // you can change path/image/icon
  },
];

const CardType1 = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-white dark:from-gray-900 dark:to-black p-6">
      {cardData.map((card) => (
        <motion.div
          key={card.id}
          className="relative w-80 h-48 p-5 rounded-xl bg-white dark:bg-gray-900 shadow-xl group overflow-hidden"
          whileHover="hover"
        >
          {/* Animated Border - Top */}
          <motion.span
            className="absolute top-0 left-0 h-1 bg-blue-500"
            variants={{
              hover: { width: "100%", transition: { duration: 0.3 } },
              initial: { width: 0 },
            }}
            initial="initial"
          />
          {/* Animated Border - Right */}
          <motion.span
            className="absolute top-0 right-0 w-1 bg-blue-500"
            variants={{
              hover: { height: "100%", transition: { duration: 0.3, delay: 0.3 } },
              initial: { height: 0 },
            }}
            initial="initial"
          />
          {/* Animated Border - Bottom */}
          <motion.span
            className="absolute bottom-0 right-0 h-1 bg-blue-500"
            variants={{
              hover: { width: "100%", transition: { duration: 0.3, delay: 0.6 } },
              initial: { width: 0 },
            }}
            initial="initial"
          />
          {/* Animated Border - Left */}
          <motion.span
            className="absolute bottom-0 left-0 w-1 bg-blue-500"
            variants={{
              hover: { height: "100%", transition: { duration: 0.3, delay: 0.9 } },
              initial: { height: 0 },
            }}
            initial="initial"
          />

          {/* Card Content */}
          <div className="z-10 relative flex flex-col items-center justify-center h-full text-center">
            <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">{card.title}</h3>
            <p className="text-gray-500 dark:text-gray-300 text-sm mt-2">{card.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CardType1;
