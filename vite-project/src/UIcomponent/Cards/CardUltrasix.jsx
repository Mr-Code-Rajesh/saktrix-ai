import React from "react";
import IconsImg from '../../assets/Images/logo1.png';

 const cardData = [
  {
    id: 13,
    title: "Shadow Lift + Depth",
    description: "Card lifts with layered shadows for a floating 3D effect on hover.",
    icon: IconsImg,
  },
];

const CardType13 = () => {
  const card = cardData.find((item) => item.id === 13);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 cursor-pointer p-6 flex flex-col items-center justify-center text-center
        transition-transform duration-300 ease-in-out
        hover:-translate-y-4
        hover:shadow-[0_10px_15px_rgba(0,0,0,0.1),0_4px_6px_rgba(0,0,0,0.1),0_15px_20px_rgba(0,0,0,0.07)]
        dark:hover:shadow-[0_10px_15px_rgba(255,255,255,0.1),0_4px_6px_rgba(255,255,255,0.05),0_15px_20px_rgba(255,255,255,0.07)]
      ">
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
      </div>
    </div>
  );
};

export default CardType13;
