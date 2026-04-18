import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { useState } from 'react';

import { TfiMicrosoftAlt } from "react-icons/tfi";
import {
  SiOpenai,
  SiTensorflow,
  SiPython,
  SiAmazon,
  SiGooglecloud,
} from 'react-icons/si'

const aiLogos = [
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiPython, name: 'Python' },
  { icon: SiAmazon, name: 'AWS' },
  { icon: TfiMicrosoftAlt, name: 'Azure' },
  { icon: SiGooglecloud, name: 'Google Cloud' },
]

import {
  SiAirbnb,
  SiSpotify,
  SiUber,
  SiZoom,
  SiStripe,
  SiPinterest,
} from 'react-icons/si'

const startupLogos = [
  { icon: SiAirbnb, name: 'Airbnb' },
  { icon: SiSpotify, name: 'Spotify' },
  { icon: SiUber, name: 'Uber' },
  { icon: SiZoom, name: 'Zoom' },
  { icon: SiStripe, name: 'Stripe' },
  { icon: SiPinterest, name: 'Pinterest' },
]

import {
  SiGoogle,
  SiSlack,
  SiNotion,
  SiDropbox,
  SiZendesk,
} from 'react-icons/si'

const logos = [
  { icon: SiGoogle, name: 'Google' },
  { icon: TfiMicrosoftAlt, name: 'Microsoft' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
  { icon: SiDropbox, name: 'Dropbox' },
  { icon: SiZendesk, name: 'Zendesk' },
]

import { BiLogoVisualStudio } from "react-icons/bi";
import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'

const devToolLogos = [
  { icon: SiGithub, name: 'GitHub' },
  { icon: BiLogoVisualStudio, name: 'VS Code' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiVercel, name: 'Vercel' },
]

import {
  SiDribbble,
  SiBehance,
  SiFigma,
  SiAdobe,
  SiSketch,
  SiCanva,
} from 'react-icons/si'

const portfolioLogos = [
  { icon: SiDribbble, name: 'Dribbble' },
  { icon: SiBehance, name: 'Behance' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiAdobe, name: 'Adobe' },
  { icon: SiSketch, name: 'Sketch' },
  { icon: SiCanva, name: 'Canva' },
]

import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiChase,
  SiGoldmansachs,
} from 'react-icons/si'

const financeLogos = [
  { icon: SiVisa, name: 'Visa' },
  { icon: SiMastercard, name: 'Mastercard' },
  { icon: SiAmericanexpress, name: 'Amex' },
  { icon: SiPaypal, name: 'PayPal' },
  { icon: SiChase, name: 'Chase' },
  { icon: SiGoldmansachs, name: 'Goldman Sachs' },
]

import {
  SiAdguard,
  SiHubspot,
  SiMailchimp,
  SiBuffer,
  SiSemrush,
  SiSurveymonkey,
} from 'react-icons/si'

const marketingLogos = [
  { icon: SiAdguard, name: 'Adguard' },
  { icon: SiHubspot, name: 'Hubspot' },
  { icon: SiMailchimp, name: 'Mailchimp' },
  { icon: SiBuffer, name: 'Buffer' },
  { icon: SiSemrush, name: 'SEMrush' },
  { icon: SiSurveymonkey, name: 'SurveyMonkey' },
]

import {
  // SiMayoClinic,
  // SiCvshealth,
  // SiModerna,
  // SiPfizer,
  // SiAbbvie,
  // SiJohnsonandjohnson,
} from 'react-icons/si'

const medicalLogos = [
  // { icon: SiMayoClinic, name: 'Mayo Clinic' },
  // { icon: SiCvshealth, name: 'CVS Health' },
  // { icon: SiModerna, name: 'Moderna' },
  // { icon: SiPfizer, name: 'Pfizer' },
  // { icon: SiAbbvie, name: 'Abbvie' },
  // { icon: SiJohnsonandjohnson, name: 'J&J' },
]

function LogoColudComponents ({htmlCode,reactCode,SectionShow}){
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


export function LogoColudOne(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { TfiMicrosoftAlt } from "react-icons/tfi";

import {
  SiOpenai,
  SiTensorflow,
  SiPython,
  SiAmazon,
  SiGooglecloud,
} from 'react-icons/si'

const aiLogos = [
  { icon: SiOpenai, name: 'OpenAI' },
  { icon: SiTensorflow, name: 'TensorFlow' },
  { icon: SiPython, name: 'Python' },
  { icon: SiAmazonaws, name: 'AWS' },
  { icon: TfiMicrosoftAlt, name: 'Azure' },
  { icon: SiGooglecloud, name: 'Google Cloud' },
]

export default function AiInnovationLogoCloud() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-black dark:to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-12">
          Built on AI & Innovation
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {aiLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all backdrop-blur-lg"
                >
                  <Icon className="text-4xl text-cyan-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
  <section className="bg-gradient-to-br min-h-screen from-[#0f0c29] via-[#302b63] to-[#24243e] dark:from-black dark:to-gray-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-white mb-12">
          Built on AI & Innovation
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {aiLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 bg-white/10 dark:bg-white/5 rounded-xl border border-white/20 shadow-lg hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition-all backdrop-blur-lg"
                >
                  <Icon className="text-4xl text-cyan-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
} 

/>
</>
  )
}

export function LogoColudTwo(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiAirbnb,
  SiSpotify,
  SiUber,
  SiZoom,
  SiStripe,
  SiPinterest,
} from 'react-icons/si'

const startupLogos = [
  { icon: SiAirbnb, name: 'Airbnb' },
  { icon: SiSpotify, name: 'Spotify' },
  { icon: SiUber, name: 'Uber' },
  { icon: SiZoom, name: 'Zoom' },
  { icon: SiStripe, name: 'Stripe' },
  { icon: SiPinterest, name: 'Pinterest' },
]

export default function StartupLogoCloud() {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Backed by innovative startups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {startupLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ rotate: 3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl"
                >
                  <Icon className="text-4xl text-gray-700 dark:text-gray-300" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
 <section className="bg-white dark:bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Backed by innovative startups
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {startupLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ rotate: 3, scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="p-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md dark:shadow-xl"
                >
                  <Icon className="text-4xl text-gray-700 dark:text-gray-300" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
} 

/>
</>
  )
}

export function LogoColudThree(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiGoogle,
  SiSlack,
  SiNotion,
  SiDropbox,
  SiZendesk,
} from 'react-icons/si'

import { TfiMicrosoftAlt } from "react-icons/tfi";

const logos = [
  { icon: SiGoogle, name: 'Google' },
  { icon: TfiMicrosoftAlt, name: 'Microsoft' },
  { icon: SiSlack, name: 'Slack' },
  { icon: SiNotion, name: 'Notion' },
  { icon: SiDropbox, name: 'Dropbox' },
  { icon: SiZendesk, name: 'Zendesk' },
]

export default function SaaSLogoCloud() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Trusted by top SaaS companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-4xl text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
 <section className="relative bg-gradient-to-br from-indigo-50 via-white to-indigo-100 dark:from-[#0f172a] dark:via-[#1e293b] dark:to-[#0f172a] py-16 min-h-screen ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-10">
          Trusted by top SaaS companies
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {logos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-4xl text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300" />
              </motion.div>
            )
          })}
        </div>
      </div>
 </section>
} 

/>
</>
  )
}

export function LogoColudFour(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import { BiLogoVisualStudio } from "react-icons/bi";

import {
  SiGithub,
  SiReact,
  SiNodedotjs,
  SiTailwindcss,
  SiVercel,
} from 'react-icons/si'

const devToolLogos = [
  { icon: SiGithub, name: 'GitHub' },
  { icon: BiLogoVisualStudio, name: 'VS Code' },
  { icon: SiReact, name: 'React' },
  { icon: SiNodedotjs, name: 'Node.js' },
  { icon: SiTailwindcss, name: 'Tailwind CSS' },
  { icon: SiVercel, name: 'Vercel' },
]

export default function TechToolsLogoCloud() {
  return (
    <section className="bg-gray-50 min-h-screen w-full dark:bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 font-mono">
          Powered by Developer Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {devToolLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                >
                  <Icon className="text-4xl text-gray-900 dark:text-cyan-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
 <section className="bg-gray-50 min-h-screen w-full dark:bg-[#0a0a0a] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12 font-mono">
          Powered by Developer Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {devToolLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-lg bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-700 shadow-md hover:shadow-[0_0_15px_rgba(0,255,255,0.2)] transition-all"
                >
                  <Icon className="text-4xl text-gray-900 dark:text-cyan-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
 </section>
} 

/>
</>
  )
}

export function LogoColudFive(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiDribbble,
  SiBehance,
  SiFigma,
  SiAdobe,
  SiSketch,
  SiCanva,
} from 'react-icons/si'

const portfolioLogos = [
  { icon: SiDribbble, name: 'Dribbble' },
  { icon: SiBehance, name: 'Behance' },
  { icon: SiFigma, name: 'Figma' },
  { icon: SiAdobe, name: 'Adobe' },
  { icon: SiSketch, name: 'Sketch' },
  { icon: SiCanva, name: 'Canva' },
]

export default function CreativePortfolioLogoCloud() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Featured In Creative Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {portfolioLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
                  className="p-4 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all"
                >
                  <Icon className="text-4xl text-pink-500 dark:text-pink-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
  <section className="bg-gradient-to-br min-h-screen from-pink-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Featured In Creative Platforms
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {portfolioLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ y: -5, scale: 1.05, rotate: 1 }}
                  className="p-4 rounded-2xl bg-white/30 dark:bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all"
                >
                  <Icon className="text-4xl text-pink-500 dark:text-pink-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
  </section>
}

/>
</>
  )
}

export function LogoColudSix(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiVisa,
  SiMastercard,
  SiAmericanexpress,
  SiPaypal,
  SiChase,
  SiGoldmansachs,
} from 'react-icons/si'

const financeLogos = [
  { icon: SiVisa, name: 'Visa' },
  { icon: SiMastercard, name: 'Mastercard' },
  { icon: SiAmericanexpress, name: 'Amex' },
  { icon: SiPaypal, name: 'PayPal' },
  { icon: SiChase, name: 'Chase' },
  { icon: SiGoldmansachs, name: 'Goldman Sachs' },
]

export default function FinanceLogoCloud() {
  return (
    <section className="bg-gradient-to-br min-h-screen from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Trusted by Financial Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {financeLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md"
                >
                  <Icon className="text-4xl text-blue-800 dark:text-blue-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
 <section className="bg-gradient-to-br min-h-screen from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-12">
          Trusted by Financial Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {financeLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex justify-center items-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600 shadow-md"
                >
                  <Icon className="text-4xl text-blue-800 dark:text-blue-300 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
 </section>
} 

/>
</>
  )
}

export function LogoColudSeven(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiAdguard,
  SiHubspot,
  SiMailchimp,
  SiBuffer,
  SiSemrush,
  SiSurveymonkey,
} from 'react-icons/si'

const marketingLogos = [
  { icon: SiAdguard, name: 'Adguard' },
  { icon: SiHubspot, name: 'Hubspot' },
  { icon: SiMailchimp, name: 'Mailchimp' },
  { icon: SiBuffer, name: 'Buffer' },
  { icon: SiSemrush, name: 'SEMrush' },
  { icon: SiSurveymonkey, name: 'SurveyMonkey' },
]

export default function DigitalMarketingLogoCloud() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#fdfbfb] to-[#ebedee] dark:from-[#111827] dark:to-[#1f2937] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Powered by Creative Marketing Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {marketingLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                >
                  <Icon className="text-4xl text-fuchsia-600 dark:text-fuchsia-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
<section className="relative bg-gradient-to-br min-h-screen from-[#fdfbfb] to-[#ebedee] dark:from-[#111827] dark:to-[#1f2937] py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-extrabold text-gray-800 dark:text-white mb-12">
          Powered by Creative Marketing Tools
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {marketingLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="p-4 rounded-xl bg-white/20 dark:bg-white/5 backdrop-blur-lg border border-gray-200 dark:border-gray-700 shadow-xl transition-all hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
                >
                  <Icon className="text-4xl text-fuchsia-600 dark:text-fuchsia-400 transition-colors" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
</section>
} 

/>
</>
  )
}

export function LogoColudEight(){
  return(
<>
<LogoColudComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import { motion } from 'framer-motion'
import {
  SiMayoClinic,
  SiCvshealth,
  SiModerna,
  SiPfizer,
  SiAbbvie,
  SiJohnsonandjohnson,
} from 'react-icons/si'

const medicalLogos = [
  { icon: SiMayoClinic, name: 'Mayo Clinic' },
  { icon: SiCvshealth, name: 'CVS Health' },
  { icon: SiModerna, name: 'Moderna' },
  { icon: SiPfizer, name: 'Pfizer' },
  { icon: SiAbbvie, name: 'Abbvie' },
  { icon: SiJohnsonandjohnson, name: 'J&J' },
]

export default function MedicalLogoCloud() {
  return (
    <section className="bg-blue-50 dark:bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12">
          Trusted by Healthcare Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {medicalLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm dark:shadow-md"
                >
                  <Icon className="text-4xl text-blue-600 dark:text-blue-300 transition-all" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

`
}
SectionShow={
 <section className="bg-blue-50 dark:bg-slate-900 py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-blue-900 dark:text-white mb-12">
          Trusted by Healthcare Leaders
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-10">
          {medicalLogos.map((logo, idx) => {
            const Icon = logo.icon
            return (
              <motion.div
                key={idx}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="p-4 bg-white dark:bg-slate-800 rounded-xl border border-blue-100 dark:border-slate-700 shadow-sm dark:shadow-md"
                >
                  <Icon className="text-4xl text-blue-600 dark:text-blue-300 transition-all" />
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
 </section>
} 

/>


</>
  )
}