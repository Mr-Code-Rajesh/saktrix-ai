import React from "react";
import IconsImg from '../../assets/Images/logo1.png'


const cardData = [
 
  {
    id: 3,
    title: "Shine Layer Effect",
    description: "A light shine glides across the card on hover.",
    icon: IconsImg,
  },
];


const CardType3 = () => {
  const card = cardData.find((item) => item.id === 3);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg overflow-hidden group transition duration-300">
        {/* Shine layer */}
        <div className="absolute inset-0 before:absolute before:top-0 before:left-[-75%] before:w-1/3 before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/30 before:to-transparent before:rotate-12 before:translate-x-0 group-hover:before:translate-x-[200%] before:transition-transform before:duration-700 before:ease-in-out rounded-xl z-10 pointer-events-none" />

        {/* Card Content */}
        <div className="relative z-20 flex flex-col justify-center items-center text-center h-full">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{card.description}</p>
        </div>
      </div>
    </div>
  );
};

export default CardType3;
