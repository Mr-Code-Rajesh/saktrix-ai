import React from "react";
import IconsImg from '../../assets/Images/logo1.png'


const cardData = [
  {
    id: 6,
    title: "Animated Gradient Border",
    description: "A lively animated border gradient on hover.",
    icon: IconsImg,
  },
];

const CardType6 = () => {
  const card = cardData.find((item) => item.id === 6);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-black p-6">
      <div className="relative w-80 h-52 p-[2px] rounded-xl group">
        {/* Animated Gradient Border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-border-spin opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Card Inner */}
        <div className="relative z-10 w-full h-full rounded-xl bg-white dark:bg-gray-900 p-6 flex flex-col justify-center items-center text-center shadow-lg">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{card.description}</p>
        </div>
      </div>

      {/* Tailwind animation keyframe hack */}
      <style>{`
        @keyframes border-spin {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .animate-border-spin {
          background-size: 200% 200%;
          animation: border-spin 3s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default CardType6;
