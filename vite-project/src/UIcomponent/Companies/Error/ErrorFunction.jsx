import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';
import { FaSmileWink } from 'react-icons/fa';
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from 'react';
import { FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { FaCopy } from "react-icons/fa";



function ErrorComponents ({htmlCode,reactCode,SectionShow}){
    const navigate = useNavigate();


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

{/* Covert to (Pure HTML + Tailwind + Font Awesome or other free icons cdn as your wish)*/}


export function ErrorDemoOne(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaArrowLeft } from 'react-icons/fa';

export const NotFoundFuturistic = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl space-y-8"
      >
        {/* Icon & Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white w-24 h-24 rounded-full text-4xl shadow-lg"
        >
          <FaRobot />
        </motion.div>

        {/* Glitchy 404 */}
        <h1 className="text-7xl font-extrabold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            404
          </span>
          <span className="absolute top-0 left-0 blur-sm opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
            404
          </span>
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg">
          Looks like our bot wandered into the void. The page you're looking for doesn't exist.
        </p>

        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
        >
          <FaArrowLeft /> Return to Home
        </a>
      </motion.div>
    </section>
  );
};

`
}

SectionShow={
 <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-xl space-y-8"
      >
        {/* Icon & Number */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="inline-flex items-center justify-center bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white w-24 h-24 rounded-full text-4xl shadow-lg"
        >
          <FaRobot />
        </motion.div>

        {/* Glitchy 404 */}
        <h1 className="text-7xl font-extrabold text-white relative">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            404
          </span>
          <span className="absolute top-0 left-0 blur-sm opacity-40 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-pulse">
            404
          </span>
        </h1>

        {/* Message */}
        <p className="text-gray-300 text-lg">
          Looks like our bot wandered into the void. The page you're looking for doesn't exist.
        </p>

        {/* Back Button */}
        <a
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
        >
          <FaArrowLeft /> Return to Home
        </a>
      </motion.div>
  </section>
}
/>
</>
)
}

export function ErrorDemoTwo(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaSmileWink } from 'react-icons/fa';

export const NotFoundFriendly = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-pink-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl space-y-8"
      >
        {/* Emoji + 404 */}
        <div className="flex flex-col items-center gap-3">
          <FaSmileWink className="text-6xl text-pink-500 animate-bounce" />
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            404
          </h1>
        </div>

        {/* Message */}
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Oops! This page went out for a coffee break ☕. Don’t worry, we’ll help you get back on track.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Go Back Home
        </a>
      </motion.div>
    </section>
  );
};

`
}

SectionShow={
 <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-pink-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl space-y-8"
      >
        {/* Emoji + 404 */}
        <div className="flex flex-col items-center gap-3">
          <FaSmileWink className="text-6xl text-pink-500 animate-bounce" />
          <h1 className="text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
            404
          </h1>
        </div>

        {/* Message */}
        <p className="text-lg text-gray-600 dark:text-gray-300">
          Oops! This page went out for a coffee break ☕. Don’t worry, we’ll help you get back on track.
        </p>

        {/* Button */}
        <a
          href="/"
          className="inline-block px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
        >
          Go Back Home
        </a>
      </motion.div>
</section>
}

/>
</>
)
}

export function ErrorDemoThree(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export const Error404Brutalist = () => {
  return (
    <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Glitch Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[20rem] font-extrabold text-black/5 dark:text-white/5 uppercase tracking-widest leading-none z-0 glitch-text opacity-20">
        404
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black dark:text-white glitch"
        >
          Page Lost
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          The page you're looking for has gone rogue or never existed.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold border-2 border-black dark:border-white transition hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg"
        >
          <FaArrowLeft />
          Go Back Home
        </motion.a>
      </motion.div>

      {/* Glitch Animation CSS */}
      <style>
        {\`
          .glitch-text {
            animation: glitch 2s infinite;
          }

          .glitch {
            position: relative;
            color: white;
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            width: 100%;
            overflow: hidden;
          }

          .glitch::before {
            left: -2px;
            text-shadow: -2px 0 red;
            animation: glitchTop 2s infinite;
          }

          .glitch::after {
            left: 2px;
            text-shadow: -2px 0 blue;
            animation: glitchBottom 2s infinite;
          }

          @keyframes glitchTop {
            0% {
              clip-path: inset(0 0 80% 0);
            }
            20% {
              clip-path: inset(10% 0 60% 0);
            }
            40% {
              clip-path: inset(30% 0 40% 0);
            }
            60% {
              clip-path: inset(50% 0 20% 0);
            }
            80% {
              clip-path: inset(70% 0 10% 0);
            }
            100% {
              clip-path: inset(0 0 80% 0);
            }
          }

          @keyframes glitchBottom {
            0% {
              clip-path: inset(70% 0 0 0);
            }
            20% {
              clip-path: inset(60% 0 10% 0);
            }
            40% {
              clip-path: inset(40% 0 30% 0);
            }
            60% {
              clip-path: inset(20% 0 50% 0);
            }
            80% {
              clip-path: inset(10% 0 70% 0);
            }
            100% {
              clip-path: inset(70% 0 0 0);
            }
          }
        \`}
      </style>
    </section>
  );
};

`}

SectionShow={
  <section className="relative w-full h-screen flex items-center justify-center bg-white dark:bg-black overflow-hidden">
      {/* Glitch Background Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[20rem] font-extrabold text-black/5 dark:text-white/5 uppercase tracking-widest leading-none z-0 glitch-text opacity-20">
        404
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center px-6"
      >
        <motion.h1
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black uppercase tracking-tight text-black dark:text-white glitch"
        >
          Page Lost
        </motion.h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700 dark:text-gray-300 max-w-xl mx-auto">
          The page you're looking for has gone rogue or never existed.
        </p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-black text-white dark:bg-white dark:text-black font-semibold border-2 border-black dark:border-white transition hover:bg-opacity-90 dark:hover:bg-opacity-90 rounded-lg"
        >
          <FaArrowLeft />
          Go Back Home
        </motion.a>
      </motion.div>

      {/* Glitch Animation CSS */}
      <style>
        {`
          .glitch-text {
            animation: glitch 2s infinite;
          }

          .glitch {
            position: relative;
            color: white;
          }

          .glitch::before,
          .glitch::after {
            content: attr(data-text);
            position: absolute;
            top: 0;
            width: 100%;
            overflow: hidden;
          }

          .glitch::before {
            left: -2px;
            text-shadow: -2px 0 red;
            animation: glitchTop 2s infinite;
          }

          .glitch::after {
            left: 2px;
            text-shadow: -2px 0 blue;
            animation: glitchBottom 2s infinite;
          }

          @keyframes glitchTop {
            0% {
              clip-path: inset(0 0 80% 0);
            }
            20% {
              clip-path: inset(10% 0 60% 0);
            }
            40% {
              clip-path: inset(30% 0 40% 0);
            }
            60% {
              clip-path: inset(50% 0 20% 0);
            }
            80% {
              clip-path: inset(70% 0 10% 0);
            }
            100% {
              clip-path: inset(0 0 80% 0);
            }
          }

          @keyframes glitchBottom {
            0% {
              clip-path: inset(70% 0 0 0);
            }
            20% {
              clip-path: inset(60% 0 10% 0);
            }
            40% {
              clip-path: inset(40% 0 30% 0);
            }
            60% {
              clip-path: inset(20% 0 50% 0);
            }
            80% {
              clip-path: inset(10% 0 70% 0);
            }
            100% {
              clip-path: inset(70% 0 0 0);
            }
          }
        `}
      </style>
  </section>
}

/>
</>
)
}

export function ErrorDemoFour(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`// components/NotFoundCreative3D.tsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";


export default function NotFoundCreative3D() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-gray-900 dark:to-gray-950 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center"
      >
        <img
          src="/illustrations/404-3d.png" // 🖼️ Replace this with your own illustration path
          alt="3D Illustration"
          className="mx-auto mb-8 w-full max-w-md"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          We can’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
        >
          <FaArrowCircleLeft className="text-xl" />
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}



{/*

🖼️ Illustration Tip
Use a free 3D-style illustration from:
If you don't know how to use those website Dm me I'll upload seprate video for it.

https://storyset.com

https://www.glazestock.com/3d

https://www.iconshock.com/3d-illustrations/ 
    
*/}
`
}

SectionShow={
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-blue-50 dark:from-gray-900 dark:to-gray-950 px-6 py-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl w-full text-center"
      >
        <img
          src="/illustrations/404-3d.png" // 🖼️ Replace this with your own illustration path
          alt="3D Illustration"
          className="mx-auto mb-8 w-full max-w-md"
        />
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white mb-4">
          Oops! Page not found.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-xl mx-auto">
          We can’t find the page you’re looking for. It might have been moved or deleted.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
        >
          <FaArrowCircleLeft className="text-xl" />
          Back to Home
        </Link>
      </motion.div>
    </div>
}

/>
</>
)
}

export function ErrorDemoFive(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; 
import { FaArrowLeft } from "react-icons/fa";

export default function NotFoundMinimal() {
  return (
    <div className="flex items-center justify-center min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Page not found
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
  );
}

`}

SectionShow={
   <div className="flex items-center justify-center min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-7xl font-extrabold text-gray-900 dark:text-white mb-4">
          404
        </h1>
        <p className="text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Page not found
        </p>
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white bg-gray-900 dark:bg-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-200 transition"
        >
          <FaArrowLeft className="text-lg" />
          Go Back Home
        </Link>
      </motion.div>
    </div>
}

/>
</>
)
}

export function ErrorDemoSix(){
  return(
<>
<ErrorComponents
htmlCode={
String.raw
`
`
}

reactCode={
String.raw
`import { motion } from "framer-motion";
import { FaRegSadTear } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-black px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 drop-shadow-lg">
            404
          </h1>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FaRegSadTear className="text-5xl text-gray-500 dark:text-gray-400 mb-2 animate-bounce" />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Oops! Page not found
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
            The page you are looking for might have been removed or doesn't exist anymore.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition dark:hover:bg-indigo-500"
          >
            Go Home
          </motion.button>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 rounded-full bg-indigo-400 opacity-50 blur-sm animate-ping"
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-purple-400 opacity-30 blur-md animate-pulse"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
    </div>
  );
};

export default NotFound;

`
}

SectionShow={
   <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-white dark:from-gray-900 dark:to-black px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-9xl font-extrabold text-indigo-600 dark:text-indigo-400 drop-shadow-lg">
            404
          </h1>
        </motion.div>

        <motion.div
          className="mt-6 flex flex-col items-center"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <FaRegSadTear className="text-5xl text-gray-500 dark:text-gray-400 mb-2 animate-bounce" />
          <h2 className="text-3xl font-semibold text-gray-800 dark:text-white">
            Oops! Page not found
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300 max-w-md">
            The page you are looking for might have been removed or doesn't exist anymore.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="mt-6 inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-full shadow-lg hover:bg-indigo-700 transition dark:hover:bg-indigo-500"
          >
            Go Home
          </motion.button>
        </motion.div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-10 left-10 w-4 h-4 rounded-full bg-indigo-400 opacity-50 blur-sm animate-ping"
          animate={{ x: [0, 10, -10, 0], y: [0, -10, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 right-10 w-6 h-6 rounded-full bg-purple-400 opacity-30 blur-md animate-pulse"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </motion.div>
  </div>
}

/>
</>
)
}