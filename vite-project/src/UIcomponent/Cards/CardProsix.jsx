import React from "react";
import IconsImg from '../../assets/Images/logo1.png'
import img1 from '../../assets/bg/snow1.jpg'


const cardData = [
  {
    id: 20,
    title: "Shadow Depth Hover",
    description: "Deep, dynamic shadow and subtle scale up on hover for 3D effect.",
    icon: IconsImg,
  },
];


const CardType20 = () => {
  const card = cardData.find((item) => item.id === 20);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-md cursor-pointer p-6 flex flex-col items-center justify-center text-center
          transition-shadow  duration-500 ease-in-out
          hover:shadow-2xl hover:scale-105"
      >
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
      </div>
    </div>
  );
};

export default CardType20;
