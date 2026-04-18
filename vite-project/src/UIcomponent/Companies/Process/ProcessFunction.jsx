import { motion } from 'framer-motion';
import Ai from '../../../assets/bg/ai.gif';
import { FaCopy } from "react-icons/fa";
import { FaSearch, FaChalkboardTeacher, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';
import { useState } from 'react';
import { FaUserPlus, FaSlidersH, FaPlug, FaChartLine } from 'react-icons/fa';
import { FaKeyboard, FaBrain, FaBolt, FaRocket } from 'react-icons/fa';
import { FaCalendarCheck, FaUserMd, FaPrescriptionBottleAlt, FaClipboardCheck } from 'react-icons/fa';
import {  FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';
import {  FaLink, FaPiggyBank } from 'react-icons/fa';
import { FaLightbulb, FaPenNib, FaMagic, FaPaperPlane } from 'react-icons/fa';
import { FaGlobe, FaCalendarAlt, FaWallet, FaCocktail } from 'react-icons/fa';



const stepsEight = [
  {
    title: 'Explore',
    description: 'Discover exciting destinations and unforgettable events.',
    icon: <FaGlobe className="text-teal-500 text-3xl" />,
  },
  {
    title: 'Plan',
    description: 'We tailor your itinerary or event to match your dreams.',
    icon: <FaCalendarAlt className="text-sky-500 text-3xl" />,
  },
  {
    title: 'Book',
    description: 'Secure your trip or event package with ease and confidence.',
    icon: <FaWallet className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Enjoy',
    description: 'Live the moment — we take care of the rest behind the scenes.',
    icon: <FaCocktail className="text-pink-500 text-3xl" />,
  },
];
const stepsSeven = [
  {
    title: 'Ideate',
    description: 'We start with inspiration and a deep dive into your vision.',
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Design',
    description: 'Sketches to screens — we craft compelling visual stories.',
    icon: <FaPenNib className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Refine',
    description: 'Iterate with intention to make sure every detail shines.',
    icon: <FaMagic className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Your final product — pixel perfect and portfolio ready.',
    icon: <FaPaperPlane className="text-indigo-500 text-3xl" />,
  },
];
const stepsSix = [
  {
    title: 'Create Account',
    description: 'Sign up in minutes with secure identity verification.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Connect Bank',
    description: 'Link your bank accounts safely to monitor activity.',
    icon: <FaLink className="text-green-500 text-3xl" />,
  },
  {
    title: 'Track & Analyze',
    description: 'Visualize your finances with real-time dashboards.',
    icon: <FaChartLine className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Invest or Save',
    description: 'Automate your savings or start investing smartly.',
    icon: <FaPiggyBank className="text-indigo-500 text-3xl" />,
  },
];
const stepsFive = [
  {
    title: 'Discover',
    description: 'Browse thousands of products tailored to your style and needs.',
    icon: <FaSearch className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Add to Cart',
    description: 'Quickly save your favorites and explore bundle options.',
    icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Checkout',
    description: 'Fast and secure checkout with multiple payment options.',
    icon: <FaCreditCard className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Get your items fast with real-time tracking and notifications.',
    icon: <FaTruck className="text-green-500 text-3xl" />,
  },
];
const stepsFour = [
  {
    title: 'Book Appointment',
    description: 'Schedule visits easily with online booking and availability check.',
    icon: <FaCalendarCheck className="text-emerald-500 text-3xl" />,
  },
  {
    title: 'Consult Doctor',
    description: 'Connect with certified professionals through secure video or in-person sessions.',
    icon: <FaUserMd className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Receive Treatment',
    description: 'Access personalized care plans and prescribed medications with ease.',
    icon: <FaPrescriptionBottleAlt className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Follow-Up',
    description: 'Track progress and schedule follow-ups for complete recovery.',
    icon: <FaClipboardCheck className="text-teal-500 text-3xl" />,
  },
];
const stepsthree = [
  {
    title: 'Input',
    description: 'Provide your prompt, data, or request — no complexity required.',
    icon: <FaKeyboard className="text-cyan-500 text-3xl" />,
  },
  {
    title: 'Analyze',
    description: 'Our AI understands context, patterns, and structure in real-time.',
    icon: <FaBrain className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Generate',
    description: 'You get accurate, fast, human-like results in seconds.',
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Optimize',
    description: 'Continuously refine outputs based on usage and feedback.',
    icon: <FaRocket className="text-pink-500 text-3xl" />,
  },
];
const stepstwo = [
  {
    title: 'Sign Up',
    description: 'Create your account in seconds — no credit card needed.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Customize',
    description: 'Tailor the platform to fit your team and workflow.',
    icon: <FaSlidersH className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Integrate',
    description: 'Connect your favorite tools and automate tasks.',
    icon: <FaPlug className="text-green-500 text-3xl" />,
  },
  {
    title: 'Scale',
    description: 'Track growth with real-time dashboards and insights.',
    icon: <FaChartLine className="text-purple-500 text-3xl" />,
  },
];

const steps = [
  {
    title: 'Discover',
    description: 'Find courses tailored to your interests and career goals.',
    icon: <FaSearch className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Learn',
    description: 'Engage with expert-led lessons and immersive content.',
    icon: <FaChalkboardTeacher className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Practice',
    description: 'Apply knowledge through quizzes, projects, and challenges.',
    icon: <FaLaptopCode className="text-green-500 text-3xl" />,
  },
  {
    title: 'Achieve',
    description: 'Earn certificates and advance your career with confidence.',
    icon: <FaGraduationCap className="text-purple-500 text-3xl" />,
  },
];



function ProcessComponents ({htmlCode,reactCode,SectionShow}){
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

export function ProcessOne(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaChalkboardTeacher, FaLaptopCode, FaGraduationCap } from 'react-icons/fa';

const steps = [
  {
    title: 'Discover',
    description: 'Find courses tailored to your interests and career goals.',
    icon: <FaSearch className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Learn',
    description: 'Engage with expert-led lessons and immersive content.',
    icon: <FaChalkboardTeacher className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Practice',
    description: 'Apply knowledge through quizzes, projects, and challenges.',
    icon: <FaLaptopCode className="text-green-500 text-3xl" />,
  },
  {
    title: 'Achieve',
    description: 'Earn certificates and advance your career with confidence.',
    icon: <FaGraduationCap className="text-purple-500 text-3xl" />,
  },
];

const EdTechProcess = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-br min-h-screen from-indigo-50 to-white dark:from-indigo-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Learning Journey
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We believe in a step-by-step approach to mastering new skills — here’s how it works.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EdTechProcess;


`
}
SectionShow={
<>
 <section className="py-20 px-6 min-h-screen bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950 dark:to-gray-900">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Learning Journey
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We believe in a step-by-step approach to mastering new skills — here’s how it works.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-2xl p-6 shadow-md flex flex-col items-center text-center transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessTwo(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaSlidersH, FaPlug, FaChartLine } from 'react-icons/fa';

const stepstwo = [
  {
    title: 'Sign Up',
    description: 'Create your account in seconds — no credit card needed.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Customize',
    description: 'Tailor the platform to fit your team and workflow.',
    icon: <FaSlidersH className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Integrate',
    description: 'Connect your favorite tools and automate tasks.',
    icon: <FaPlug className="text-green-500 text-3xl" />,
  },
  {
    title: 'Scale',
    description: 'Track growth with real-time dashboards and insights.',
    icon: <FaChartLine className="text-purple-500 text-3xl" />,
  },
];

const SaaSProcess = () => {
  return (
    <section className="py-20 min-h-screen px-6 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our Platform Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We simplify your journey from startup to scale-up — in just four streamlined steps.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepstwo.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SaaSProcess;


`
}
SectionShow={
<>
<section className="py-20 min-h-screen px-6 bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our Platform Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          We simplify your journey from startup to scale-up — in just four streamlined steps.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepstwo.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessThree(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaKeyboard, FaBrain, FaBolt, FaRocket } from 'react-icons/fa';

const stepsthree = [
  {
    title: 'Input',
    description: 'Provide your prompt, data, or request — no complexity required.',
    icon: <FaKeyboard className="text-cyan-500 text-3xl" />,
  },
  {
    title: 'Analyze',
    description: 'Our AI understands context, patterns, and structure in real-time.',
    icon: <FaBrain className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Generate',
    description: 'You get accurate, fast, human-like results in seconds.',
    icon: <FaBolt className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Optimize',
    description: 'Continuously refine outputs based on usage and feedback.',
    icon: <FaRocket className="text-pink-500 text-3xl" />,
  },
];

const AIProcess = () => {
  return (
    <section className="py-20  min-h-screen px-6 bg-gradient-to-br from-gray-50 to-cyan-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our AI Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From your input to optimized output — here’s the intelligent process behind the magic.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsthree.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default AIProcess;


`
}
SectionShow={
<>
<section className="py-20  min-h-screen px-6 bg-gradient-to-br from-gray-50 to-cyan-100 dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How Our AI Works
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From your input to optimized output — here’s the intelligent process behind the magic.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsthree.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessFour(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarCheck, FaUserMd, FaPrescriptionBottleAlt, FaClipboardCheck } from 'react-icons/fa';

const stepsFour = [
  {
    title: 'Book Appointment',
    description: 'Schedule visits easily with online booking and availability check.',
    icon: <FaCalendarCheck className="text-emerald-500 text-3xl" />,
  },
  {
    title: 'Consult Doctor',
    description: 'Connect with certified professionals through secure video or in-person sessions.',
    icon: <FaUserMd className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Receive Treatment',
    description: 'Access personalized care plans and prescribed medications with ease.',
    icon: <FaPrescriptionBottleAlt className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Follow-Up',
    description: 'Track progress and schedule follow-ups for complete recovery.',
    icon: <FaClipboardCheck className="text-teal-500 text-3xl" />,
  },
];

const HealthcareProcess = () => {
  return (
    <section className="py-20 min-h-screen px-6 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We Care For You
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From booking to recovery — we streamline healthcare with compassion and tech.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFour.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default HealthcareProcess;


`
}
SectionShow={
<>
 <section className="py-20 min-h-screen px-6 bg-gradient-to-br from-emerald-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          How We Care For You
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From booking to recovery — we streamline healthcare with compassion and tech.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFour.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessFive(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaSearch, FaShoppingCart, FaCreditCard, FaTruck } from 'react-icons/fa';

const stepsFive = [
  {
    title: 'Discover',
    description: 'Browse thousands of products tailored to your style and needs.',
    icon: <FaSearch className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Add to Cart',
    description: 'Quickly save your favorites and explore bundle options.',
    icon: <FaShoppingCart className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Checkout',
    description: 'Fast and secure checkout with multiple payment options.',
    icon: <FaCreditCard className="text-indigo-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Get your items fast with real-time tracking and notifications.',
    icon: <FaTruck className="text-green-500 text-3xl" />,
  },
];

const EcommerceProcess = () => {
  return (
    <section className="py-20  min-h-screen px-6 bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shopping Made Simple
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From finding the perfect item to delivery at your doorstep — here’s how we work.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFive.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EcommerceProcess;


`
}
SectionShow={
<>
 <section className="py-20  min-h-screen px-6 bg-gradient-to-br from-yellow-50 to-pink-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Shopping Made Simple
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          From finding the perfect item to delivery at your doorstep — here’s how we work.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsFive.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessSix(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaUserPlus, FaLink, FaChartLine, FaPiggyBank } from 'react-icons/fa';

const stepsSix = [
  {
    title: 'Create Account',
    description: 'Sign up in minutes with secure identity verification.',
    icon: <FaUserPlus className="text-blue-500 text-3xl" />,
  },
  {
    title: 'Connect Bank',
    description: 'Link your bank accounts safely to monitor activity.',
    icon: <FaLink className="text-green-500 text-3xl" />,
  },
  {
    title: 'Track & Analyze',
    description: 'Visualize your finances with real-time dashboards.',
    icon: <FaChartLine className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Invest or Save',
    description: 'Automate your savings or start investing smartly.',
    icon: <FaPiggyBank className="text-indigo-500 text-3xl" />,
  },
];

const FinanceProcess = () => {
  return (
    <section className=" min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Financial Journey, Simplified
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A secure, simple process to take control of your money and future.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSix.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default FinanceProcess;


`
}
SectionShow={
<>
<section className=" min-h-screen py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Your Financial Journey, Simplified
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          A secure, simple process to take control of your money and future.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSix.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-xl flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessSeven(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`
import React from 'react';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPenNib, FaMagic, FaPaperPlane } from 'react-icons/fa';

const stepsSeven = [
  {
    title: 'Ideate',
    description: 'We start with inspiration and a deep dive into your vision.',
    icon: <FaLightbulb className="text-yellow-400 text-3xl" />,
  },
  {
    title: 'Design',
    description: 'Sketches to screens — we craft compelling visual stories.',
    icon: <FaPenNib className="text-pink-500 text-3xl" />,
  },
  {
    title: 'Refine',
    description: 'Iterate with intention to make sure every detail shines.',
    icon: <FaMagic className="text-purple-500 text-3xl" />,
  },
  {
    title: 'Deliver',
    description: 'Your final product — pixel perfect and portfolio ready.',
    icon: <FaPaperPlane className="text-indigo-500 text-3xl" />,
  },
];

const CreativeProcess = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-zinc-900 dark:to-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Creative Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          We blend strategy, artistry, and soul into every project — here's how we do it.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSeven.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CreativeProcess;

`
}
SectionShow={
<>
 <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-violet-100 to-pink-100 dark:from-zinc-900 dark:to-black">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Creative Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          We blend strategy, artistry, and soul into every project — here's how we do it.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsSeven.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center transition-all hover:scale-105"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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

export function ProcessEight(){
  return(
<>
<ProcessComponents
htmlCode={
String.raw
`
`
}
reactCode={
String.raw
`import React from 'react';
import { motion } from 'framer-motion';
import { FaGlobe, FaCalendarAlt, FaWallet, FaCocktail } from 'react-icons/fa';

const stepsEight = [
  {
    title: 'Explore',
    description: 'Discover exciting destinations and unforgettable events.',
    icon: <FaGlobe className="text-teal-500 text-3xl" />,
  },
  {
    title: 'Plan',
    description: 'We tailor your itinerary or event to match your dreams.',
    icon: <FaCalendarAlt className="text-sky-500 text-3xl" />,
  },
  {
    title: 'Book',
    description: 'Secure your trip or event package with ease and confidence.',
    icon: <FaWallet className="text-yellow-500 text-3xl" />,
  },
  {
    title: 'Enjoy',
    description: 'Live the moment — we take care of the rest behind the scenes.',
    icon: <FaCocktail className="text-pink-500 text-3xl" />,
  },
];

const TravelEventsProcess = () => {
  return (
    <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-teal-100 to-sky-100 dark:from-slate-900 dark:to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Journey, Our Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Whether it’s a dream vacation or an iconic event, we make it effortless from start to celebration.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsEight.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TravelEventsProcess;


`
}
SectionShow={
<>
   <section className="min-h-screen py-20 px-6 bg-gradient-to-br from-teal-100 to-sky-100 dark:from-slate-900 dark:to-black">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Your Journey, Our Process
        </motion.h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
          Whether it’s a dream vacation or an iconic event, we make it effortless from start to celebration.
        </p>
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-4">
        {stepsEight.map((step, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-zinc-800 rounded-xl p-6 shadow-lg flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.2 }}
          >
            <div className="mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{step.title}</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{step.description}</p>
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








