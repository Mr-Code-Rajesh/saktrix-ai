import React from "react";
import IconsImg from '../../assets/Images/logo1.png';

const cardData = [
  {
    id: 11,
    title: "Pulse Glow Animation",
    description: "Soft glowing pulse effect on hover.",
    icon: IconsImg,
  },
];

const CardType11 = () => {
  const card = cardData.find((item) => item.id === 11);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer p-6 flex flex-col items-center justify-center text-center
        transition-transform duration-300
        hover:scale-[1.03]
        relative
        before:absolute
        before:inset-0
        before:rounded-xl
        before:bg-gradient-to-r
        before:from-purple-400
        before:via-pink-500
        before:to-indigo-500
        before:opacity-0
        before:blur-xl
        before:transition-opacity
        before:duration-700
        hover:before:opacity-75
        before:animate-pulseGlow
      ">
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3 relative z-10" />
        <h3 className="text-xl font-bold text-gray-900 dark:text-white relative z-10">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm relative z-10">{card.description}</p>

      <style>{`
        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.7;
            box-shadow: 0 0 8px 4px rgba(129, 46, 236, 0.7);
          }
          50% {
            opacity: 0.3;
            box-shadow: 0 0 20px 8px rgba(129, 46, 236, 0.4);
          }
        }
      `}</style>
      </div>
    </div>
  );
};

export default CardType11;
