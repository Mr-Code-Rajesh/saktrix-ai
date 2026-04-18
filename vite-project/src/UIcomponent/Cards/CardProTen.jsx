import React from "react";
import IconsImg from '../../assets/Images/logo1.png'

const cardData = [
  {
    id: 19,
    title: "Gradient Border Pulse",
    description: "Smooth pulsing animated gradient border around the card.",
    icon: IconsImg,
  },
];

const CardType19 = () => {
  const card = cardData.find((item) => item.id === 19);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 rounded-xl p-1 cursor-pointer">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-gradientPulse blur-sm"></div>

        {/* Card Content */}
        <div className="relative z-10 h-full rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-center p-6 text-center">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
        </div>

        <style>{`
          @keyframes gradientPulse {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          .animate-gradientPulse {
            background-size: 200% 200%;
            animation: gradientPulse 3s ease infinite;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardType19;
