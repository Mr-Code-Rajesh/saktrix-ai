 import React, { useState } from "react";
import { motion } from "framer-motion";
import IconImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 28,
    title: "Morphing Blob Card",
    description: "An animated card that morphs into an organic blob shape with smooth hover interaction.",
    icon:IconImg,
  },
];  


const CardType28 = () => {
  const card = cardData.find((item) => item.id === 28);
  const [hovered, setHovered] = useState(false);

  const morphVariants = {
    rest: {
      borderRadius: "20% 50% 50% 20% / 50% 20% 50% 20%",
      backgroundColor: "#1e293b",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
    hover: {
      borderRadius: "40% 30% 60% 30% / 40% 60% 30% 60%",
      backgroundColor: "#3b82f6",
      transition: {
        duration: 0.7,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        variants={morphVariants}
        initial="rest"
        animate={hovered ? "hover" : "rest"}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="w-72 h-72 p-6 text-white dark:text-white cursor-pointer flex flex-col items-center justify-center shadow-2xl"
      >
        <motion.img
          src={card.icon}
          alt="blob icon"
          initial={{ y: 0 }}
          animate={hovered ? { y: -10 } : { y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-14 h-14 mb-4"
        />
        <motion.h3
          initial={{ opacity: 1 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0.8 }}
          className="text-xl font-bold text-center"
        >
          {card.title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0.8 }}
          animate={hovered ? { opacity: 1 } : { opacity: 0.7 }}
          className="text-sm mt-2 text-center"
        >
          {card.description}
        </motion.p>
      </motion.div>
    </div>
  );
};

export default CardType28;
