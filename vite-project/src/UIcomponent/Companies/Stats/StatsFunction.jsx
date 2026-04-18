import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { useState } from 'react';
import {  FaRocket, FaChartLine, FaCloud } from 'react-icons/fa';
import { FaPalette, FaUserFriends, FaPenNib } from 'react-icons/fa';
import { FaGraduationCap, FaBook, FaCertificate, FaUserGraduate } from 'react-icons/fa';
import { FaShieldAlt, FaWallet, FaUsers, FaChartPie } from 'react-icons/fa';
import bgImage from '../../../assets/bg/snow2.jpg'; // Replace with your own image path
import { FaBrain, FaRobot, FaServer, FaCodeBranch } from 'react-icons/fa';
import { FaHandshake, FaBuilding, FaUserTie, FaChartBar } from 'react-icons/fa';
import StatsImage from '../../../assets/bg/snow1.jpg'; // Replace with your real image
import { FaUserMd, FaClinicMedical, FaHeartbeat, FaAward } from 'react-icons/fa';
import { FaFire, FaHandsHelping, FaSmileBeam, FaFlagCheckered } from 'react-icons/fa';
import { FaCopy } from "react-icons/fa6";


 const statsone = [
    { label: 'Users', value: '25K+', icon: <FaUsers /> },
    { label: 'Deployments', value: '9K+', icon: <FaRocket /> },
    { label: 'Uptime', value: '99.99%', icon: <FaCloud /> },
    { label: 'Growth', value: '400%', icon: <FaChartLine /> },
  ];
 const statstwo = [
    { label: 'Design Projects', value: '450+', icon: <FaPalette /> },
    { label: 'Clients', value: '120+', icon: <FaUserFriends /> },
    { label: 'Awards Won', value: '17', icon: <FaAward /> },
    { label: 'Creative Experts', value: '32', icon: <FaPenNib /> },
  ];
 const statsThree = [
    { icon: <FaBook />, label: 'Courses Available', value: '320+' },
    { icon: <FaUserGraduate />, label: 'Students Enrolled', value: '25K+' },
    { icon: <FaGraduationCap />, label: 'Course Completions', value: '18K+' },
    { icon: <FaCertificate />, label: 'Certificates Issued', value: '12K+' },
  ];
 const statsFour = [
    { icon: <FaShieldAlt />, label: 'Secure Transactions', value: '8.5M+' },
    { icon: <FaWallet />, label: 'Digital Wallets', value: '2.4M+' },
    { icon: <FaUsers />, label: 'Active Users', value: '1.8M+' },
    { icon: <FaChartPie />, label: 'Investment Accounts', value: '600K+' },
  ];
 const statsFive = [
    { icon: <FaBrain />, label: 'AI Models Trained', value: '1.2M' },
    { icon: <FaRobot />, label: 'Automations Deployed', value: '85K+' },
    { icon: <FaServer />, label: 'Data Processed Daily', value: '12TB' },
    { icon: <FaCodeBranch />, label: 'Integrations', value: '300+' },
  ];
 const statsSix = [
    { icon: <FaBuilding />, label: 'Clients Worldwide', value: '80+' },
    { icon: <FaHandshake />, label: 'Years of Partnership', value: '10+' },
    { icon: <FaChartBar />, label: 'Growth Rate', value: '215%' },
    { icon: <FaUserTie />, label: 'Consultants', value: '120+' },
  ];
 const statsSeven = [
    {
      label: 'Doctors Onboarded',
      value: '250+',
      icon: <FaUserMd />,
    },
    {
      label: 'Clinics Served',
      value: '120+',
      icon: <FaClinicMedical />,
    },
    {
      label: 'Lives Improved',
      value: '10K+',
      icon: <FaHeartbeat />,
    },
    {
      label: 'Care Awards',
      value: '15+',
      icon: <FaAward />,
    },
  ];
   const statsEight = [
      {
        label: 'Projects Launched',
        value: '150+',
        icon: <FaFire />,
      },
      {
        label: 'Partnerships Formed',
        value: '75+',
        icon: <FaHandsHelping />,
      },
      {
        label: 'Happy Clients',
        value: '1.2K',
        icon: <FaSmileBeam />,
      },
      {
        label: 'Global Reach',
        value: '42 Countries',
        icon: <FaFlagCheckered />,
      },
    ];
  
  

function StatsComponents ({htmlCode,reactCode,SectionShow}){
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


export function StatsDemoOne(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUsers, FaRocket, FaChartLine, FaCloud } from 'react-icons/fa';

export const StatsSaaS = () => {
  const statsone = [
    { label: 'Users', value: '25K+', icon: <FaUsers /> },
    { label: 'Deployments', value: '9K+', icon: <FaRocket /> },
    { label: 'Uptime', value: '99.99%', icon: <FaCloud /> },
    { label: 'Growth', value: '400%', icon: <FaChartLine /> },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Trusted by thousands
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track the performance of your SaaS in real-time.
        </p>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsone.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
<>
<section className="min-h-screen py-20 px-6 bg-gradient-to-br from-white to-gray-100 dark:from-gray-950 dark:to-black text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-500">
          Trusted by thousands
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          Track the performance of your SaaS in real-time.
        </p>
      </div>

      {/* Stat Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsone.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold">{stat.value}</h3>
            <p className="text-gray-500 dark:text-gray-400">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoTwo(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaPalette, FaUserFriends, FaAward, FaPenNib } from 'react-icons/fa';

export const StatsCreativeAgency = () => {
  const statstwo = [
    { label: 'Design Projects', value: '450+', icon: <FaPalette /> },
    { label: 'Clients', value: '120+', icon: <FaUserFriends /> },
    { label: 'Awards Won', value: '17', icon: <FaAward /> },
    { label: 'Creative Experts', value: '32', icon: <FaPenNib /> },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-tr from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white overflow-hidden">
      {/* Glass Morphism Card Container */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          Numbers That Tell Our Story
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-14">
          From branding to digital experiences — our creative agency transforms ideas into impactful visual solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
          {statstwo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3 text-pink-500 dark:text-pink-400">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
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
<>
<section className="min-h-screen relative py-24 px-6 bg-gradient-to-tr from-pink-100 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white overflow-hidden">
      {/* Glass Morphism Card Container */}
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"
        >
          Numbers That Tell Our Story
        </motion.h2>
        <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-400 mb-14">
          From branding to digital experiences — our creative agency transforms ideas into impactful visual solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 px-4">
          {statstwo.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/20 dark:bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="text-4xl mb-3 text-pink-500 dark:text-pink-400">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoThree(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaBook, FaCertificate, FaUserGraduate } from 'react-icons/fa';

export const StatsEdTech = () => {
  const statsThree = [
    { icon: <FaBook />, label: 'Courses Available', value: '320+' },
    { icon: <FaUserGraduate />, label: 'Students Enrolled', value: '25K+' },
    { icon: <FaGraduationCap />, label: 'Course Completions', value: '18K+' },
    { icon: <FaCertificate />, label: 'Certificates Issued', value: '12K+' },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
        >
          Empowering Education with Metrics
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Track learner progress, achievements, and educational outcomes in real-time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsThree.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3 text-indigo-500 dark:text-indigo-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
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
<>
  <section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-indigo-50 via-white to-blue-100 dark:from-gray-900 dark:via-gray-950 dark:to-black text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-blue-500 to-purple-500"
        >
          Empowering Education with Metrics
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Track learner progress, achievements, and educational outcomes in real-time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsThree.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              className="bg-white dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition"
            >
              <div className="text-4xl mb-3 text-indigo-500 dark:text-indigo-300">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold">{item.value}</h3>
              <p className="text-gray-600 dark:text-gray-300 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoFour(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaShieldAlt, FaWallet, FaUsers, FaChartPie } from 'react-icons/fa';
import bgImage from '../../assets/bg/fintech-bg.jpg'; // Replace with your own image path

export const StatsFintechBackground = () => {
  const statsFour = [
    { icon: <FaShieldAlt />, label: 'Secure Transactions', value: '8.5M+' },
    { icon: <FaWallet />, label: 'Digital Wallets', value: '2.4M+' },
    { icon: <FaUsers />, label: 'Active Users', value: '1.8M+' },
    { icon: <FaChartPie />, label: 'Investment Accounts', value: '600K+' },
  ];

  return (
    <section className="min-h-screen relative w-full py-28 px-6 bg-black text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: \`url(\${bgImage})\` }}
      ></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 opacity-70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
        >
          Secure Finance That Scales
        </motion.h2>
        <p className="text-gray-300 mt-4 mb-16 max-w-2xl mx-auto">
          Our fintech ecosystem handles millions of transactions daily while protecting your assets with cutting-edge security.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFour.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
            >
              <div className="text-4xl text-green-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 mt-1">{item.label}</p>
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
<>
 <section className="min-h-screen relative w-full py-28 px-6 bg-black text-white overflow-hidden">
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10"
      ></div>

      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-gray-900 to-gray-800 opacity-70 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-500"
        >
          Secure Finance That Scales
        </motion.h2>
        <p className="text-gray-300 mt-4 mb-16 max-w-2xl mx-auto">
          Our fintech ecosystem handles millions of transactions daily while protecting your assets with cutting-edge security.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFour.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-xl"
            >
              <div className="text-4xl text-green-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-bold text-white">{item.value}</h3>
              <p className="text-gray-400 mt-1">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoFive(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaServer, FaCodeBranch } from 'react-icons/fa';

export const StatsAITech = () => {
  const statsFive = [
    { icon: <FaBrain />, label: 'AI Models Trained', value: '1.2M' },
    { icon: <FaRobot />, label: 'Automations Deployed', value: '85K+' },
    { icon: <FaServer />, label: 'Data Processed Daily', value: '12TB' },
    { icon: <FaCodeBranch />, label: 'Integrations', value: '300+' },
  ];

  return (
    <section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Pulse Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00f2ff22,_transparent)] animate-pulse opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          Supercharged Tech, Quantified
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Our infrastructure scales neural systems, automates workflows, and processes data at mind-blowing speeds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFive.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="text-4xl text-cyan-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-extrabold text-white">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
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
<>
<section className="min-h-screen relative py-24 px-6 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-white overflow-hidden">
      {/* Animated Pulse Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#00f2ff22,_transparent)] animate-pulse opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500"
        >
          Supercharged Tech, Quantified
        </motion.h2>
        <p className="text-gray-400 max-w-xl mx-auto mt-4 mb-16">
          Our infrastructure scales neural systems, automates workflows, and processes data at mind-blowing speeds.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {statsFive.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 shadow-lg hover:shadow-cyan-500/10 transition-all"
            >
              <div className="text-4xl text-cyan-400 mb-3">{item.icon}</div>
              <h3 className="text-3xl font-extrabold text-white">{item.value}</h3>
              <p className="text-gray-400">{item.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoSix(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaHandshake, FaBuilding, FaUserTie, FaChartBar } from 'react-icons/fa';
import StatsImage from '../../assets/corporate-stats.jpg'; // Replace with your real image

export const StatsCorporateSplit = () => {
  const statsSix = [
    { icon: <FaBuilding />, label: 'Clients Worldwide', value: '80+' },
    { icon: <FaHandshake />, label: 'Years of Partnership', value: '10+' },
    { icon: <FaChartBar />, label: 'Growth Rate', value: '215%' },
    { icon: <FaUserTie />, label: 'Consultants', value: '120+' },
  ];

  return (
    <section className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <img
            src={StatsImage}
            alt="Corporate Stats"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            We Deliver Results That Matter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Our team of experts empowers businesses to scale with long-term strategy, innovation, and execution.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {statsSix.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

`
}
SectionShow={
<>
 <section className="min-h-screen bg-white dark:bg-gray-950 py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2"
        >
          <img
            src={StatsImage}
            alt="Corporate Stats"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </motion.div>

        {/* Right Stats */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-6">
            We Deliver Results That Matter
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg">
            Our team of experts empowers businesses to scale with long-term strategy, innovation, and execution.
          </p>

          <div className="grid grid-cols-2 gap-6">
            {statsSix.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="flex items-center gap-4"
              >
                <div className="text-blue-600 text-3xl">{item.icon}</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{item.value}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">{item.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoSeven(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaClinicMedical, FaHeartbeat, FaAward } from 'react-icons/fa';

export const StatsMedical = () => {
  const statsSeven = [
    {
      label: 'Doctors Onboarded',
      value: '250+',
      icon: <FaUserMd />,
    },
    {
      label: 'Clinics Served',
      value: '120+',
      icon: <FaClinicMedical />,
    },
    {
      label: 'Lives Improved',
      value: '10K+',
      icon: <FaHeartbeat />,
    },
    {
      label: 'Care Awards',
      value: '15+',
      icon: <FaAward />,
    },
  ];

  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-tr from-white to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Trusted by thousands of healthcare professionals and patients across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsSeven.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
<>
  <section className="min-h-screen py-20 px-6 bg-gradient-to-tr from-white to-blue-100 dark:from-gray-900 dark:to-gray-950 text-gray-800 dark:text-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-blue-700 dark:text-blue-300 mb-4">
          Your Health, Our Priority
        </h2>
        <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Trusted by thousands of healthcare professionals and patients across the country.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {statsSeven.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white dark:bg-gray-900 border border-blue-200 dark:border-white/10 rounded-xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-xl transition-all"
          >
            <div className="text-3xl mb-3 text-blue-500 dark:text-blue-400">{stat.icon}</div>
            <h3 className="text-3xl font-extrabold text-blue-700 dark:text-blue-300">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 mt-1 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
</>
}
/>
</>
)
}

export function StatsDemoEight(){
  return(
<>
<StatsComponents
htmlCode={
String.raw
`
`
}

reactCodeCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaFire, FaHandsHelping, FaSmileBeam, FaFlagCheckered } from 'react-icons/fa';

export const StatsStartup = () => {
  const statsEight = [
    {
      label: 'Projects Launched',
      value: '150+',
      icon: <FaFire />,
    },
    {
      label: 'Partnerships Formed',
      value: '75+',
      icon: <FaHandsHelping />,
    },
    {
      label: 'Happy Clients',
      value: '1.2K',
      icon: <FaSmileBeam />,
    },
    {
      label: 'Global Reach',
      value: '42 Countries',
      icon: <FaFlagCheckered />,
    },
  ];

  return (
    <section className="min-h-screen relative py-20 px-6 bg-gradient-to-tr from-purple-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Light burst background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Bold Numbers Back Our Mission
        </h2>
        <p className="text-gray-400 text-lg">
          Our startup accelerates fast and scales globally with measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {statsEight.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition"
          >
            <div className="text-4xl text-pink-400 mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-300 mt-2 text-sm uppercase tracking-wide font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

`
}
SectionShow={
<>
 <section className="min-h-screen relative py-20 px-6 bg-gradient-to-tr from-purple-900 via-black to-gray-900 text-white overflow-hidden">
      {/* Light burst background */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2),_transparent)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-extrabold text-white mb-4">
          Bold Numbers Back Our Mission
        </h2>
        <p className="text-gray-400 text-lg">
          Our startup accelerates fast and scales globally with measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto">
        {statsEight.map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 text-center hover:scale-105 transition"
          >
            <div className="text-4xl text-pink-400 mb-3">{stat.icon}</div>
            <h3 className="text-4xl font-bold">{stat.value}</h3>
            <p className="text-gray-300 mt-2 text-sm uppercase tracking-wide font-medium">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
</>
}
/>
</>
)
}








