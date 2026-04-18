import React from "react";
import IconsImg from '../../assets/Images/logo1.png'


const cardData = [
  {
    id: 22,
    title: "Multi-Color Border Trail",
    description: "A stunning animated border trail that cycles colors smoothly.",
    icon: IconsImg,
  },
];

const CardType22 = () => {
  const card = cardData.find((item) => item.id === 22);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 p-[2px] rounded-xl group bg-gradient-to-r from-pink-500 via-yellow-500 to-purple-500 animate-borderTrail">
        {/* Inner Content */}
        <div className="bg-white dark:bg-gray-800 w-full h-full rounded-xl flex flex-col items-center justify-center text-center p-6 shadow-md transition-transform duration-500 group-hover:scale-105">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {card.title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">{card.description}</p>
        </div>

        <style>{`
          @keyframes borderTrail {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          .animate-borderTrail {
            background-size: 200% 200%;
            animation: borderTrail 4s linear infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardType22;
