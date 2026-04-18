import React from "react";
import IconsImg from '../../assets/Images/logo1.png';

const cardData = [
  {
    id: 8,
    title: "Progress Border Animation",
    description: "Animated border progresses from start to end on hover.",
    icon: IconsImg,
  },
];

const CardType8 = () => {
  const card = cardData.find((item) => item.id === 8);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="relative w-80 h-52 p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg group overflow-hidden">
        
        {/* Animated Border using ::before */}
        <div className="absolute inset-0 rounded-xl before:absolute before:inset-0 before:rounded-xl before:animate-border-progress before:bg-[linear-gradient(90deg,#06b6d4,#3b82f6,#06b6d4)] before:opacity-0 group-hover:before:opacity-100 before:z-0"></div>

        {/* Card Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
          <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{card.title}</h3>
          <p className="text-gray-500 dark:text-gray-300 text-sm">{card.description}</p>
        </div>

        {/* Custom Styles */}
        <style>{`
          .group:hover .before\\:opacity-100::before {
            opacity: 1;
          }

          .before\\:animate-border-progress::before {
            content: '';
            padding: 2px;
            background-size: 200% auto;
            background-position: 0% center;
            animation: border-progress 3s linear infinite;
            mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            mask-composite: exclude;
            -webkit-mask-composite: destination-out;
          }

          @keyframes border-progress {
            0% {
              background-position: 0% center;
            }
            100% {
              background-position: 200% center;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardType8;
