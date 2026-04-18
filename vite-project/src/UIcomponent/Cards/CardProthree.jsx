import React from "react";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 18,
    title: "Rotating Image Overlay",
    description: "Image overlay rotates smoothly on hover for dynamic effect.",
    icon: IconsImg,
  },
];


const CardType18 = () => {
  const card = cardData.find((item) => item.id === 18);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer overflow-hidden group">
        {/* Rotating Image Overlay */}
        <img
          src={card.icon}
          alt="icon"
          className="absolute top-4 left-4 w-20 h-20 opacity-30 transition-transform duration-700 group-hover:rotate-12"
        />
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full p-6 text-center">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardType18;
