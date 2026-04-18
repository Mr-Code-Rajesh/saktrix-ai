import React, { useState } from "react";
import { FaCopy, FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import UiGlow from "../../../assets/bg/ai.gif";
import Aivideo from '../../../assets/Video/Aivideo.mp4'


function HeroComponents ({htmlCode,reactCode,SectionShow}){
    const [view, setView] = useState("preview"); // 'preview' | 'code'
    const [codeType, setCodeType] = useState("html"); // 'html' | 'react'

    const handleCopy = () => {
    const code = codeType === "html" ? htmlCode : reactCode;
    navigator.clipboard.writeText(code);
    alert("Code copied to clipboard!");
    };

  return(
    <>
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
    (SectionShow)

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
  )
}


export function HeroDemoOne(){
  return(
    <>
      <HeroComponents 

htmlCode={

`<!DOCTYPE html>
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
</html> `} 

reactCode={ 
    
`import React from 'react';
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
};`}

SectionShow={
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
</section>} />


  </>
   )
}


export function HeroDemoTwo(){
  return(
  <>
   <HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saktrix Hero Split</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(50px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-slide-left {
      animation: slideInLeft 0.7s ease-out forwards;
    }

    .animate-slide-right {
      animation: slideInRight 0.7s ease-out forwards;
      animation-delay: 0.2s;
    }
  </style>
</head>
<body class="bg-white dark:bg-zinc-950 text-gray-900 dark:text-white">

  <section class="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 transition-colors">
    <div class="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">

      <!-- Left Side -->
      <div class="max-w-xl text-center md:text-left opacity-0 animate-slide-left">
        <h1 class="text-3xl sm:text-5xl font-bold leading-tight mb-4">
          Build Next-Level
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
            Interfaces
          </span>
          with Saktrix
        </h1>

        <p class="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
          Discover ultra-modern UI components, animations, and effects — all production-ready and easy to integrate.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
          <button class="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition">
            Explore Library
          </button>
          <button class="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition">
            Documentation
          </button>
        </div>
      </div>

      <!-- Right Side -->
      <div class="w-full md:w-[500px] flex justify-center opacity-0 animate-slide-right">
        <img
          src="/images/hero-split.png"
          alt="UI Illustration"
          class="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl"
        />
      </div>
    </div>
  </section>

</body>
</html>

`
}

reactCode={
`import { motion } from "framer-motion";
import HeroImg from "/images/hero-split.png"; // Replace with your image path

export default function HeroSplit() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        
        {/* Left Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-xl text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
            Build Next-Level{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
              Interfaces
            </span>{" "}
            with Saktrix
          </h1>

          <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
            Discover ultra-modern UI components, animations, and effects — all production-ready and easy to integrate.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition">
              Explore Library
            </button>
            <button className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition">
              Documentation
            </button>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-full md:w-[500px] flex justify-center"
        >
          <img
            src={HeroImg}
            alt="UI Illustration"
            className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
`}
   
SectionShow={
   <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-20 bg-white dark:bg-zinc-950 transition-colors">
          <div className="max-w-7xl w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12">
            
            {/* Left Side */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="max-w-xl text-center md:text-left"
            >
              <h1 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight mb-4">
                Build Next-Level{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Interfaces
                </span>{" "}
                with Saktrix
              </h1>
    
              <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-6">
                Discover ultra-modern UI components, animations, and effects — all production-ready and easy to integrate.
              </p>
    
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-6 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:opacity-90 transition">
                  Explore Library
                </button>
                <button className="px-6 py-3 rounded-lg font-semibold border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-zinc-900 transition">
                  Documentation
                </button>
              </div>
            </motion.div>
    
            {/* Right Side */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="w-full md:w-[500px] flex justify-center"
            >
              <img
                src={Ai}
                alt="UI Illustration"
                className="w-full max-w-xs md:max-w-sm rounded-xl shadow-2xl"
              />
            </motion.div>
          </div>
  </section>
} />
  
 </>
)
}

export function HeroDemoThree(){
    
  return(

  <>
  <HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saktrix Hero Section</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    /* Custom Animations */
    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    @keyframes scaleIn {
      0% {
        opacity: 0;
        transform: scale(0.9);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-fade-up {
      animation: fadeUp 0.6s ease-out forwards;
    }

    .animate-fade-in {
      animation: fadeIn 1s ease-out forwards;
    }

    .animate-scale-in {
      animation: scaleIn 1.2s ease-out forwards;
    }

    .delay-0 { animation-delay: 0s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
    .delay-600 { animation-delay: 0.6s; }
  </style>
</head>
<body class="bg-white dark:bg-zinc-900 text-gray-900 dark:text-white transition-colors">

  <section class="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-24">
    <div class="max-w-4xl w-full flex flex-col items-center text-center gap-10">

      <!-- Heading -->
      <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight opacity-0 translate-y-5 animate-fade-up delay-0">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse">
          Design the Impossible
        </span>
        with Saktrix
      </h1>

      <!-- Subheading -->
      <p class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl opacity-0 translate-y-5 animate-fade-up delay-200">
        Build interfaces that feel alive. Saktrix UI gives you creative freedom with stunning motion, styling, and developer-ready code.
      </p>

      <!-- Buttons -->
      <div class="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in delay-400">
        <button class="px-6 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
          Start Creating
        </button>
        <button class="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
          Browse Components
        </button>
      </div>

      <!-- Image -->
      <div class="mt-10 w-full max-w-xl opacity-0 scale-90 animate-scale-in delay-600">
        <img
          src="/images/hero-glow-ui.png"
          alt="Creative UI Glow"
          class="w-full rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] dark:shadow-[0_0_60px_rgba(236,72,153,0.3)]"
        />
      </div>

    </div>
  </section>

</body>
</html>

`
}

reactCode={
`import { motion } from "framer-motion";
import UiGlow from "/images/hero-glow-ui.png"; // Replace with your image

export default function HeroGlowCenter() {
  return (
    <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 bg-white dark:bg-zinc-900 transition-colors">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse">
            Design the Impossible
          </span>{" "}
          with Saktrix
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl"
        >
          Build interfaces that feel alive. Saktrix UI gives you creative freedom with stunning motion, styling, and developer-ready code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Start Creating
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Browse Components
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-10 w-full max-w-xl"
        >
          <img
            src={UiGlow}
            alt="Creative UI Glow"
            className="w-full rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] dark:shadow-[0_0_60px_rgba(236,72,153,0.3)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
`
}

SectionShow={
 <section className="w-full min-h-screen flex items-center justify-center px-6 sm:px-10 py-24 bg-white dark:bg-zinc-900 transition-colors">
      <div className="max-w-4xl w-full flex flex-col items-center text-center gap-10">
        
        {/* Animated Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-6xl font-extrabold text-gray-900 dark:text-white leading-tight"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500 animate-pulse">
            Design the Impossible
          </span>{" "}
          with Saktrix
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl"
        >
          Build interfaces that feel alive. Saktrix UI gives you creative freedom with stunning motion, styling, and developer-ready code.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Start Creating
          </button>
          <button className="px-6 py-3 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Browse Components
          </button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mt-10 w-full max-w-xl"
        >
          <img
            src={UiGlow}
            alt="Creative UI Glow"
            className="w-full rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.4)] dark:shadow-[0_0_60px_rgba(236,72,153,0.3)]"
          />
        </motion.div>
      </div>
    </section>
} />

</>

  )
}

export function HeroDemoFour(){
  return(
    <>
    <HeroComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saktrix Hero Video BG</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeUp {
      0% {
        opacity: 0;
        transform: translateY(30px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeUpSmall {
      0% {
        opacity: 0;
        transform: translateY(20px);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    }

    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }

    .animate-fade-up { animation: fadeUp 0.7s ease-out forwards; }
    .animate-fade-up-sm { animation: fadeUpSmall 0.9s ease-out forwards; }
    .animate-fade-in { animation: fadeIn 1.1s ease-out forwards; }

    .delay-0 { animation-delay: 0s; }
    .delay-200 { animation-delay: 0.2s; }
    .delay-400 { animation-delay: 0.4s; }
  </style>
</head>
<body class="bg-black text-white">

  <section class="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

    <!-- Video Background -->
    <video
      autoplay
      loop
      muted
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="/videos/hero-tech-bg.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm z-0"></div>

    <!-- Content -->
    <div class="relative z-10 max-w-5xl px-6 sm:px-10 py-24 text-center">

      <h1 class="text-4xl sm:text-6xl font-extrabold leading-tight opacity-0 animate-fade-up delay-0">
        Empower Your
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
          Digital Vision
        </span>
      </h1>

      <p class="text-lg sm:text-xl mt-6 text-gray-200 max-w-3xl mx-auto opacity-0 animate-fade-up-sm delay-200">
        Launch unforgettable web experiences using Saktrix UI. Powered by performance, built with passion.
      </p>

      <div class="mt-8 flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-in delay-400">
        <button class="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
          Launch Demo
        </button>
        <button class="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition">
          View Library
        </button>
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import { motion } from "framer-motion";
import Aivideo from '../../../assets/Video/Aivideo.mp4'

{/*
   Assets Needed:
Add your video inside public/videos/hero-tech-bg.mp4
  
*/}

export default function HeroVideoBg() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Aivideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-10 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Empower Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg sm:text-xl mt-6 text-gray-200 max-w-3xl mx-auto"
        >
          Launch unforgettable web experiences using Saktrix UI. Powered by performance, built with passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Launch Demo
          </button>
          <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition">
            View Library
          </button>
        </motion.div>
      </div>
    </section>
  );
}`
}

SectionShow={
 <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={Aivideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 dark:bg-black/70 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 sm:px-10 py-24 text-center text-white">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl sm:text-6xl font-extrabold leading-tight"
        >
          Empower Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-500">
            Digital Vision
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-lg sm:text-xl mt-6 text-gray-200 max-w-3xl mx-auto"
        >
          Launch unforgettable web experiences using Saktrix UI. Powered by performance, built with passion.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
            Launch Demo
          </button>
          <button className="px-6 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition">
            View Library
          </button>
        </motion.div>
      </div>
    </section>

} />
</>
  )
}

export function HeroDemoFive(){
 return(
    <>
<HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Saktrix Hero Split Glow</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeInLeft {
      from {
        opacity: 0;
        transform: translateX(-40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes fadeInRight {
      from {
        opacity: 0;
        transform: translateX(40px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    .animate-fade-left {
      animation: fadeInLeft 0.7s ease-out forwards;
    }

    .animate-fade-right {
      animation: fadeInRight 0.8s ease-out forwards;
    }
  </style>
</head>
<body class="bg-white dark:bg-zinc-900 text-zinc-900 dark:text-white">

  <section class="relative w-full min-h-screen flex items-center px-6 sm:px-12 py-20 transition-colors">

    <!-- Glowing Background Circle -->
    <div class="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-indigo-600 blur-3xl opacity-30 rounded-full z-0 pointer-events-none"></div>

    <!-- Content Grid -->
    <div class="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">

      <!-- Left Section -->
      <div class="space-y-6 opacity-0 animate-fade-left">
        <h1 class="text-4xl sm:text-5xl font-bold leading-tight">
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
            Next-Level Interfaces
          </span>
          for Every Creator
        </h1>

        <p class="text-zinc-600 dark:text-zinc-300 text-lg">
          Saktrix helps you build stunning user experiences — faster, smarter, and cleaner — with prebuilt motion-powered components.
        </p>

        <div class="flex flex-col sm:flex-row gap-4">
          <button class="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
            Explore Components
          </button>
          <button class="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
            Watch Demo
          </button>
        </div>
      </div>

      <!-- Right Section -->
      <div class="w-full opacity-0 animate-fade-right">
        <img
          src="/images/hero-ui-glow-side.png"
          alt="UI Panel Glowing"
          class="w-full max-w-lg mx-auto rounded-xl shadow-xl border border-white/10 dark:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
        />
      </div>

    </div>
  </section>

</body>
</html>
`
}

reactCode={
`import { motion } from "framer-motion";
import GlowPanel from "/images/hero-ui-glow-side.png"; // Replace with unique image

export const HeroSplitGlow = ()=> {
  return (
    <section className="relative w-full min-h-screen flex items-center px-6 sm:px-12 py-20 bg-white dark:bg-zinc-900 transition-colors">
      {/* Glowing Background Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-indigo-600 blur-3xl opacity-30 rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
              Next-Level Interfaces
            </span>{" "}
            for Every Creator
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 text-lg">
            Saktrix helps you build stunning user experiences — faster, smarter, and cleaner — with prebuilt motion-powered components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
              Explore Components
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={GlowPanel}
            alt="UI Panel Glowing"
            className="w-full max-w-lg mx-auto rounded-xl shadow-xl border border-white/10 dark:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
`
}

SectionShow={
 <section className="relative w-full min-h-screen flex items-center px-6 sm:px-12 py-20 bg-white dark:bg-zinc-900 transition-colors">
      {/* Glowing Background Shape */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-500 via-purple-600 to-indigo-600 blur-3xl opacity-30 rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-purple-500 to-indigo-500">
              Next-Level Interfaces
            </span>{" "}
            for Every Creator
          </h1>

          <p className="text-zinc-600 dark:text-zinc-300 text-lg">
            Saktrix helps you build stunning user experiences — faster, smarter, and cleaner — with prebuilt motion-powered components.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-700 text-white font-semibold rounded-lg shadow hover:opacity-90 transition">
              Explore Components
            </button>
            <button className="px-6 py-3 border border-gray-300 dark:border-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
              Watch Demo
            </button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <img
            src={Ai}
            alt="UI Panel Glowing"
            className="w-full max-w-lg mx-auto rounded-xl shadow-xl border border-white/10 dark:shadow-[0_0_40px_rgba(147,51,234,0.4)]"
          />
        </motion.div>
      </div>
    </section>
}/>
    </>
 )
}

export function HeroDemoSix(){
 return(
 <>
<HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hero Gradient Card</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    .animate-fade-scale {
      animation: fadeScale 0.8s ease-out forwards;
    }
  </style>
</head>
<body class="bg-white dark:bg-black">

  <section class="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
    
    <!-- Floating Glows -->
    <div class="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-30 dark:opacity-40 z-0"></div>
    <div class="absolute -bottom-[120px] -right-[120px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[160px] opacity-25 dark:opacity-35 z-0"></div>

    <!-- Gradient Border Card -->
    <div class="relative z-10 w-full max-w-4xl animate-fade-scale">
      <div class="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-3xl shadow-xl">
        <div class="bg-white dark:bg-zinc-900 rounded-[22px] p-10 sm:p-14 text-center">
          <h1 class="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
            Build
            <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
              Interfaces That Inspire
            </span>
          </h1>
          <p class="mt-6 text-gray-600 dark:text-zinc-300 text-lg">
            Unlock your brand’s potential with Saktrix UI — powerful, motion-ready components crafted for modern developers and visionary creators.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button class="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
              Start Building
            </button>
            <button class="px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
              Discover More
            </button>
          </div>
        </div>
      </div>
    </div>

  </section>

</body>
</html> `
}

reactCode={
`import { motion } from "framer-motion";

export const HeroGradientCard = ()=> {
  return (
    <section className="relative w-full min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-30 dark:opacity-40 z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[160px] opacity-25 dark:opacity-35 z-0" />

      {/* Gradient Border Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-3xl p-1 shadow-xl"
      >
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-3xl">
          <div className="bg-white dark:bg-zinc-900 rounded-[22px] p-10 sm:p-14 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
                Interfaces That Inspire
              </span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-zinc-300 text-lg">
              Unlock your brand’s potential with Saktrix UI — powerful, motion-ready components crafted for modern developers and visionary creators.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
                Start Building
              </button>
              <button className="px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}`
}

SectionShow={
 <section className="relative w-full min-h-screen bg-white dark:bg-black flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Floating Glows */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-purple-500 rounded-full blur-[180px] opacity-30 dark:opacity-40 z-0" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-500 rounded-full blur-[160px] opacity-25 dark:opacity-35 z-0" />

      {/* Gradient Border Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-4xl bg-white dark:bg-zinc-900 rounded-3xl p-1 shadow-xl"
      >
        <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-[2px] rounded-3xl">
          <div className="bg-white dark:bg-zinc-900 rounded-[22px] p-10 sm:p-14 text-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-zinc-900 dark:text-white leading-tight">
              Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-500">
                Interfaces That Inspire
              </span>
            </h1>
            <p className="mt-6 text-gray-600 dark:text-zinc-300 text-lg">
              Unlock your brand’s potential with Saktrix UI — powerful, motion-ready components crafted for modern developers and visionary creators.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
                Start Building
              </button>
              <button className="px-6 py-3 border border-zinc-300 dark:border-zinc-600 text-zinc-900 dark:text-white rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
}/>
</>
)}

export function HeroDemoSeven(){
   const [showVideo, setShowVideo] = useState(false);
 return(
<>
<HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hero Glass Video</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fade-up {
      animation: fadeUp 0.8s ease-out forwards;
    }
  </style>
</head>
<body class="bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black transition-colors">

  <section class="relative w-full min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

    <!-- Floating Glow Orbs -->
    <div class="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500 blur-[160px] opacity-20 rounded-full z-0"></div>
    <div class="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 blur-[200px] opacity-25 rounded-full z-0"></div>

    <!-- Glassmorphic Hero Card -->
    <div class="relative z-10 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-10 max-w-4xl text-center animate-fade-up">
      <h1 class="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
        Beautiful UI. Blazing Speed.
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
          Saktrix Powered
        </span>
      </h1>
      <p class="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
        Supercharge your project with responsive, aesthetic, and motion-enhanced components — all customizable in seconds.
      </p>
      <div class="mt-8 flex flex-col sm:flex-row justify-center gap-4">
        <button class="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
          Get Started
        </button>
        <button onclick="showVideoModal()" class="px-6 py-3 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition">
          Watch Demo ▶
        </button>
      </div>
    </div>

   <!-- Video Modal -->
<div id="videoModal" class="fixed inset-0 bg-black/80 z-50 hidden">
  <div class="flex items-center justify-center w-full h-full">
    <div class="relative w-full max-w-3xl aspect-video">
      <iframe
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        title="Demo Video"
        class="w-full h-full rounded-xl"
        allowfullscreen
      ></iframe>
      <button onclick="closeVideoModal()" class="absolute top-4 right-4 text-white text-2xl hover:text-red-400">
        ✕
      </button>
    </div>
  </div>
</div>

    <script>
      function showVideoModal() {
        document.getElementById('videoModal').classList.remove('hidden');
      }
      function closeVideoModal() {
        document.getElementById('videoModal').classList.add('hidden');
      }
    </script>
  </section>

</body>
</html>`
}

reactCode={
`import { motion } from "framer-motion";
import { useState } from "react";

export default function HeroGlassVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black overflow-hidden transition-colors">
      {/* Floating Glow Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500 blur-[160px] opacity-20 rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 blur-[200px] opacity-25 rounded-full z-0" />

      {/* Glassmorphic Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
          Beautiful UI. Blazing Speed.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Saktrix Powered
          </span>
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          Supercharge your project with responsive, aesthetic, and motion-enhanced components — all customizable in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="px-6 py-3 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Watch Demo ▶
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

`
}

SectionShow={
 <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-zinc-100 to-white dark:from-zinc-900 dark:to-black overflow-hidden transition-colors">
      {/* Floating Glow Orbs */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-blue-500 blur-[160px] opacity-20 rounded-full z-0" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500 blur-[200px] opacity-25 rounded-full z-0" />

      {/* Glassmorphic Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 backdrop-blur-2xl bg-white/10 dark:bg-white/5 border border-white/20 dark:border-white/10 rounded-3xl shadow-2xl p-10 max-w-4xl text-center"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white tracking-tight leading-tight">
          Beautiful UI. Blazing Speed.{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Saktrix Powered
          </span>
        </h1>
        <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-300">
          Supercharge your project with responsive, aesthetic, and motion-enhanced components — all customizable in seconds.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Get Started
          </button>
          <button
            onClick={() => setShowVideo(true)}
            className="px-6 py-3 border border-zinc-400 dark:border-zinc-700 text-zinc-900 dark:text-white rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition"
          >
            Watch Demo ▶
          </button>
        </div>
      </motion.div>

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <div className="relative w-full max-w-3xl aspect-video">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Demo Video"
              className="w-full h-full rounded-xl"
              allowFullScreen
            />
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-2xl hover:text-red-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
}

/>

</> 
 )
}

export function HeroDemoEight(){
 return(
<>
<HeroComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Hero Medical</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    @keyframes fadeUp {
      from {
        opacity: 0;
        transform: translateY(40px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    @keyframes fadeScale {
      from {
        opacity: 0;
        transform: scale(0.95);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
    .animate-fade-up {
      animation: fadeUp 0.8s ease-out forwards;
    }
    .animate-fade-scale {
      animation: fadeScale 1s ease-out forwards;
    }
  </style>
</head>
<body class="bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black transition-colors">

  <section class="relative w-full min-h-screen flex items-center justify-center px-6 py-20">

    <!-- Background Light Blur -->
    <div class="absolute -top-20 -right-24 w-[400px] h-[400px] bg-cyan-300 dark:bg-cyan-500 opacity-20 blur-[180px] rounded-full z-0"></div>

    <div class="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
      
      <!-- Left Text Side -->
      <div class="text-center md:text-left max-w-xl space-y-6 animate-fade-up">
        <span class="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full dark:bg-cyan-900 dark:text-cyan-200">
          🩺 Trusted Healthcare Partner
        </span>
        
        <h1 class="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white leading-tight">
          Compassionate Care, <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
            Backed by Technology
          </span>
        </h1>
        
        <p class="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
          We provide advanced diagnostics, world-class treatment, and personalized care — all from the comfort of your home or hospital.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center gap-4 mt-6">
          <button class="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
            Book Appointment
          </button>
          <button class="px-6 py-3 border border-blue-200 dark:border-zinc-700 text-blue-900 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
            Learn More
          </button>
        </div>
      </div>

      <!-- Right Image Side -->
      <div class="w-80 h-80 sm:w-[400px] sm:h-[400px] animate-fade-scale">
        <img
          src="/your-assets/doctor-illustration.png"
          alt="Doctor Illustration"
          class="w-full h-full object-contain rounded-xl shadow-2xl"
        />
      </div>

    </div>
  </section>

</body>
</html>`
}

reactCode={
`import { motion } from "framer-motion";
import DoctorImg from "/your-assets/doctor-illustration.png"; // Replace with your image path

export  const HeroMedical = ()=> {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black transition-colors">
      
      {/* Background Light Blur */}
      <div className="absolute top-[-80px] right-[-100px] w-[400px] h-[400px] bg-cyan-300 dark:bg-cyan-500 opacity-20 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl space-y-6"
        >
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full dark:bg-cyan-900 dark:text-cyan-200">
            🩺 Trusted Healthcare Partner
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white leading-tight">
            Compassionate Care, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
              Backed by Technology
            </span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            We provide advanced diagnostics, world-class treatment, and personalized care — all from the comfort of your home or hospital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Book Appointment
            </button>
            <button className="px-6 py-3 border border-blue-200 dark:border-zinc-700 text-blue-900 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-80 h-80 sm:w-[400px] sm:h-[400px]"
        >
          <img
            src={DoctorImg}
            alt="Doctor Illustration"
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}`
}

SectionShow={
 <section className="relative w-full min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-blue-50 to-white dark:from-zinc-900 dark:to-black transition-colors">
      
      {/* Background Light Blur */}
      <div className="absolute top-[-80px] right-[-100px] w-[400px] h-[400px] bg-cyan-300 dark:bg-cyan-500 opacity-20 blur-[180px] rounded-full z-0" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Left Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left max-w-xl space-y-6"
        >
          <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-800 text-xs font-medium rounded-full dark:bg-cyan-900 dark:text-cyan-200">
            🩺 Trusted Healthcare Partner
          </span>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-blue-900 dark:text-white leading-tight">
            Compassionate Care, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-emerald-500">
              Backed by Technology
            </span>
          </h1>
          
          <p className="text-gray-700 dark:text-gray-300 text-base leading-relaxed">
            We provide advanced diagnostics, world-class treatment, and personalized care — all from the comfort of your home or hospital.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Book Appointment
            </button>
            <button className="px-6 py-3 border border-blue-200 dark:border-zinc-700 text-blue-900 dark:text-white rounded-lg hover:bg-blue-50 dark:hover:bg-zinc-800 transition">
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Right Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="w-80 h-80 sm:w-[400px] sm:h-[400px]"
        >
          <img
            src={Ai}
            alt="Doctor Illustration"
            className="w-full h-full object-contain rounded-xl shadow-2xl"
          />
        </motion.div>

      </div>
 </section>
} />

</> 
 )
}