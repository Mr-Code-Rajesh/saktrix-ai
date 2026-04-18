import React, { useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import img1 from '../../assets/bg/snow1.jpg'
import img2 from '../../assets/bg/snow2.jpg'
import img3 from '../../assets/cimg/About.png'

 const cardData = [
  {
    id: 24,
    title: "Layered Parallax Card",
    description: "3-layer depth illusion on hover for a futuristic parallax feel.",
    imageBg: img1,
    imageMid: img2,
    imageFront: img3,
  },
];


const CardType24 = () => {
  const card = cardData.find((item) => item.id === 24);

  const containerRef = useRef(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const transformLayer = (factorX, factorY) => ({
    x: useTransform(x, [0, 1], [-factorX, factorX]),
    y: useTransform(y, [0, 1], [-factorY, factorY]),
  });

  const layer1 = transformLayer(20, 20); // BG
  const layer2 = transformLayer(40, 40); // MID
  const layer3 = transformLayer(60, 60); // FRONT

  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const offsetX = (e.clientX - rect.left) / rect.width;
    const offsetY = (e.clientY - rect.top) / rect.height;
    x.set(offsetX);
    y.set(offsetY);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        className="relative w-[320px] h-[220px] rounded-2xl overflow-hidden shadow-2xl cursor-pointer"
      >
        {/* Background Layer */}
        <motion.img
          src={card.imageBg}
          alt="bg"
          className="absolute inset-0 w-full h-full object-cover"
          style={layer1}
        />

        {/* Mid Layer */}
        <motion.img
          src={card.imageMid}
          alt="mid"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          style={layer2}
        />

        {/* Foreground Layer */}
        <motion.img
          src={card.imageFront}
          alt="front"
          className="absolute inset-0 w-full h-full object-contain pointer-events-none"
          style={layer3}
        />

        {/* Text Overlay */}
        <div className="absolute bottom-0 w-full p-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md z-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{card.title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardType24;
