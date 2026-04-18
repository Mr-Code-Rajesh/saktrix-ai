import React from "react";
import IconsImg from '../../assets/Images/logo1.png';


 const cardData = [
  {
    id: 12,
    title: "Text Mask Reveal",
    description: "Text fills with gradient color animation on hover.",
    icon: IconsImg,
  },
];

const CardType12 = () => {
  const card = cardData.find((item) => item.id === 12);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer p-6 flex flex-col items-center justify-center text-center group">
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white 
          transition-colors duration-500
          group-hover:text-transparent
          group-hover:bg-clip-text
          group-hover:bg-gradient-to-r
          group-hover:from-indigo-500
          group-hover:via-purple-500
          group-hover:to-pink-500"
        >
          {card.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
      </div>
    </div>
  );
};

export default CardType12;
