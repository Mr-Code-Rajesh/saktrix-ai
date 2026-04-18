import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaShieldAlt } from "react-icons/fa";
import SaaSImage from "../../../assets/bg/ai.gif";
import AboutImg from "../../../assets/bg/ai.gif";
import { FaUserMd, FaHeartbeat, FaClinicMedical, FaCheckCircle } from 'react-icons/fa';
import { FaLaptopCode, FaChalkboardTeacher, FaGraduationCap } from 'react-icons/fa';
import { FaBullhorn, FaUsers, FaChartPie } from 'react-icons/fa';
import { FaWallet } from 'react-icons/fa';
import { FaBriefcase, FaChartLine } from 'react-icons/fa';
import { FaRobot, FaCloud, FaCogs, FaLock } from 'react-icons/fa';
import { FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";
import StartupImg from "../../../assets/bg/ai.gif";
import { useState } from 'react';
import { FaCopy } from "react-icons/fa";

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};



function AboutComponents ({htmlCode,reactCode,SectionShow}){
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
export function AboutDemoOne(){
  return(
<>
<AboutComponents
htmlCode={
`<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About SaaS – Saktrix UI</title>

  <!-- Font Awesome for Icons -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" integrity="sha512-...your-integrity..." crossorigin="anonymous" referrerpolicy="no-referrer" />

  <!-- AOS Animation Library -->
  <link rel="stylesheet" href="https://unpkg.com/aos@2.3.1/dist/aos.css" />
</head>
<body class="bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">

  <section class="w-full min-h-screen py-20 px-6">
    <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      
      <!-- Text Content -->
      <div class="space-y-6" data-aos="fade-up" data-aos-duration="800">
        <h2 class="text-4xl font-bold tracking-tight">
          Smart Solutions <br />
          for Modern <span class="text-indigo-500">SaaS Platforms</span>
        </h2>
        <p class="text-base leading-relaxed text-gray-600 dark:text-gray-300">
          Saktrix UI empowers SaaS developers with high-quality, reusable, animated components that ensure fast development and pixel-perfect design across all devices.
        </p>

        <!-- Features -->
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          <div class="flex flex-col items-center text-center space-y-2">
            <i class="fas fa-cogs text-indigo-500 text-3xl"></i>
            <p class="text-sm font-medium">Modular Design</p>
          </div>
          <div class="flex flex-col items-center text-center space-y-2">
            <i class="fas fa-cloud text-indigo-500 text-3xl"></i>
            <p class="text-sm font-medium">Cloud Ready</p>
          </div>
          <div class="flex flex-col items-center text-center space-y-2">
            <i class="fas fa-shield-alt text-indigo-500 text-3xl"></i>
            <p class="text-sm font-medium">Secure & Scalable</p>
          </div>
        </div>

        <button class="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Explore Features
        </button>
      </div>

      <!-- Image Side -->
      <div data-aos="zoom-in" data-aos-duration="800">
        <img
          src="https://cdn.pixabay.com/animation/2023/07/26/07/46/07-46-44-310_512.gif"
          alt="SaaS App Illustration"
          class="rounded-3xl shadow-xl w-full"
        />
      </div>

    </div>
  </section>

  <!-- AOS JS -->
  <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>`}

reactCode={
`import { motion } from "framer-motion";
import { FaCogs, FaCloud, FaShieldAlt } from "react-icons/fa";
import SaaSImage from "../../../assets/bg/ai.gif"; // Replace with your custom SaaS illustration/image

export  const AboutSaaS = ()=> {
  return (
    <section className="w-full py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Smart Solutions <br />
            for Modern <span className="text-indigo-500">SaaS Platforms</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI empowers SaaS developers with high-quality, reusable, animated components that ensure fast development and pixel-perfect design across all devices.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCogs className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Modular Design</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCloud className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Cloud Ready</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaShieldAlt className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Secure & Scalable</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Explore Features
          </button>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={SaaSImage}
            alt="SaaS App Illustration"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.div>

      </div>
    </section>
  );
}

`
}
SectionShow={
<section className="w-full min-h-screen py-20 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <h2 className="text-4xl font-bold tracking-tight">
            Smart Solutions <br />
            for Modern <span className="text-indigo-500">SaaS Platforms</span>
          </h2>
          <p className="text-base leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI empowers SaaS developers with high-quality, reusable, animated components that ensure fast development and pixel-perfect design across all devices.
          </p>
          
          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCogs className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Modular Design</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaCloud className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Cloud Ready</p>
            </div>
            <div className="flex flex-col items-center text-center space-y-2">
              <FaShieldAlt className="text-indigo-500 text-3xl" />
              <p className="text-sm font-medium">Secure & Scalable</p>
            </div>
          </div>

          <button className="mt-8 px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
            Explore Features
          </button>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={SaaSImage}
            alt="SaaS App Illustration"
            className="rounded-3xl shadow-xl w-full"
          />
        </motion.div>

      </div>
</section>
}/>

</>
  )
}

export function AboutDemoTwo(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import { motion } from "framer-motion";
import AboutImg from "../../../assets/bg/ai.gif"; // Replace with your custom image

export const AboutTwo = () => {
  return (
    <section className="w-full px-6 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={AboutImg}
            alt="About Saktrix"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 dark:text-gray-100 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-cyan-500">Saktrix UI</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI is a premium collection of fully responsive, animated components designed to help developers and startups build beautiful websites faster.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              ✅ Over 40 unique sections
            </li>
            <li className="flex items-center gap-2">
              ✅ Built with Tailwind CSS, React & Motion
            </li>
            <li className="flex items-center gap-2">
              ✅ Designed for both light and dark modes
            </li>
          </ul>
          <div className="pt-4">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}`
}
SectionShow={
  <section className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Image Side */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={AboutImg}
            alt="About Saktrix"
            className="w-full h-auto rounded-3xl shadow-xl object-cover"
          />
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-gray-800 dark:text-gray-100 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-bold">
            About <span className="text-cyan-500">Saktrix UI</span>
          </h2>
          <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
            Saktrix UI is a premium collection of fully responsive, animated components designed to help developers and startups build beautiful websites faster.
          </p>
          <ul className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <li className="flex items-center gap-2">
              ✅ Over 40 unique sections
            </li>
            <li className="flex items-center gap-2">
              ✅ Built with Tailwind CSS, React & Motion
            </li>
            <li className="flex items-center gap-2">
              ✅ Designed for both light and dark modes
            </li>
          </ul>
          <div className="pt-4">
            <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
  </section>
}
/>

</>
  )
}

export function AboutDemoThree(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaHeartbeat, FaClinicMedical, FaCheckCircle } from 'react-icons/fa';

export const AboutMedical = () => {
  return (
    <section className="bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaClinicMedical className="text-xl" />
            Your Trusted Health Partner
          </div>
          <h2 className="text-4xl font-bold leading-snug">
            Dedicated Medical Care <br /> With a Human Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Medical, we combine cutting-edge healthcare technology with expert human care.
            From personalized diagnosis to complete wellness journeys, we empower healthier lives — one patient at a time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaUserMd className="text-blue-500 text-xl" />
              <span>Certified Doctors</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeartbeat className="text-pink-500 text-xl" />
              <span>Advanced Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>24/7 Emergency Care</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClinicMedical className="text-purple-500 text-xl" />
              <span>Multi-Speciality Clinics</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Book Appointment
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1588776814546-1ffcf47267d0?auto=format&fit=crop&w=800&q=80"
            alt="Doctor"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};
`
}
SectionShow={
<section className="w-full min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white py-20 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaClinicMedical className="text-xl" />
            Your Trusted Health Partner
          </div>
          <h2 className="text-4xl font-bold leading-snug">
            Dedicated Medical Care <br /> With a Human Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Medical, we combine cutting-edge healthcare technology with expert human care.
            From personalized diagnosis to complete wellness journeys, we empower healthier lives — one patient at a time.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <FaUserMd className="text-blue-500 text-xl" />
              <span>Certified Doctors</span>
            </div>
            <div className="flex items-center gap-3">
              <FaHeartbeat className="text-pink-500 text-xl" />
              <span>Advanced Equipment</span>
            </div>
            <div className="flex items-center gap-3">
              <FaCheckCircle className="text-green-500 text-xl" />
              <span>24/7 Emergency Care</span>
            </div>
            <div className="flex items-center gap-3">
              <FaClinicMedical className="text-purple-500 text-xl" />
              <span>Multi-Speciality Clinics</span>
            </div>
          </div>

          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:opacity-90 transition duration-300">
              Book Appointment
            </button>
          </div>
        </motion.div>

        {/* Right: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={Ai}
            alt="Doctor"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
</section>
}
/>

</>
  )
}


export function AboutDemoFour(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptopCode, FaChalkboardTeacher, FaGraduationCap, FaLightbulb } from 'react-icons/fa';

export const AboutEdTech = () => {
  return (
    <section className="bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2020/06/23/20/42/online-education-5339461_960_720.jpg"
            alt="Online Learning"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaGraduationCap className="text-xl" />
            Empowering Digital Learning
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Learn Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Grow Faster.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix EdTech, we build tools and platforms that make education accessible, engaging, and effective for every learner — anytime, anywhere.
            We believe in the power of AI + interactivity to personalize learning journeys.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLaptopCode className="text-purple-500 text-lg" />
              Interactive Online Courses
            </li>
            <li className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-pink-500 text-lg" />
              Live Expert Sessions
            </li>
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              AI-Based Personalization
            </li>
            <li className="flex items-center gap-3">
              <FaGraduationCap className="text-blue-500 text-lg" />
              Career-Focused Tracks
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Start Learning
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

`
}
SectionShow={
<section className="w-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left Image / Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-2xl overflow-hidden shadow-xl"
        >
          <img
            src={Ai}
            alt="Online Learning"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
            <FaGraduationCap className="text-xl" />
            Empowering Digital Learning
          </div>

          <h2 className="text-4xl font-extrabold leading-tight tracking-tight">
            Learn Smarter, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
              Grow Faster.
            </span>
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix EdTech, we build tools and platforms that make education accessible, engaging, and effective for every learner — anytime, anywhere.
            We believe in the power of AI + interactivity to personalize learning journeys.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLaptopCode className="text-purple-500 text-lg" />
              Interactive Online Courses
            </li>
            <li className="flex items-center gap-3">
              <FaChalkboardTeacher className="text-pink-500 text-lg" />
              Live Expert Sessions
            </li>
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              AI-Based Personalization
            </li>
            <li className="flex items-center gap-3">
              <FaGraduationCap className="text-blue-500 text-lg" />
              Career-Focused Tracks
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:opacity-90 transition">
              Start Learning
            </button>
          </div>
        </motion.div>
      </div>
</section>
}
/>

</>
  )
}


export function AboutDemoFive(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaBullhorn, FaRocket, FaUsers, FaChartPie } from 'react-icons/fa';

export const AboutDigitalMarketing = () => {
  return (
    <section className="W-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left: Image or Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
            alt="Digital Marketing Strategy"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right: Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 dark:text-pink-400">
            <FaBullhorn className="text-xl" />
            Digital Marketing Experts
          </div>

          <h2 className="text-4xl font-extrabold leading-snug">
            Creative Strategies That Drive Real Results
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Digital, we blend data-driven strategies with creative brilliance to help brands rise above the noise.
            Whether it’s social media, SEO, PPC, or full-funnel marketing — we deliver results that speak for themselves.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <div className="flex items-center gap-3">
              <FaRocket className="text-purple-500 text-lg" />
              ROI-Focused Campaigns
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-500 text-lg" />
              Audience Engagement
            </div>
            <div className="flex items-center gap-3">
              <FaChartPie className="text-green-500 text-lg" />
              Real-Time Analytics
            </div>
            <div className="flex items-center gap-3">
              <FaBullhorn className="text-pink-500 text-lg" />
              Omni-Channel Promotion
            </div>
          </div>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Let's Boost Your Brand
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

`
}
SectionShow={
<section className="W-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">
        
        {/* Left: Image or Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1506765515384-028b60a970df?auto=format&fit=crop&w=800&q=80"
            alt="Digital Marketing Strategy"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>

        {/* Right: Textual Content */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 dark:text-pink-400">
            <FaBullhorn className="text-xl" />
            Digital Marketing Experts
          </div>

          <h2 className="text-4xl font-extrabold leading-snug">
            Creative Strategies That Drive Real Results
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            At Saktrix Digital, we blend data-driven strategies with creative brilliance to help brands rise above the noise.
            Whether it’s social media, SEO, PPC, or full-funnel marketing — we deliver results that speak for themselves.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <div className="flex items-center gap-3">
              <FaRocket className="text-purple-500 text-lg" />
              ROI-Focused Campaigns
            </div>
            <div className="flex items-center gap-3">
              <FaUsers className="text-blue-500 text-lg" />
              Audience Engagement
            </div>
            <div className="flex items-center gap-3">
              <FaChartPie className="text-green-500 text-lg" />
              Real-Time Analytics
            </div>
            <div className="flex items-center gap-3">
              <FaBullhorn className="text-pink-500 text-lg" />
              Omni-Channel Promotion
            </div>
          </div>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Let's Boost Your Brand
            </button>
          </div>
        </motion.div>
      </div>
</section>
}
/>

</>
  )
}

export function AboutDemoSix(){
  return(
<>
<AboutComponents
htmlCode={
``
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaChartLine, FaShieldAlt, FaCloud } from 'react-icons/fa';

export const AboutFintechSaaS = () => {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[150px] -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaWallet className="text-xl" />
            Fintech + SaaS Innovation
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Empowering Financial Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              with Automation & Insight
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix Fintech Suite simplifies financial workflows using intelligent automation, cloud security, and
            real-time analytics. Designed for modern startups and enterprise finance teams.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-400 text-lg" />
              Real-Time Financial Dashboards
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-purple-400 text-lg" />
              End-to-End Data Security
            </li>
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Architecture
            </li>
            <li className="flex items-center gap-3">
              <FaWallet className="text-pink-400 text-lg" />
              Smart Expense Management
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              Get Free Demo
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10"
        >
          <img
            src="https://cdn.pixabay.com/photo/2022/10/11/05/48/chart-7512572_960_720.png"
            alt="Fintech SaaS"
            className="w-full h-full object-contain bg-white/5 p-4"
          />
        </motion.div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-gray-950 to-black text-white py-20 px-6 relative overflow-hidden">
      {/* Glow Effect */}
      <div className="absolute top-0 left-1/2 w-[700px] h-[700px] bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[150px] -translate-x-1/2 z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaWallet className="text-xl" />
            Fintech + SaaS Innovation
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
            Empowering Financial Operations <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              with Automation & Insight
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix Fintech Suite simplifies financial workflows using intelligent automation, cloud security, and
            real-time analytics. Designed for modern startups and enterprise finance teams.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm mt-4">
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-400 text-lg" />
              Real-Time Financial Dashboards
            </li>
            <li className="flex items-center gap-3">
              <FaShieldAlt className="text-purple-400 text-lg" />
              End-to-End Data Security
            </li>
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Architecture
            </li>
            <li className="flex items-center gap-3">
              <FaWallet className="text-pink-400 text-lg" />
              Smart Expense Management
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:opacity-90 transition">
              Get Free Demo
            </button>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-2xl overflow-hidden shadow-xl border border-white/10"
        >
          <img
            src={Ai}
            alt="Fintech SaaS"
            className="w-full h-full object-contain bg-white/5 p-4"
          />
        </motion.div>
      </div>
 </section>
}/>

</>
  )
}

export function AboutDemoSeven(){
  return(
<>
<AboutComponents
htmlCode={
``
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaLightbulb, FaHandshake, FaChartLine } from 'react-icons/fa';

export const AboutBusinessConsulting = () => {
  return (
    <section className="w-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            <FaBriefcase className="text-xl" />
            Expert Business Advisory
          </div>

          <h2 className="text-4xl font-extrabold leading-tight">
            Strategic Consulting for Your Business Growth
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Saktrix Consulting brings together deep industry knowledge, data-driven strategies, and practical execution to unlock business potential.
            We partner with startups, SMBs, and enterprises to drive sustainable transformation.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              Innovative Growth Solutions
            </li>
            <li className="flex items-center gap-3">
              <FaHandshake className="text-blue-500 text-lg" />
              Long-Term Partnerships
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-500 text-lg" />
              ROI-Focused Strategies
            </li>
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-purple-500 text-lg" />
              Industry-Proven Methods
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Side Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src="https://images.unsplash.com/photo-1605902711622-cfb43c4437e1?auto=format&fit=crop&w=800&q=80"
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full min-h-screen bg-white dark:bg-gray-950 py-20 px-6 text-gray-800 dark:text-gray-100">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-purple-600 dark:text-purple-400">
            <FaBriefcase className="text-xl" />
            Expert Business Advisory
          </div>

          <h2 className="text-4xl font-extrabold leading-tight">
            Strategic Consulting for Your Business Growth
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Saktrix Consulting brings together deep industry knowledge, data-driven strategies, and practical execution to unlock business potential.
            We partner with startups, SMBs, and enterprises to drive sustainable transformation.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 text-sm">
            <li className="flex items-center gap-3">
              <FaLightbulb className="text-yellow-400 text-lg" />
              Innovative Growth Solutions
            </li>
            <li className="flex items-center gap-3">
              <FaHandshake className="text-blue-500 text-lg" />
              Long-Term Partnerships
            </li>
            <li className="flex items-center gap-3">
              <FaChartLine className="text-green-500 text-lg" />
              ROI-Focused Strategies
            </li>
            <li className="flex items-center gap-3">
              <FaBriefcase className="text-purple-500 text-lg" />
              Industry-Proven Methods
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-semibold shadow-md hover:opacity-90 transition">
              Schedule Free Consultation
            </button>
          </div>
        </motion.div>

        {/* Right Side Image / Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative rounded-xl overflow-hidden shadow-xl"
        >
          <img
            src={Ai}
            alt="Business Meeting"
            className="w-full h-full object-cover rounded-xl"
          />
        </motion.div>
      </div>
 </section>
}
/>

</>
  )
}

export function AboutDemoEight(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import React from 'react';
import { motion } from 'framer-motion';
import { FaRobot, FaCloud, FaCogs, FaLock } from 'react-icons/fa';

export const AboutAISaas = () => {
  return (
    <section className="w-full min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaRobot className="text-xl" />
            AI-Powered SaaS Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Automate Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Scale With Smart AI.
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix AI SaaS delivers automation, predictions, and decision-making superpowers through powerful machine learning APIs, scalable cloud services, and secure infrastructure.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Infrastructure
            </li>
            <li className="flex items-center gap-3">
              <FaCogs className="text-purple-400 text-lg" />
              Real-Time AI Workflows
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-pink-400 text-lg" />
              Enterprise-Grade Security
            </li>
            <li className="flex items-center gap-3">
              <FaRobot className="text-cyan-400 text-lg" />
              No-Code AI Integrations
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
              Explore Platform
            </button>
          </div>
        </motion.div>

        {/* Right: Glowing Tech Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-80 md:h-96 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-pink-400/20 rounded-3xl flex items-center justify-center shadow-xl"
        >
          <img
            src="https://cdn.pixabay.com/photo/2023/03/29/15/10/ai-7886155_960_720.png"
            alt="AI SaaS Graphic"
            className="w-3/4 h-3/4 object-contain animate-pulse"
          />
        </motion.div>
      </div>

      {/* Blurred Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
  );
};

`
}
SectionShow={
    <section className="w-full min-h-screen relative bg-gradient-to-br from-black via-gray-900 to-gray-950 text-white py-20 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400">
            <FaRobot className="text-xl" />
            AI-Powered SaaS Platform
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Automate Intelligence. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500">
              Scale With Smart AI.
            </span>
          </h2>

          <p className="text-gray-300">
            Saktrix AI SaaS delivers automation, predictions, and decision-making superpowers through powerful machine learning APIs, scalable cloud services, and secure infrastructure.
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <li className="flex items-center gap-3">
              <FaCloud className="text-blue-400 text-lg" />
              Scalable Cloud Infrastructure
            </li>
            <li className="flex items-center gap-3">
              <FaCogs className="text-purple-400 text-lg" />
              Real-Time AI Workflows
            </li>
            <li className="flex items-center gap-3">
              <FaLock className="text-pink-400 text-lg" />
              Enterprise-Grade Security
            </li>
            <li className="flex items-center gap-3">
              <FaRobot className="text-cyan-400 text-lg" />
              No-Code AI Integrations
            </li>
          </ul>

          <div className="pt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:opacity-90 transition">
              Explore Platform
            </button>
          </div>
        </motion.div>

        {/* Right: Glowing Tech Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-80 md:h-96 bg-gradient-to-br from-purple-600/20 via-blue-500/10 to-pink-400/20 rounded-3xl flex items-center justify-center shadow-xl"
        >
          <img
            src={Ai}
            alt="AI SaaS Graphic"
            className="w-full h-full p-4 rounded-3xl object-cover animate-pulse" 
          />
        </motion.div>
      </div>

      {/* Blurred Glow Background */}
      <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gradient-to-r from-pink-500 via-purple-600 to-blue-500 opacity-30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 z-0"></div>
    </section>
}
/>

</>
  )
}

export function AboutDemoNine(){
  return(
<>
<AboutComponents
htmlCode={
`
`
}
reactCode={
`import { motion } from "framer-motion";
import { FaRocket, FaHandshake, FaLightbulb } from "react-icons/fa";
import StartupImg from "../../../assets/bg/ai.gif"; // Replace with your own startup-friendly image

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export const AboutStartup = ()=> {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={StartupImg}
            alt="Startup Growth"
            className="rounded-xl shadow-2xl w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-tight"
          >
            Fuel Your <span className="text-pink-500">Startup Journey</span>
            <br /> with Saktrix UI
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Launch faster and look professional from day one. Our ready-to-use
            components save you hours of design and build time so you can focus on scaling.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
          >
            <div className="flex flex-col items-center text-center">
              <FaRocket className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Fast Launch</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Client-Ready</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLightbulb className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Creative First</p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            Build with Saktrix
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

`
}
SectionShow={
 <section className="w-full min-h-screen px-6 py-20 bg-white dark:bg-gray-950 overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={StartupImg}
            alt="Startup Growth"
            className="rounded-xl shadow-2xl w-full"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-6 text-gray-800 dark:text-gray-100"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl font-extrabold leading-tight"
          >
            Fuel Your <span className="text-pink-500">Startup Journey</span>
            <br /> with Saktrix UI
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-gray-600 dark:text-gray-300 leading-relaxed"
          >
            Launch faster and look professional from day one. Our ready-to-use
            components save you hours of design and build time so you can focus on scaling.
          </motion.p>

          {/* Highlights */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6"
          >
            <div className="flex flex-col items-center text-center">
              <FaRocket className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Fast Launch</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaHandshake className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Client-Ready</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLightbulb className="text-pink-500 text-3xl" />
              <p className="text-sm mt-2 font-medium">Creative First</p>
            </div>
          </motion.div>

          <motion.button
            variants={fadeInUp}
            className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition"
          >
            Build with Saktrix
          </motion.button>
        </motion.div>
      </div>
    </section>
}
/>

</>
  )
}
