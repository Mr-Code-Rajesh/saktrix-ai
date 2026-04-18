import React from "react";
import IconsImg from '../../assets/Images/logo1.png';

const cardData = [
  {
    id: 9,
    title: "3D Flip Card",
    description: "Flip card to reveal back content on hover.",
    iconFront: IconsImg,
    iconBack: IconsImg,
    backContent: "More details revealed here on the back side!",
  },
];

const CardType9 = () => {
  const card = cardData.find((item) => item.id === 9);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-80 h-52 perspective group">
        <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d group-hover:rotate-y-180 cursor-pointer">
          
          {/* Front Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg flex flex-col items-center justify-center p-6">
            <img src={card.iconFront} alt="Front icon" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{card.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>
          </div>

          {/* Back Side */}
          <div className="absolute w-full h-full backface-hidden rounded-xl bg-indigo-600 text-white dark:bg-indigo-700 shadow-lg flex flex-col items-center justify-center p-6 rotate-y-180">
            <img src={card.iconBack} alt="Back icon" className="w-12 h-12 mb-3" />
            <h3 className="text-xl font-bold">{card.title} Details</h3>
            <p className="text-sm">{card.backContent}</p>
          </div>
        </div>
      </div>

      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .backface-hidden {
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
};

export default CardType9;
