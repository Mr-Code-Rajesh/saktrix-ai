import React, { useState } from "react";
import { FaCopy, FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif'


const htmlCode = `
<!DOCTYPE html>
<html lang="en" class="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Saktrix Hero Section</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://unpkg.com/@motionone/dom"></script>
  </head>
  <body class="bg-black text-white">

    <section class="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 flex items-center justify-center py-20">
      
      <!-- Floating Particles -->
      <div class="absolute inset-0 z-0 overflow-hidden" id="particles-container"></div>

      <!-- Stars Background -->
      <div class="absolute inset-0 z-0">
        <div class="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff0c,_#000000)] animate-pulse opacity-20"></div>
      </div>

      <!-- Energy Waves -->
      <div class="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>

      <!-- Glass Card -->
      <div class="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 justify-between gap-12 shadow-2xl">

        <!-- Left Content -->
        <div class="max-w-lg space-y-6 text-center md:text-left">
          <span class="inline-block text-xs tracking-widest uppercase bg-white/10 text-white rounded-full px-3 py-1">
            🚀 Our Services
          </span>
          <h1 class="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
            Power Up Your
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"> Business</span>
            with Saktrix
          </h1>
          <span class="text-sm tracking-wider text-purple-400 uppercase font-semibold">
            AI + Web Tech | Strategy | Research
          </span>
          <p class="text-gray-300 leading-relaxed max-w-xl">
            We craft next-generation digital solutions using AI, web technologies, and research-driven strategies — unlocking new levels of success for you!
          </p>
          <div class="flex gap-4 justify-center md:justify-start">
            <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300">
              Get Started
            </button>
            <button class="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition duration-300">
              Learn More
            </button>
          </div>
        </div>

        <!-- Right Image -->
        <div class="relative w-80 h-80 md:w-96 md:h-96 overflow-hidden rounded-2xl border-4 border-white/10 shadow-[0_0_40px_5px_rgba(147,51,234,0.4)] bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500">
          <img src="your-path-to/ai.gif" alt="Futuristic AI" class="w-full h-full object-contain motion-safe:animate-fade-in" />
        </div>
      </div>
    </section>

    <!-- JavaScript for Floating Particles using motion.one -->
    <script>
      const container = document.getElementById('particles-container');

      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 6 + 2;
        const duration = 5 + Math.random() * 10;

        particle.className = 'absolute bg-white/10 rounded-full';
        particle.style.width = {size}px;                // use dolor symble template string before the curly bracket
        particle.style.height = {size}px;               // use dolor symble template string before the curly bracket
        particle.style.top = {Math.random() * 100}%;    // use dolor symble template string before the curly bracket
        particle.style.left = {Math.random() * 100}%;   // use dolor symble template string before the curly bracket

        container.appendChild(particle);

        // Animate using Motion One
        window.motion.animate(particle, {
          y: ["0px", "-20px", "0px"],
        }, {
          duration: duration,
          easing: "ease-in-out",
          repeat: Infinity
        });
      }
    </script>
  </body>
</html>

`;

const reactCode = `
import React from 'react';
import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif'; //  set image path 

export const Hero = () => {
  return (
      <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 flex items-center justify-center py-20">
      
            {/* Floating Particles */}
            <div className="absolute inset-0 z-0 overflow-hidden">
              {[...Array(30)].map((_, i) => (
                <div
                  key={i}
                  className="absolute bg-white/10 rounded-full"
                  style={{
                    width: {Math.random() * 6 + 2}px,   // use dolor symble template string before the curly bracket
                    height: {Math.random() * 6 + 2}px,  // use dolor symble template string before the curly bracket
                    top: {Math.random() * 100}%,        // use dolor symble template string before the curly bracket
                    left: {Math.random() * 100}%,       // use dolor symble template string before the curly bracket
                    animation: float {5 + Math.random() * 10}s ease-in-out infinite, // use dolor symble template string before the curly bracket
                  }}
                />
              ))}
            </div> 
      
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff0c,_#000000)] animate-pulse opacity-20"></div>
      </div>
      
      {/* Energy Waves */}
      <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>
      
      {/* Glassmorphism Card */}
      <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 justify-between gap-12 shadow-2xl">
          {/* Left Side Text */}
          <div className="max-w-lg space-y-6 text-center md:text-left">
                <span className="inline-block text-xs tracking-widest uppercase bg-white/10 text-white rounded-full px-3 py-1">
                  🚀 Our Services
                </span>
                <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
                  Power Up Your  
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"> Business</span> 
                  with Saktrix
                </h1>
                <span className="text-sm tracking-wider text-purple-400 uppercase font-semibold">
                 AI + Web Tech | Strategy | Research
                </span>
                <p className="text-gray-300 leading-relaxed max-w-xl">
                  We craft next-generation digital solutions using AI, web technologies, and research-driven strategies — unlocking new levels of success for you!
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300">
                    Get Started
                  </button>
                  <button className="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
      
              {/* Right Side Image */}
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <motion.img initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, ease: 'easeOut' }}
                whileHover={{ scale: 1.02 }} src={Ai} alt="Futuristic AI" className="w-full h-full object-contain rounded-2xl border-3 border-white/10 
                shadow-[0_0_40px_5px_rgba(147,51,234,0.4)]  bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"/>
          {/* <div className="absolute inset-0 rounded-full bg-white/10 blur-sm animate-pulse"></div> */}
        </div>
      </div>
    </section>
  );
};`;

export const Heroone = () => {
  const [view, setView] = useState("preview"); // 'preview' | 'code'
  const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

  const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
  };

  return (
    <>
   
     {/* Viewer Container */}
       <section className="min-h-screen w-full my-15 bg-white  text-black dark:text-white flex flex-col items-center justify-center relative overflow-hidden  dark:bg-gray-900 rounded-2xl  shadow-2xl border border-gray-300  dark:border-gray-700 transition-all duration-500">
        
        <div className="min-h-screen w-full mx-auto">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-300  dark:border-gray-800 bg-white dark:bg-gray-800">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setView("preview")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "preview"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("code")}
                className={`px-4 py-1 rounded-md font-medium ${
                  view === "code"
                    ? "bg-purple-600 text-white"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                }`}
              >
                Code
              </button>
            </div>

            {view === "code" && (
              <div className="flex items-center space-x-2">
                <select
                  onChange={(e) => setCodeType(e.target.value)}
                  value={codeType}
                  className="rounded-md border-gray-300  dark:border-gray-600 dark:bg-gray-800 dark:text-white text-sm"
                >
                  <option value="html">HTML</option>
                  <option value="react">React</option>
                </select>
                <button
                  onClick={handleCopy}
                  className="flex items-center space-x-2 text-sm text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-purple-100"
                >
                  <FaCopy />
                  <span>Copy</span>
                </button>
              </div>
            )}
          </div>



    {/* Hero page view start  */} 

   {view === "preview" ? (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 flex items-center justify-center py-20">

    {/* Floating Particles */}
    <div className="absolute inset-0 z-0 overflow-hidden">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white/10 rounded-full"
          style={{
            width: `${Math.random() * 6 + 2}px`,
            height: `${Math.random() * 6 + 2}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
          }}
        />
      ))}
    </div> 

   {/* Stars Background */}
   <div className="absolute inset-0 z-0">
   <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#ffffff0c,_#000000)] animate-pulse opacity-20"></div>
   </div>

{/* Energy Waves */}
<div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>

{/* Glassmorphism Card */}


    <div className="relative z-10 backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 justify-between gap-12 shadow-2xl">
    {/* Left Side Text */}
    <div className="max-w-lg space-y-6 text-center md:text-left">
        <span className="inline-block text-xs tracking-widest uppercase bg-white/10 text-white rounded-full px-3 py-1">
          🚀 Our Services
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-tight tracking-tight">
          Power Up Your  
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500"> Business</span> 
          with Saktrix
        </h1>
        <span className="text-sm tracking-wider text-purple-400 uppercase font-semibold">
         AI + Web Tech | Strategy | Research
        </span>
        <p className="text-gray-300 leading-relaxed max-w-xl">
          We craft next-generation digital solutions using AI, web technologies, and research-driven strategies — unlocking new levels of success for you!
        </p>
        <div className="flex gap-4 justify-center md:justify-start">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300">
            Get Started
       </button>
       <button className="px-6 py-3 border border-white/20 rounded-lg text-white font-semibold hover:bg-white/10 transition duration-300">
         Learn More
       </button>
     </div>
   </div>
 
   {/* Right Side Image */}
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        <motion.img
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    whileHover={{ scale: 1.02 }}
    src={Ai}
    alt="Futuristic AI"
    className="w-full h-full object-contain rounded-2xl 
    border-3 border-white/10 
    shadow-[0_0_40px_5px_rgba(147,51,234,0.4)] 
    bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"/>
    </div>
 
    </div>
  </section>

   ) : (
    <section className=" w-full overflow-x-scroll bg-gray-100 dark:bg-gray-900">
      <pre className="text-left text-sm  text-gray-800 dark:text-gray-200 w-full h-[90%] p-4 rounded">
         {codeType === "html" ? htmlCode : reactCode}
      </pre>
    </section>
   )}


</div>
</section>



    </>
  );
};
