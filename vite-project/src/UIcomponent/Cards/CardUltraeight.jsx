import React from "react";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 7,
    title: "Color Fill Reveal",
    description: "Background color slides down smoothly on hover.",
    icon: IconsImg,
  },
];

const CardType7 = () => {
  const card = cardData.find((item) => item.id === 7);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden cursor-pointer group">
        {/* Color fill */}
        <div className="absolute top-0 left-0 w-full h-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-t-xl group-hover:h-full transition-all duration-500 ease-in-out z-0" />

        {/* Card content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-white transition-colors duration-500">
            {card.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 group-hover:text-white transition-colors duration-500 text-sm">
            {card.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardType7;
