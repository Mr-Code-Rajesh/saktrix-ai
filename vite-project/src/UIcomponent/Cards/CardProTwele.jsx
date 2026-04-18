import React from "react";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 17,
    title: "Slide Up Fade In",
    description: "Content slides up and fades in on hover with smooth animation.",
    icon: IconsImg,
  },
];

const CardType17 = () => {
  const card = cardData.find((item) => item.id === 17);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer p-6 flex flex-col items-center justify-center text-center
          overflow-hidden
          group"
      >
        <img
          src={card.icon}
          alt="icon"
          className="w-12 h-12 mb-3 opacity-70 group-hover:opacity-100 transition-opacity duration-500"
        />
        <h3
          className="text-xl font-semibold text-gray-900 dark:text-white
            transform translate-y-4 opacity-70
            group-hover:translate-y-0 group-hover:opacity-100
            transition-all duration-500"
        >
          {card.title}
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 text-sm
            transform translate-y-4 opacity-60
            group-hover:translate-y-0 group-hover:opacity-90
            transition-all duration-500"
        >
          {card.description}
        </p>
      </div>
    </div>
  );
};

export default CardType17;
