import React from "react";
import img1 from '../../assets/bg/snow1.jpg'


const cardData = [
  {
    id: 21,
    title: "Hover Blur Zoom Split",
    description: "Left image zooms with blur, right content slides in with style.",
    image: img1, // Add a sample image
  },
];

const CardType21 = () => {
  const card = cardData.find((item) => item.id === 21);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 p-6">
      <div className="w-full max-w-4xl h-64 md:h-80 rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row group">
        {/* Left - Image */}
        <div className="w-full md:w-1/2 h-64 md:h-auto overflow-hidden relative">
          <img
            src={card.image}
            alt="Card visual"
            className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110 group-hover:blur-sm"
          />
        </div>

        {/* Right - Content */}
        <div
          className="w-full md:w-1/2 bg-white dark:bg-gray-800 flex flex-col justify-center items-start p-6 gap-3
          transition-all duration-700 ease-in-out transform group-hover:translate-x-0 group-hover:opacity-100 translate-x-8 opacity-80"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
            {card.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            {card.description}
          </p>
          <button className="mt-4 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-lg hover:scale-105 transition-transform">
            Explore
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardType21;
