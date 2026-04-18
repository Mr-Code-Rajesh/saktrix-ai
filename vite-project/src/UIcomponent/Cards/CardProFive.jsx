import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 26,
    title: "Magnetic CTA Button",
    description: "A button that moves toward your cursor with spring physics for high interactivity.",
    icon: IconsImg ,
  },
];


const CardType26 = () => {
  const card = cardData.find((item) => item.id === 26);

  const cardRef = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 20 });
  const springY = useSpring(y, { stiffness: 300, damping: 20 });

  const handleMouseMove = (e) => {
    const bounds = cardRef.current.getBoundingClientRect();
    const mouseX = e.clientX - bounds.left - bounds.width / 2;
    const mouseY = e.clientY - bounds.top - bounds.height / 2;
    x.set(mouseX / 5);
    y.set(mouseY / 5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="w-80 h-64 bg-white dark:bg-gray-800 rounded-xl shadow-xl relative flex flex-col items-center justify-center text-center p-6 transition-all"
      >
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">{card.description}</p>

        <motion.button
          style={{ x: springX, y: springY }}
          className="px-5 py-2 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-lg shadow-md hover:scale-105 transition-transform"
        >
          Hover Me
        </motion.button>
      </div>
    </div>
  );
};

export default CardType26;
