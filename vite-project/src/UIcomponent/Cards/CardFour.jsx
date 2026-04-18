import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const cardData = [
  {
    id: 30,
    title: "Tilt Parallax Card",
    description: "3D tilt card with layered parallax effect responding to mouse movement.",
    layers: [
      { id: 1, content: "Layer 1", depth: 10, color: "rgba(59, 130, 246, 0.6)" },
      { id: 2, content: "Layer 2", depth: 20, color: "rgba(147, 197, 253, 0.6)" },
      { id: 3, content: "Layer 3", depth: 30, color: "rgba(219, 234, 254, 0.6)" },
    ],
  },
];


const CardType30 = () => {
  const card = cardData.find((item) => item.id === 30);

  // Motion values for cursor position
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Calculate rotation angles based on cursor position inside card
  const rotateX = useTransform(y, [0, 1], [10, -10]);
  const rotateY = useTransform(x, [0, 1], [-10, 10]);

  const handleMouseMove = (event) => {
    const cardRect = event.currentTarget.getBoundingClientRect();
    const posX = (event.clientX - cardRect.left) / cardRect.width;
    const posY = (event.clientY - cardRect.top) / cardRect.height;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <motion.div
        className="relative w-80 h-60 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 shadow-2xl cursor-pointer overflow-hidden"
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          perspective: 600,
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Layers */}
        {card.layers.map((layer) => (
          <motion.div
            key={layer.id}
            className="absolute inset-0 rounded-xl"
            style={{
              backgroundColor: layer.color,
              translateZ: `${layer.depth}px`,
              transformStyle: "preserve-3d",
              zIndex: layer.id,
              filter: "blur(2px)",
            }}
          />
        ))}

        {/* Foreground Content */}
        <motion.div
          className="relative z-30 flex flex-col items-center justify-center h-full text-white px-6 select-none"
          style={{ transformStyle: "preserve-3d" }}
        >
          <h3 className="text-2xl font-bold">{card.title}</h3>
          <p className="mt-2 text-sm">{card.description}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CardType30;
