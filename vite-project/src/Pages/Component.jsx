// import { Button } from "@/components/ui/button";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiFramer, SiSwiper } from "react-icons/si";
import { FaBullhorn, FaLaptopCode, FaRocket } from 'react-icons/fa';
import { MdAnimation } from "react-icons/md"; // Replace SiAos with this

import { useNavigate } from 'react-router-dom';
import MarketingUI from "../Layout/MarketingUi";

export const ComponentGrid = ()=> {
  const navigate = useNavigate();

  const goToHero = () => {
    navigate('/components/hero'); // ✅ Full path
  };

  return (
    <section className="w-full px-6 py-12 md:py-20 bg-white dark:bg-black text-gray-800 dark:text-gray-100 transition-colors">
      {/* Header */}
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent">
          Build Faster with Saktrix UI Components
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300">
          Saktrix components are built to help startups, developers, and creators build stunning
          user interfaces faster with modern tools.
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap justify-center gap-5 mt-6 text-3xl">
          <SiTailwindcss title="TailwindCSS" className="text-sky-400" />
          <FaReact title="React" className="text-cyan-400" />
          <SiFramer title="Framer Motion" className="text-pink-400" />
          <SiSwiper title="Swiper" className="text-purple-400" />
          <MdAnimation title="AOS Animation" className="text-amber-400" />
          <FaHtml5 title="HTML5" className="text-orange-500" />
          <FaCss3Alt title="CSS3" className="text-blue-500" />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg hover:brightness-110 px-3 py-2 rounded-sm cursor-pointer">
            Live Preview
          </button>
          <button variant="outline" className=" border border-black/10 text-gray-900 hover:bg-white/50 dark:border-white/20 rounded-sm dark:text-white dark:hover:bg-white/10 transition cursor-pointer px-2 py-1">
            Documentation
          </button>
        </div>
      </div>


      {/* Ui Buttons */}
      <div className="flex justify-center items-center mt-10">
      <div className="inline-flex rounded-xl shadow-md overflow-hidden border dark:border-gray-700 border-gray-300 bg-white dark:bg-gray-800">

        {/* Marketing UI */}
        <button className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-pink-500 transition">
          <FaBullhorn className="text-white text-lg" />
          Marketing UI
        </button>

        {/* Application UI */}
        <button className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800 border-l border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition">
          <FaLaptopCode className="text-purple-500 dark:text-purple-400 text-lg" />
          Application UI
        </button>

        {/* Get Full Access */}
        <button className="flex items-center gap-2 px-6 py-3 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition uppercase tracking-wide">
          <FaRocket className="text-white text-lg" />
          Get Full Access
        </button>

       </div>
     </div>
  

      {/* Marketing Component Section */}
      <div className="max-w-4xl mx-auto mt-20 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white uppercase">
          Marketing UI
        </h2>
        <p className="text-md md:text-lg text-gray-600 dark:text-gray-400">
          Explore our pre-built UI sections like Hero, About, Pricing, Sign In, and Sign Up — all designed to power your SaaS, portfolio, and product landing pages with speed and style.
        </p>
      </div>

      <div>
        <MarketingUI/>
      </div>
    </section>
  );
}












