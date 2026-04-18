import React, { useState } from "react";
import { FaCopy, FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import UiGlow from "../../../assets/bg/ai.gif";
import Aivideo from '../../../assets/Video/Aivideo.mp4'
import { FaLock, FaShieldAlt, FaCreditCard } from 'react-icons/fa';
import { FaPaintBrush, FaArrowRight, FaBriefcase } from 'react-icons/fa';
import { FaGraduationCap, FaCertificate} from 'react-icons/fa';
import { FaEnvelope, FaDownload} from 'react-icons/fa';
import { FaRobot, FaMagic, FaBolt } from 'react-icons/fa';
import { FaUserMd, FaHeartbeat, FaStethoscope } from 'react-icons/fa';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';
import { FaRocket} from 'react-icons/fa';





function CTAComponents ({htmlCode,reactCode,SectionShow}){
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

export function CTAdemoOne(){
 return(
  <>
<CTAComponents

htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Fintech CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="dark:bg-black dark:text-white">

  <section class="bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
    <div class="max-w-5xl mx-auto text-center space-y-10">
      
      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
        Secure Your
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
          Financial Journey
        </span>
      </h2>

      <!-- Subtext -->
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Built for Fintech innovators, with banking-grade security and performance-optimized UI blocks. Instill confidence in every transaction.
      </p>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <button
          class="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
        >
          <i class="fas fa-credit-card"></i> Get Started with Saktrix
        </button>
      </div>

      <!-- Security Assurance -->
      <div class="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600 dark:text-gray-400">
        <div class="flex items-center gap-2">
          <i class="fas fa-lock text-blue-500"></i>
          End-to-End Encryption
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-shield-alt text-green-600"></i>
          PCI-DSS Compliant
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-credit-card text-purple-500"></i>
          99.99% Uptime Guarantee
        </div>
      </div>
    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaLock, FaShieldAlt, FaCreditCard } from 'react-icons/fa';

export const CTAFintech = () => {
  return (
    <section className="bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Secure Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
            Financial Journey
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built for Fintech innovators, with banking-grade security and performance-optimized UI blocks. Instill confidence in every transaction.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <FaCreditCard /> Get Started with Saktrix
          </motion.button>
        </div>

        {/* Security Assurance Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaLock className="text-blue-500" />
            End-to-End Encryption
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-600" />
            PCI-DSS Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-purple-500" />
            99.99% Uptime Guarantee
          </div>
        </div>
      </motion.div>
    </section>
  );
};

`
}

SectionShow={
 <section className="w-full min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center space-y-10"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Secure Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
            Financial Journey
          </span>
        </h2>

        {/* Subtext */}
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Built for Fintech innovators, with banking-grade security and performance-optimized UI blocks. Instill confidence in every transaction.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white rounded-full font-semibold shadow-md hover:shadow-xl transition-all focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <FaCreditCard /> Get Started with Saktrix
          </motion.button>
        </div>

        {/* Security Assurance Icons */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <FaLock className="text-blue-500" />
            End-to-End Encryption
          </div>
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-green-600" />
            PCI-DSS Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaCreditCard className="text-purple-500" />
            99.99% Uptime Guarantee
          </div>
        </div>
      </motion.div>
    </section>
}/>

</>  
 )
}

export function CTAdemoTwo(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Creative Agency CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!-- Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="dark:bg-black dark:text-white">

  <section class="bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
      
      <!-- Left: Text Content -->
      <div class="text-center md:text-left space-y-6 max-w-xl">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Show Your Brand <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Some Love
          </span>
        </h2>

        <p class="text-gray-700 dark:text-gray-300 text-lg">
          We design captivating visuals and unique digital experiences. Explore our portfolio and let’s collaborate to create something unforgettable.
        </p>

        <div class="flex flex-wrap gap-4">
          <a
            href="/portfolio"
            class="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <i class="fas fa-briefcase"></i> View Portfolio
          </a>

          <a
            href="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
          >
            <i class="fas fa-paint-brush"></i> Let’s Collaborate <i class="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1581090700227-1f9a983f5ed8?auto=format&fit=crop&w=1000&q=80"
          alt="Creative visual"
          class="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
        />
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaArrowRight, FaBriefcase } from 'react-icons/fa';

export const CTACreativeAgency = () => {
  return (
    <section className="bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Portfolio Message */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Show Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Some Love</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We design captivating visuals and unique digital experiences. Explore our portfolio and let’s collaborate to create something unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaBriefcase /> View Portfolio
            </a>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaPaintBrush /> Let’s Collaborate <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right: Floating Creative Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1581090700227-1f9a983f5ed8?auto=format&fit=crop&w=1000&q=80"
            alt="Creative visual"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

`
}
SectionShow={
 <section className=" w-full min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Portfolio Message */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Show Your Brand <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">Some Love</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            We design captivating visuals and unique digital experiences. Explore our portfolio and let’s collaborate to create something unforgettable.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaBriefcase /> View Portfolio
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition"
            >
              <FaPaintBrush /> Let’s Collaborate <FaArrowRight />
            </a>
          </div>
        </div>

        {/* Right: Floating Creative Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src={Ai}
            alt="Creative visual"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
}
/>
</>  
 )
}

export function CTAdemoThree(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>EdTech CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN for Icons -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="dark:bg-black dark:text-white">

  <section class="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

      <!-- Left: Text + Buttons -->
      <div class="text-center md:text-left space-y-6 max-w-xl">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
          Learn with Purpose. <br />
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            Certify Your Skills.
          </span>
        </h2>

        <p class="text-gray-700 dark:text-gray-300 text-lg">
          Join 50,000+ learners on Saktrix Academy. Start practical learning today and earn certificates that boost your career.
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/courses"
            class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
          >
            <i class="fas fa-graduation-cap"></i> Start Learning <i class="fas fa-arrow-right"></i>
          </a>
          <a
            href="/certificate"
            class="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            <i class="fas fa-certificate"></i> View Certificates
          </a>
        </div>
      </div>

      <!-- Right: Image -->
      <div class="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1584697964364-1635e90f0b45?auto=format&fit=crop&w=1000&q=80"
          alt="Learning"
          class="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
        />
      </div>
    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCertificate, FaArrowRight } from 'react-icons/fa';

export const CTAEdTech = () => {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Text + CTA */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Learn with Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Certify Your Skills.
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Join 50,000+ learners on Saktrix Academy. Start practical learning today and earn certificates that boost your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/courses"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaGraduationCap /> Start Learning <FaArrowRight />
            </a>
            <a
              href="/certificate"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaCertificate /> View Certificates
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1584697964364-1635e90f0b45?auto=format&fit=crop&w=1000&q=80"
            alt="Learning"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};`
}

SectionShow={
<section className="w-full min-h-screen bg-gradient-to-br from-white via-blue-50 to-purple-100 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left: Text + CTA */}
        <div className="text-center md:text-left space-y-6 max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Learn with Purpose. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Certify Your Skills.
            </span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Join 50,000+ learners on Saktrix Academy. Start practical learning today and earn certificates that boost your career.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg"
            >
              <FaGraduationCap /> Start Learning <FaArrowRight />
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 dark:border-gray-700 rounded-full text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              <FaCertificate /> View Certificates
            </a>
          </div>
        </div>

        {/* Right: Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src={Ai}
            alt="Learning"
            className="w-full h-auto rounded-3xl shadow-2xl border border-white/10"
          />
        </motion.div>
      </motion.div>
</section>
}/>
</>  
 )
}

export function CTAdemoFour(){
 return(
  <>
<CTAComponents
 htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Corporate CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="dark:bg-black dark:text-white">

  <section class="w-full min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
    <div class="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">

      <!-- Left Text -->
      <div class="max-w-xl space-y-6 text-center md:text-left">
        <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Partner With
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Saktrix</span>
        </h2>
        <p class="text-gray-700 dark:text-gray-300 text-lg">
          Let’s collaborate on your next corporate innovation. Contact our team or download our company profile to learn more about our services.
        </p>

        <div class="flex flex-wrap gap-4 justify-center md:justify-start">
          <a
            href="/contact"
            class="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow"
          >
            <i class="fas fa-envelope"></i> Contact Team
          </a>
          <a
            href="/Saktrix-Brochure.pdf"
            download
            class="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
          >
            <i class="fas fa-download"></i> Download Profile
          </a>
        </div>
      </div>

      <!-- Right Visual -->
      <div class="w-full md:w-1/2">
        <img
          src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1000&q=80"
          alt="Corporate team"
          class="rounded-2xl shadow-xl border border-white/10 w-full h-auto"
        />
      </div>
    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaDownload, FaBriefcase } from 'react-icons/fa';

export const CTACorporate = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Saktrix</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Let’s collaborate on your next corporate innovation. Contact our team or download our company profile to learn more about our services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow"
            >
              <FaEnvelope /> Contact Team
            </a>
            <a
              href="/Saktrix-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaDownload /> Download Profile
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src="https://images.unsplash.com/photo-1523958203904-cdcb402031fd?auto=format&fit=crop&w=1000&q=80"
            alt="Corporate team"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

`
}
SectionShow={
  <section className="w-full min-h-screen bg-gradient-to-tr from-gray-100 via-white to-gray-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left Text */}
        <div className="max-w-xl space-y-6 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Partner With <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Saktrix</span>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg">
            Let’s collaborate on your next corporate innovation. Contact our team or download our company profile to learn more about our services.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow"
            >
              <FaEnvelope /> Contact Team
            </a>
            <a
              href="/Saktrix-Brochure.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 border border-gray-400 dark:border-gray-700 text-gray-800 dark:text-white rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition"
            >
              <FaDownload /> Download Profile
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="w-full md:w-1/2"
        >
          <img
            src={Ai}
            alt="Corporate team"
            className="rounded-2xl shadow-xl border border-white/10"
          />
        </motion.div>
      </motion.div>
  </section>
}
/>
  
  </>  
 )
}


export function CTAdemoFive(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>AI Service CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="bg-black text-white">

  <section class="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden relative">

    <!-- Glow Ball -->
    <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[180px] opacity-20 -z-10"></div>

    <div class="max-w-5xl mx-auto text-center space-y-8">

      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
        Power Your Product with AI
      </h2>

      <!-- Paragraph -->
      <p class="text-gray-300 text-lg max-w-2xl mx-auto">
        Integrate intelligent features, automate workflows, and launch smarter solutions with our modular AI UI components.
      </p>

      <!-- Buttons -->
      <div class="flex flex-wrap justify-center gap-4 mt-6">
        <a
          href="/get-started"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition shadow-xl animate-pulse hover:animate-none"
        >
          <i class="fas fa-bolt"></i> Try AI Toolkit
        </a>
        <a
          href="/demo"
          class="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
        >
          <i class="fas fa-magic"></i> Request Demo
        </a>
      </div>

      <!-- Footer Note -->
      <div class="mt-6 text-sm text-gray-400 flex justify-center gap-2 items-center">
        <i class="fas fa-robot text-pink-500"></i>
        Built with OpenAI, TensorFlow, and LangChain
      </div>

    </div>
  </section>

</body>
</html>

`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaMagic, FaBolt } from 'react-icons/fa';

export const CTAAIService = () => {
  return (
    <section className=" w-full bg-gradient-to-br min-h-screen from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden relative">
      {/* Glow Ball */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[180px] opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          Power Your Product with AI
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Integrate intelligent features, automate workflows, and launch smarter solutions with our modular AI UI components.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition shadow-xl animate-pulse hover:animate-none"
          >
            <FaBolt /> Try AI Toolkit
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            <FaMagic /> Request Demo
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-400 flex justify-center gap-2 items-center">
          <FaRobot className="text-pink-500" />
          Built with OpenAI, TensorFlow, and LangChain
        </div>
      </motion.div>
    </section>
  );
};

`
}
SectionShow={
  <section className="w-full min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden relative">
      {/* Glow Ball */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 blur-[180px] opacity-20 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-5xl mx-auto text-center space-y-8"
      >
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">
          Power Your Product with AI
        </h2>

        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          Integrate intelligent features, automate workflows, and launch smarter solutions with our modular AI UI components.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="/get-started"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:scale-105 transition shadow-xl animate-pulse hover:animate-none"
          >
            <FaBolt /> Try AI Toolkit
          </a>
          <a
            href="/demo"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-full hover:bg-white/10 transition"
          >
            <FaMagic /> Request Demo
          </a>
        </div>

        <div className="mt-6 text-sm text-gray-400 flex justify-center gap-2 items-center">
          <FaRobot className="text-pink-500" />
          Built with OpenAI, TensorFlow, and LangChain
        </div>
      </motion.div>
  </section>
}/>
  
  </>  
 )
}


export function CTAdemoSix(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Medical CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

  <section class="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6 text-center">
    <div class="max-w-4xl mx-auto space-y-8">

      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold">
        Prioritize <span class="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Patient Trust</span>
      </h2>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
        Empower your healthcare platform with trusted UI components tailored for hospitals, clinics, and care services. HIPAA-compliant, scalable, and beautifully crafted.
      </p>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <a href="/contact" class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg">
          <i class="fas fa-user-md"></i> Request a Free Consultation
        </a>
      </div>

      <!-- Certifications / Badges -->
      <div class="flex flex-wrap justify-center items-center gap-6 mt-10 text-gray-700 dark:text-gray-300 text-sm">
        <div class="flex items-center gap-2">
          <i class="fas fa-shield-alt text-blue-500"></i>
          HIPAA Compliant
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-heartbeat text-red-500"></i>
          WHO Certified Standards
        </div>
        <div class="flex items-center gap-2">
          <i class="fas fa-stethoscope text-green-600"></i>
          Trusted by 100+ Clinics
        </div>
      </div>

    </div>
  </section>

</body>
</html>`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaShieldAlt, FaHeartbeat, FaStethoscope } from 'react-icons/fa';

export const CTAMedical = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Prioritize <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Patient Trust</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Empower your healthcare platform with trusted UI components tailored for hospitals, clinics, and care services. HIPAA-compliant, scalable, and beautifully crafted.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg">
            <FaUserMd /> Request a Free Consultation
          </button>
        </div>

        {/* Certifications/Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-500" />
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaHeartbeat className="text-red-500" />
            WHO Certified Standards
          </div>
          <div className="flex items-center gap-2">
            <FaStethoscope className="text-green-600" />
            Trusted by 100+ Clinics
          </div>
        </div>
      </motion.div>
    </section>
  );
};

`
}

SectionShow={
<section className=" w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-20 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Prioritize <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500">Patient Trust</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg max-w-2xl mx-auto">
          Empower your healthcare platform with trusted UI components tailored for hospitals, clinics, and care services. HIPAA-compliant, scalable, and beautifully crafted.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-full font-semibold hover:scale-105 transition shadow-lg">
            <FaUserMd /> Request a Free Consultation
          </button>
        </div>

        {/* Certifications/Badges */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-10 text-gray-700 dark:text-gray-300 text-sm">
          <div className="flex items-center gap-2">
            <FaShieldAlt className="text-blue-500" />
            HIPAA Compliant
          </div>
          <div className="flex items-center gap-2">
            <FaHeartbeat className="text-red-500" />
            WHO Certified Standards
          </div>
          <div className="flex items-center gap-2">
            <FaStethoscope className="text-green-600" />
            Trusted by 100+ Clinics
          </div>
        </div>
      </motion.div>
    </section>
}/>
  
</>  
 )
}

export function CTAdemoSeven(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Startup CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

  <section class="bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black py-24 px-6 text-center">
    <div class="max-w-4xl mx-auto space-y-8">

      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold">
        Ready to Scale Your Startup?<br />
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
          Let’s Build Your Next Big Thing
        </span>
      </h2>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 text-lg">
        We help founders and innovators build stunning user interfaces fast. Schedule a free demo and explore how Saktrix UI accelerates your MVP to market.
      </p>

      <!-- CTA Button -->
      <div class="flex justify-center">
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noreferrer"
          class="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-xl"
        >
          <i class="fas fa-calendar-alt"></i> Schedule Your Demo
        </a>
      </div>

      <!-- Social Proof -->
      <div class="mt-4 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
        <i class="fas fa-users text-blue-500"></i>
        Trusted by 2,500+ growing startups
      </div>

    </div>
  </section>

</body>
</html>`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt, FaUsers } from 'react-icons/fa';

export const CTAStartup = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Ready to Scale Your Startup?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Let’s Build Your Next Big Thing
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We help founders and innovators build stunning user interfaces fast. Schedule a free demo and explore how Saktrix UI accelerates your MVP to market.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-xl"
          >
            <FaCalendarAlt /> Schedule Your Demo
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-4 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
          <FaUsers className="text-blue-500" />
          Trusted by 2,500+ growing startups
        </div>
      </motion.div>
    </section>
  );
};`
}

SectionShow={
 <section className="w-full min-h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black py-24 px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Ready to Scale Your Startup?
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
            Let’s Build Your Next Big Thing
          </span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          We help founders and innovators build stunning user interfaces fast. Schedule a free demo and explore how Saktrix UI accelerates your MVP to market.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full font-semibold hover:scale-105 transition shadow-xl"
          >
            <FaCalendarAlt /> Schedule Your Demo
          </a>
        </div>

        {/* Social Proof */}
        <div className="mt-4 flex justify-center items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
          <FaUsers className="text-blue-500" />
          Trusted by 2,500+ growing startups
        </div>
      </motion.div>
</section>

}/>
  
  </>  
 )
}

export function CTAdemoEight(){
 return(
  <>
<CTAComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>SaaS CTA</title>
  <script src="https://cdn.tailwindcss.com"></script>

  <!--  Font Awesome CDN -->
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
    integrity="sha512-Xx1vUzpD1RwclB8r6gRrXxK2NFaJ5tn0eUeEF5nJGhRQb6Eb2AzGHUHR1dkzrTXBQAwLKJ2HaU6IXF8U7Y4F0A=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
</head>
<body class="bg-white dark:bg-gray-950 text-gray-900 dark:text-white">

  <section class="w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-24 px-6 overflow-hidden">
    
    <!-- Glowing Shape -->
    <div class="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-[160px] opacity-20 -translate-x-1/2 -z-10"></div>

    <div class="max-w-4xl mx-auto text-center space-y-8">

      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold">
        Supercharge Your Workflow with
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> Saktrix UI</span>
      </h2>

      <!-- Description -->
      <p class="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Join 10,000+ developers building SaaS interfaces with blazing-fast components, advanced animation, and ultra-clean design.
      </p>

      <!-- Email Input + CTA -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div class="relative w-full sm:w-96">
          <i class="fas fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500"></i>
          <input
            type="email"
            placeholder="Your email"
            class="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
          />
        </div>
        <button class="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg animate-pulse hover:animate-none">
          <i class="fas fa-rocket mr-2"></i> Get Started Free
        </button>
      </div>

      <!-- Trust Badge -->
      <div class="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4">
        <i class="fas fa-lock text-green-500"></i>
        No spam. 100% secure. Cancel anytime.
      </div>
    </div>
  </section>

</body>
</html>

`}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaLock, FaEnvelope } from 'react-icons/fa';

export const CTASaas = () => {
  return (
    <section className="w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Glowing Shape */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-[160px] opacity-20 -translate-x-1/2 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Supercharge Your Workflow with
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> Saktrix UI</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join 10,000+ developers building SaaS interfaces with blazing-fast components, advanced animation, and ultra-clean design.
        </p>

        {/* Input + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-96">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg animate-pulse hover:animate-none">
            <FaRocket className="inline mr-2" />
            Get Started Free
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4">
          <FaLock className="text-green-500" />
          No spam. 100% secure. Cancel anytime.
        </div>
      </motion.div>
    </section>
  );
};

`
}

SectionShow={
<section className="w-full min-h-screen relative bg-gradient-to-br from-blue-50 via-purple-100 to-pink-50 dark:from-gray-950 dark:via-black dark:to-gray-900 py-24 px-6 overflow-hidden">
      {/* Glowing Shape */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 blur-[160px] opacity-20 -translate-x-1/2 -z-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
          Supercharge Your Workflow with <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"> Saktrix UI</span>
        </h2>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Join 10,000+ developers building SaaS interfaces with blazing-fast components, advanced animation, and ultra-clean design.
        </p>

        {/* Input + CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <div className="relative w-full sm:w-96">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
            <input
              type="email"
              placeholder="Your email"
              className="w-full py-3 pl-10 pr-4 rounded-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-gray-900 dark:text-white outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold hover:scale-105 transition shadow-lg animate-pulse hover:animate-none">
            <FaRocket className="inline mr-2" />
            Get Started Free
          </button>
        </div>

        {/* Trust Badge */}
        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400 mt-4">
          <FaLock className="text-green-500" />
          No spam. 100% secure. Cancel anytime.
        </div>
      </motion.div>
    </section>
}

/>
  
  </>  
 )
}