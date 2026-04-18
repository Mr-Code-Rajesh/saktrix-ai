import React from "react";
import IconsImg from '../../assets/Images/logo1.png';


const cardData = [
  {
    id: 16,
    title: "Neon Outline Glow",
    description: "Neon glowing outline that pulses on hover.",
    icon: IconsImg,
  },
];

const CardType16 = () => {
  const card = cardData.find((item) => item.id === 16);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-6">
      <div
        className="w-80 h-52 rounded-xl bg-gray-900 cursor-pointer p-6 flex flex-col items-center justify-center text-center
          border-4 border-transparent
          relative
          transition-all duration-700
          before:absolute before:inset-0 before:rounded-xl before:border-4 before:border-purple-500
          before:opacity-50 before:blur-lg
          hover:before:opacity-100
          hover:before:animate-pulseNeon"
      >
        <img
          src={card.icon}
          alt="icon"
          className="w-12 h-12 mb-3 filter drop-shadow-lg"
        />
        <h3 className="text-2xl font-bold text-white">{card.title}</h3>
        <p className="text-gray-300 mt-1">{card.description}</p>

        <style>{`
          @keyframes pulseNeon {
            0%, 100% {
              box-shadow:
                0 0 5px #a78bfa,
                0 0 10px #a78bfa,
                0 0 20px #8b5cf6,
                0 0 30px #7c3aed,
                0 0 40px #6d28d9;
              opacity: 0.7;
            }
            50% {
              box-shadow:
                0 0 10px #c4b5fd,
                0 0 20px #c4b5fd,
                0 0 30px #a78bfa,
                0 0 40px #8b5cf6,
                0 0 50px #7c3aed;
              opacity: 1;
            }
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardType16;
