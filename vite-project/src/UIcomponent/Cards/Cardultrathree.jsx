import React, { useState, useRef } from "react";
import IconsImg from '../../assets/Images/logo1.png';


const cardData = [
  {
    id: 15,
    title: "Ripple Water Effect",
    description: "Ripple animation spreading from cursor on hover.",
    icon:IconsImg,
  },
];

const CardType15 = () => {
  const card = cardData.find((item) => item.id === 15);
  const [ripples, setRipples] = useState([]);
  const containerRef = useRef(null);

  const createRipple = (event) => {
    const rect = containerRef.current.getBoundingClientRect();
    const size = rect.width > rect.height ? rect.width : rect.height;
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    const newRipple = { x, y, size, id: Date.now() };
    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div
        ref={containerRef}
        onMouseDown={createRipple}
        className="relative w-80 h-52 rounded-xl bg-white dark:bg-gray-800 shadow-lg cursor-pointer overflow-hidden p-6 flex flex-col items-center justify-center text-center select-none"
      >
        <img src={card.icon} alt="icon" className="w-12 h-12 mb-3" />
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{card.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{card.description}</p>

        {/* Ripples */}
        {ripples.map(({ x, y, size, id }) => (
          <span
            key={id}
            style={{
              left: x,
              top: y,
              width: size,
              height: size,
            }}
            className="absolute rounded-full bg-indigo-500 opacity-50 animate-ripple pointer-events-none"
          />
        ))}

        <style>{`
          @keyframes ripple {
            0% {
              transform: scale(0.1);
              opacity: 0.6;
            }
            100% {
              transform: scale(2.5);
              opacity: 0;
            }
          }
          .animate-ripple {
            animation: ripple 0.6s linear;
          }
        `}</style>
      </div>
    </div>
  );
};

export default CardType15;
