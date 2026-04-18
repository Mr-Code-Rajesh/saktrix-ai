import React from "react";
import IconsImg from '../../assets/Images/logo1.png';

const cardData = [
  {
    id: 10,
    title: "Glassmorphism Frosted Glass",
    description: "Translucent blurred frosted glass effect with glow on hover.",
    icon: IconsImg,
  },
];

const CardType10 = () => {
  const card = cardData.find((item) => item.id === 10);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-indigo-100 to-pink-100 dark:from-gray-900 dark:to-gray-800 p-6">
      <div className="w-80 h-52 rounded-xl bg-white/20 dark:bg-white/10 backdrop-blur-md border border-white/30 dark:border-white/20 shadow-lg cursor-pointer transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:border-white/50 flex flex-col items-center justify-center text-center p-6">
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300">{card.description}</p>
      </div>
    </div>
  );
};

export default CardType10;
