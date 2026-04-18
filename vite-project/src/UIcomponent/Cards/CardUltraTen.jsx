import React from "react";
import IconsImg from '../../assets/Images/logo1.png';


const cardData = [
  {
    id: 14,
    title: "Diagonal Slide In Content",
    description: "Content slides diagonally with fade effect on hover.",
    icon:IconsImg,
  },
];


const CardType14 = () => {
  const card = cardData.find((item) => item.id === 14);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer overflow-hidden group p-6 flex flex-col items-center justify-center text-center relative">
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3 transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-transform duration-500 group-hover:translate-x-4 group-hover:-translate-y-4">
          {card.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm transition-opacity duration-500 group-hover:opacity-80">
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardType14;
