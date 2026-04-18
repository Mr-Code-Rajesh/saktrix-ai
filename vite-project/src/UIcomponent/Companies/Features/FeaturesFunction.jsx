import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';

import {
  FaChartLine,
  FaHandshake,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

import {
  FaHeartbeat,
  FaUserNurse,
  FaShieldAlt,
  FaClinicMedical
} from "react-icons/fa";
import {
  FaRobot,
  FaBrain,
  FaCogs,
  FaCloud
} from "react-icons/fa";

import {
  FaWallet,
  FaFingerprint,
  FaLock
} from "react-icons/fa";

import {
  FaHome,
  FaMapMarkedAlt,
  FaDollarSign,
  FaHeadset
} from "react-icons/fa";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaGraduationCap,
} from "react-icons/fa";
import {
  FaBullhorn,
  FaChartPie,
  FaSearchDollar,
  FaMailBulk
} from "react-icons/fa";
import {
  FaTruckMoving,
  FaClock,
  FaWarehouse
} from "react-icons/fa";


const features = [
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Data-Driven Results",
    desc: "We leverage analytics to optimize your business strategy for maximum ROI."
  },
  {
    icon: <FaHandshake className="text-purple-500 text-3xl" />,
    title: "Trusted Partnerships",
    desc: "Our long-standing corporate partnerships ensure continuity and trust."
  },
  {
    icon: <FaUserTie className="text-teal-500 text-3xl" />,
    title: "Executive-Level Support",
    desc: "Get direct access to our senior consultants and strategic advisors."
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    title: "Enterprise-Ready Systems",
    desc: "Scalable solutions tailored for large organizations and global teams."
  }
];
const featuresTwo = [
  {
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    title: "Real-Time Monitoring",
    desc: "Track patient vitals and health data in real time with precision dashboards."
  },
  {
    icon: <FaUserNurse className="text-blue-500 text-3xl" />,
    title: "Care Team Access",
    desc: "Enable seamless collaboration between doctors, nurses, and patients."
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-3xl" />,
    title: "HIPAA-Compliant Security",
    desc: "Ensure patient data is secure, encrypted, and fully compliant with regulations."
  },
  {
    icon: <FaClinicMedical className="text-purple-500 text-3xl" />,
    title: "Clinic & Lab Integration",
    desc: "Streamline appointments, lab results, and EMR records into one platform."
  }
];
const featuresThree = [
  {
    icon: <FaRobot className="text-blue-500 text-3xl" />,
    title: "AI-Driven UI Components",
    desc: "Modular building blocks powered by intelligent behavior and real-time learning."
  },
  {
    icon: <FaBrain className="text-pink-500 text-3xl" />,
    title: "Cognitive Automation",
    desc: "Leverage ML to reduce manual workflows and improve business logic."
  },
  {
    icon: <FaCogs className="text-purple-500 text-3xl" />,
    title: "Customizable Pipelines",
    desc: "Plug-and-play APIs with pre-trained models for text, vision, and speech."
  },
  {
    icon: <FaCloud className="text-cyan-500 text-3xl" />,
    title: "Cloud-Native Infrastructure",
    desc: "Built to scale with seamless deployments via OpenAI, LangChain, and more."
  }
];
const featuresFour = [
  {
    icon: <FaWallet className="text-green-500 text-3xl" />,
    title: "Smart Wallet Integration",
    desc: "Seamless connection with digital wallets, payment gateways, and blockchain tech."
  },
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Live Market Insights",
    desc: "Real-time data visualization and financial trends backed by secure APIs."
  },
  {
    icon: <FaFingerprint className="text-purple-500 text-3xl" />,
    title: "Biometric Security",
    desc: "Next-gen identity verification with biometric and AI-based risk scoring."
  },
  {
    icon: <FaLock className="text-yellow-500 text-3xl" />,
    title: "Bank-Grade Encryption",
    desc: "End-to-end encryption and compliance for enterprise-grade Fintech solutions."
  }
];
const featuresFive = [
  {
    icon: <FaHome className="text-orange-500 text-3xl" />,
    title: "Property Showcase",
    desc: "Highlight stunning properties with dynamic media, 3D views, and carousel sliders."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-600 text-3xl" />,
    title: "Interactive Maps",
    desc: "Built-in location maps, nearby amenities, and school zone overlays for smart searches."
  },
  {
    icon: <FaDollarSign className="text-yellow-500 text-3xl" />,
    title: "Mortgage Calculator",
    desc: "Instant calculations with down payment, interest rates, and amortization breakdowns."
  },
  {
    icon: <FaHeadset className="text-blue-500 text-3xl" />,
    title: "Agent Chat & Support",
    desc: "Live chat widgets and contact scheduling to close deals faster than ever."
  }
];
const featuresSix = [
  {
    icon: <FaChalkboardTeacher className="text-indigo-500 text-3xl" />,
    title: "Live Classes",
    desc: "Host real-time sessions with chat, polls, whiteboards, and screen sharing."
  },
  {
    icon: <FaVideo className="text-pink-500 text-3xl" />,
    title: "On-Demand Content",
    desc: "Upload lectures, tutorials, and modules accessible anytime, anywhere."
  },
  {
    icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
    title: "Certification System",
    desc: "Award trackable course certificates with student analytics and leaderboards."
  },
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "Progress Insights",
    desc: "Track individual learning stats, engagement rates, and course completion."
  }
];
const featuresSeven = [
  {
    icon: <FaBullhorn className="text-pink-500 text-3xl" />,
    title: "Campaign Management",
    desc: "Launch and monitor ad campaigns across platforms with real-time insights."
  },
  {
    icon: <FaChartPie className="text-purple-500 text-3xl" />,
    title: "Analytics Dashboard",
    desc: "Visualize engagement, CTR, and conversions with actionable data breakdowns."
  },
  {
    icon: <FaSearchDollar className="text-indigo-500 text-3xl" />,
    title: "SEO & SEM Tools",
    desc: "Boost rankings and optimize paid ads with built-in keyword intelligence."
  },
  {
    icon: <FaMailBulk className="text-yellow-500 text-3xl" />,
    title: "Email Marketing Suite",
    desc: "Create, segment, and track high-converting email campaigns with ease."
  }
];
const featuresEight = [
  {
    icon: <FaTruckMoving className="text-blue-500 text-3xl" />,
    title: "Fleet Management",
    desc: "Track and control your entire delivery fleet in real-time with precision logistics."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-500 text-3xl" />,
    title: "Live Route Tracking",
    desc: "Monitor shipments across locations with GPS-integrated route visualizations."
  },
  {
    icon: <FaClock className="text-yellow-500 text-3xl" />,
    title: "ETA Optimization",
    desc: "Predict arrival times and reduce delays with AI-assisted traffic analytics."
  },
  {
    icon: <FaWarehouse className="text-indigo-500 text-3xl" />,
    title: "Warehouse Sync",
    desc: "Keep your warehouse in sync with smart stock-level triggers and automation."
  }
];



function FeaturesComponent ({htmlCode,reactCode,SectionShow}){
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

export function FeaturesDemoOne(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaChartLine,
  FaHandshake,
  FaUserTie,
  FaBuilding
} from "react-icons/fa";

const features = [
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Data-Driven Results",
    desc: "We leverage analytics to optimize your business strategy for maximum ROI."
  },
  {
    icon: <FaHandshake className="text-purple-500 text-3xl" />,
    title: "Trusted Partnerships",
    desc: "Our long-standing corporate partnerships ensure continuity and trust."
  },
  {
    icon: <FaUserTie className="text-teal-500 text-3xl" />,
    title: "Executive-Level Support",
    desc: "Get direct access to our senior consultants and strategic advisors."
  },
  {
    icon: <FaBuilding className="text-yellow-500 text-3xl" />,
    title: "Enterprise-Ready Systems",
    desc: "Scalable solutions tailored for large organizations and global teams."
  }
];

export const FeatureGridCorporate = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Corporate Excellence, Delivered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We help large enterprises stay ahead of the curve with cutting-edge technology and strategic consulting.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
  <section className="w-full min-h-screen  py-20 px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-950 dark:via-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Corporate Excellence, Delivered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          We help large enterprises stay ahead of the curve with cutting-edge technology and strategic consulting.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  </section>
}
/>
</>  
 )
}

export function FeaturesDemoTwo(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaHeartbeat,
  FaUserNurse,
  FaShieldAlt,
  FaClinicMedical
} from "react-icons/fa";

const featuresTwo = [
  {
    icon: <FaHeartbeat className="text-red-500 text-3xl" />,
    title: "Real-Time Monitoring",
    desc: "Track patient vitals and health data in real time with precision dashboards."
  },
  {
    icon: <FaUserNurse className="text-blue-500 text-3xl" />,
    title: "Care Team Access",
    desc: "Enable seamless collaboration between doctors, nurses, and patients."
  },
  {
    icon: <FaShieldAlt className="text-green-500 text-3xl" />,
    title: "HIPAA-Compliant Security",
    desc: "Ensure patient data is secure, encrypted, and fully compliant with regulations."
  },
  {
    icon: <FaClinicMedical className="text-purple-500 text-3xl" />,
    title: "Clinic & Lab Integration",
    desc: "Streamline appointments, lab results, and EMR records into one platform."
  }
];

export const FeatureGridHealthcare = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Soft glow circle */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-10 blur-[160px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Smarter Tools for Modern Healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our healthcare components are built to support doctors, patients, and administrators in delivering better outcomes.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresTwo.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-gray-950 dark:via-black dark:to-gray-900 relative overflow-hidden">
      {/* Soft glow circle */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 opacity-10 blur-[160px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6"
        >
          Smarter Tools for Modern Healthcare
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our healthcare components are built to support doctors, patients, and administrators in delivering better outcomes.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresTwo.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
 </section>
}
/>
</>  
 )
}

export function FeaturesDemoThree(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaBrain,
  FaCogs,
  FaCloud
} from "react-icons/fa";

const featuresThree = [
  {
    icon: <FaRobot className="text-blue-500 text-3xl" />,
    title: "AI-Driven UI Components",
    desc: "Modular building blocks powered by intelligent behavior and real-time learning."
  },
  {
    icon: <FaBrain className="text-pink-500 text-3xl" />,
    title: "Cognitive Automation",
    desc: "Leverage ML to reduce manual workflows and improve business logic."
  },
  {
    icon: <FaCogs className="text-purple-500 text-3xl" />,
    title: "Customizable Pipelines",
    desc: "Plug-and-play APIs with pre-trained models for text, vision, and speech."
  },
  {
    icon: <FaCloud className="text-cyan-500 text-3xl" />,
    title: "Cloud-Native Infrastructure",
    desc: "Built to scale with seamless deployments via OpenAI, LangChain, and more."
  }
];

export const FeatureGridAISaaS = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Glow Circle Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[180px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6"
        >
          Built for the Next Generation of AI SaaS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Empower your product with blazing-fast, intelligent, and scalable UI tools tailored for modern AI workflows.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresThree.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-gray-950 dark:from-black dark:via-gray-900 dark:to-black text-white relative overflow-hidden">
      {/* Glow Circle Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 opacity-20 blur-[180px] rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 mb-6"
        >
          Built for the Next Generation of AI SaaS
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Empower your product with blazing-fast, intelligent, and scalable UI tools tailored for modern AI workflows.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresThree.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
  </section>
}
/>
</>  
 )
}

export function FeaturesDemoFour(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaWallet,
  FaChartLine,
  FaFingerprint,
  FaLock
} from "react-icons/fa";

const featuresFour = [
  {
    icon: <FaWallet className="text-green-500 text-3xl" />,
    title: "Smart Wallet Integration",
    desc: "Seamless connection with digital wallets, payment gateways, and blockchain tech."
  },
  {
    icon: <FaChartLine className="text-blue-500 text-3xl" />,
    title: "Live Market Insights",
    desc: "Real-time data visualization and financial trends backed by secure APIs."
  },
  {
    icon: <FaFingerprint className="text-purple-500 text-3xl" />,
    title: "Biometric Security",
    desc: "Next-gen identity verification with biometric and AI-based risk scoring."
  },
  {
    icon: <FaLock className="text-yellow-500 text-3xl" />,
    title: "Bank-Grade Encryption",
    desc: "End-to-end encryption and compliance for enterprise-grade Fintech solutions."
  }
];

export const FeatureGridFintech = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mb-6"
        >
          Fintech UI Components That Inspire Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Build secure, scalable financial applications with ready-to-use, premium-grade UI blocks tailored for digital finance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFour.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-white via-gray-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-400 to-purple-500 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 mb-6"
        >
          Fintech UI Components That Inspire Trust
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Build secure, scalable financial applications with ready-to-use, premium-grade UI blocks tailored for digital finance.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFour.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
 </section>

}
/>
</>  
 )
}


export function FeaturesDemoFive(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaHome,
  FaMapMarkedAlt,
  FaDollarSign,
  FaHeadset
} from "react-icons/fa";

const featuresFive = [
  {
    icon: <FaHome className="text-orange-500 text-3xl" />,
    title: "Property Showcase",
    desc: "Highlight stunning properties with dynamic media, 3D views, and carousel sliders."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-600 text-3xl" />,
    title: "Interactive Maps",
    desc: "Built-in location maps, nearby amenities, and school zone overlays for smart searches."
  },
  {
    icon: <FaDollarSign className="text-yellow-500 text-3xl" />,
    title: "Mortgage Calculator",
    desc: "Instant calculations with down payment, interest rates, and amortization breakdowns."
  },
  {
    icon: <FaHeadset className="text-blue-500 text-3xl" />,
    title: "Agent Chat & Support",
    desc: "Live chat widgets and contact scheduling to close deals faster than ever."
  }
];

export const FeatureGridRealEstate = () => {
  return (
    <section className="w-full  min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400 via-yellow-400 to-pink-400 blur-[180px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 mb-6"
        >
          Real Estate Interfaces Built to Convert
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Showcase listings, simplify buying decisions, and empower agents with UI blocks built for today’s real estate platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFive.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
 <section className="w-full  min-h-screen py-20 px-6 bg-gradient-to-br from-orange-50 via-white to-blue-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Glow Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-orange-400 via-yellow-400 to-pink-400 blur-[180px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-yellow-500 to-pink-500 mb-6"
        >
          Real Estate Interfaces Built to Convert
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Showcase listings, simplify buying decisions, and empower agents with UI blocks built for today’s real estate platforms.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresFive.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
 </section>
}
/>
</>  
 )
}


export function FeaturesDemoSix(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaChalkboardTeacher,
  FaVideo,
  FaGraduationCap,
  FaChartLine
} from "react-icons/fa";

const featuresSix = [
  {
    icon: <FaChalkboardTeacher className="text-indigo-500 text-3xl" />,
    title: "Live Classes",
    desc: "Host real-time sessions with chat, polls, whiteboards, and screen sharing."
  },
  {
    icon: <FaVideo className="text-pink-500 text-3xl" />,
    title: "On-Demand Content",
    desc: "Upload lectures, tutorials, and modules accessible anytime, anywhere."
  },
  {
    icon: <FaGraduationCap className="text-yellow-500 text-3xl" />,
    title: "Certification System",
    desc: "Award trackable course certificates with student analytics and leaderboards."
  },
  {
    icon: <FaChartLine className="text-green-500 text-3xl" />,
    title: "Progress Insights",
    desc: "Track individual learning stats, engagement rates, and course completion."
  }
];

export const FeatureGridELearning = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 mb-6"
        >
          Transform Online Learning Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Engage students and instructors with powerful e-learning features — designed for schools, bootcamps, and knowledge marketplaces.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSix.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

`
}
SectionShow={
<section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-indigo-50 via-pink-50 to-yellow-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Background glow effect */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-pink-400 via-purple-400 to-yellow-400 blur-[160px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-pink-500 to-yellow-500 mb-6"
        >
          Transform Online Learning Experiences
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Engage students and instructors with powerful e-learning features — designed for schools, bootcamps, and knowledge marketplaces.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSix.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
</section>
}/>
</>  
 )
}

export function FeaturesDemoSeven(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaBullhorn,
  FaChartPie,
  FaSearchDollar,
  FaMailBulk
} from "react-icons/fa";

const featuresSeven = [
  {
    icon: <FaBullhorn className="text-pink-500 text-3xl" />,
    title: "Campaign Management",
    desc: "Launch and monitor ad campaigns across platforms with real-time insights."
  },
  {
    icon: <FaChartPie className="text-purple-500 text-3xl" />,
    title: "Analytics Dashboard",
    desc: "Visualize engagement, CTR, and conversions with actionable data breakdowns."
  },
  {
    icon: <FaSearchDollar className="text-indigo-500 text-3xl" />,
    title: "SEO & SEM Tools",
    desc: "Boost rankings and optimize paid ads with built-in keyword intelligence."
  },
  {
    icon: <FaMailBulk className="text-yellow-500 text-3xl" />,
    title: "Email Marketing Suite",
    desc: "Create, segment, and track high-converting email campaigns with ease."
  }
];

export const FeatureGridDigitalMarketing = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-indigo-500 to-yellow-400 blur-[150px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6"
        >
          Digital Tools That Drive Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our marketing toolkit gives agencies and freelancers everything they need to execute campaigns, analyze metrics, and grow ROI.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSeven.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`
}
SectionShow={
 <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Gradient Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-br from-pink-400 via-indigo-500 to-yellow-400 blur-[150px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6"
        >
          Digital Tools That Drive Results
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Our marketing toolkit gives agencies and freelancers everything they need to execute campaigns, analyze metrics, and grow ROI.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresSeven.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
  </section>
}
/>
</>  
 )
}


export function FeaturesDemoEight(){
 return(
<>
<FeaturesComponent
htmlCode={
`
`
}
reactCode={
`import React from "react";
import { motion } from "framer-motion";
import {
  FaTruckMoving,
  FaMapMarkedAlt,
  FaClock,
  FaWarehouse
} from "react-icons/fa";

const featuresEight = [
  {
    icon: <FaTruckMoving className="text-blue-500 text-3xl" />,
    title: "Fleet Management",
    desc: "Track and control your entire delivery fleet in real-time with precision logistics."
  },
  {
    icon: <FaMapMarkedAlt className="text-green-500 text-3xl" />,
    title: "Live Route Tracking",
    desc: "Monitor shipments across locations with GPS-integrated route visualizations."
  },
  {
    icon: <FaClock className="text-yellow-500 text-3xl" />,
    title: "ETA Optimization",
    desc: "Predict arrival times and reduce delays with AI-assisted traffic analytics."
  },
  {
    icon: <FaWarehouse className="text-indigo-500 text-3xl" />,
    title: "Warehouse Sync",
    desc: "Keep your warehouse in sync with smart stock-level triggers and automation."
  }
];

export const FeatureGridLogistics = () => {
  return (
    <section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Industrial Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500 blur-[140px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 mb-6"
        >
          Power Your Logistics with Precision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Optimize fleet, improve delivery timelines, and scale distribution seamlessly with our advanced logistics interface.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresEight.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
`
}
SectionShow={
<section className="w-full min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 via-green-50 to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black text-gray-900 dark:text-white relative overflow-hidden">
      {/* Industrial Glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-green-400 via-blue-500 to-indigo-500 blur-[140px] opacity-20 rounded-full -z-10"></div>

      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-green-600 to-indigo-600 mb-6"
        >
          Power Your Logistics with Precision
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12"
        >
          Optimize fleet, improve delivery timelines, and scale distribution seamlessly with our advanced logistics interface.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuresEight.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
</section>
}
/>
</>  
 )
}