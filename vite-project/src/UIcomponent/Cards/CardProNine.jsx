import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import IconsImg from '../../assets/Images/logo1.png'


const cardData = [
  {
    id: 23,
    title: "3D Tilt Hover",
    description: "Mouse-based tilt with dynamic shadow for a premium 3D effect.",
    icon: IconsImg,
  },
];

const CardType23 = () => {
  const card = cardData.find((item) => item.id === 23);

  const cardRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);
  const shadow = useTransform(
    [x, y],
    ([xVal, yVal]) => {
      const offsetX = (xVal - 0.5) * 40;
      const offsetY = (yVal - 0.5) * 40;
      return `${offsetX}px ${offsetY}px 40px rgba(0,0,0,0.2)`;
    }
  );

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        style={{
          rotateX,
          rotateY,
          boxShadow: shadow,
          transformStyle: "preserve-3d",
        }}
        className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 transition-transform duration-300 p-6 text-center flex flex-col items-center justify-center"
      >
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
      </motion.div>
    </div>
  );
};

export default CardType23;
