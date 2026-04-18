import React from 'react'
import Ai from '../assets/bg/ai.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaStar,FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFramer } from 'react-icons/si';
import AboutStartup from '../UIcomponent/Companies/About/AboutEight';
import { RiArrowRightSLine } from "react-icons/ri";
import { FeatureGrid } from '../Component/SaktrixHome/FeaturesGrid';
import { ComponentGallery } from '../Component/SaktrixHome/GaleryPriview.jsx';
import { HowItWorks } from '../Component/SaktrixHome/HowItsWorks';
import { StudentPricing } from '../Component/SaktrixHome/PricingStudent';
import { DemoPricing } from '../Component/SaktrixHome/PricingCompany';
import { SaktrixPricing } from '../Component/SaktrixHome/SaktrixUIpricing';
import { FreeForever } from '../Component/SaktrixHome/FreePricing';
import { FAQSection } from '../Component/SaktrixHome/FAQhome';
import ROICalculator from '../Component/SaktrixHome/ROIcalculator';
import { TestimonialsMarquee } from '../Component/SaktrixHome/Marque';
import { LiveAIDemo } from '../Component/SaktrixHome/LiveAIDemo';

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Smooth animation, only once
  }, []);


  return (
    <>
    
<section className="min-h-screen w-full px-6 py-20 bg-slate-950 text-white flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700 neural-grid">

{/* Main Neural Glows */}
<div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-cyan-500/20 rounded-full blur-[120px] animate-pulse-slow" />
<div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] animate-pulse-slow delay-700" />
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[150px] animate-spin-slow" />

{/* Header Badge */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  className="relative z-10 mb-8"
>
  <div className="px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center gap-2 group cursor-pointer hover:border-cyan-500/50 transition-colors">
    <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
    <span className="text-xs font-medium tracking-wider uppercase text-cyan-400">Next-Gen UI for AI Era</span>
    <RiArrowRightSLine className="group-hover:translate-x-1 transition-transform" />
  </div>
</motion.div>

{/* Main Title */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2 }}
  className="relative z-10 text-center max-w-5xl"
>
  <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
    Build <span className="saktrix-aurora-text">Neural</span> <br />
    Interfaces <span className="text-slate-500">Faster</span>
  </h1>
</motion.div>

{/* Subheading */}
<motion.p
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.4 }}
  className="relative z-10 text-xl text-slate-400 text-center max-w-2xl mb-12 leading-relaxed"
>
  Saktrix UI is a premium component ecosystem crafted for the AI era. 
  Beautifully engineered with <span className="text-white font-medium">React</span>, 
  <span className="text-white font-medium"> Tailwind</span>, and 
  <span className="text-white font-medium"> Framer Motion</span>.
</motion.p>

{/* Actions */}
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.6 }}
  className="relative z-10 flex flex-col sm:flex-row gap-6 items-center"
>
  <button 
    onClick={() => navigate('/components')}
    className="group relative px-8 py-4 bg-white text-black font-bold rounded-xl overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
  >
    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity" />
    <span className="relative z-10 group-hover:text-white transition-colors">Get Started Free</span>
  </button>
  
  <a
    href="https://github.com"
    target="_blank"
    className="px-8 py-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur-md text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-3"
  >
    <FaGithub className="text-xl" />
    <span>Star on GitHub</span>
    <div className="flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/10 text-[10px] font-bold">
      <FaStar className="text-yellow-500" /> 1.2k
    </div>
  </a>
</motion.div>

{/* Scroll Indicator */}
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 1.5, duration: 1 }}
  className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
>
  <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-slate-500 to-transparent" />
  <span className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-bold">Scroll to Explore</span>
</motion.div>

{/* Background Particles */}
<div className="absolute inset-0 z-0 pointer-events-none">
  {[...Array(20)].map((_, i) => (
    <motion.div
      key={i}
      className="absolute bg-white/10 rounded-full"
      initial={{ 
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        opacity: Math.random() * 0.5
      }}
      animate={{
        y: [0, -40, 0],
        opacity: [0.2, 0.5, 0.2]
      }}
      transition={{
        duration: 5 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear"
      }}
    />
  ))}
</div>

</section>

{/* Interactive AI Demo Section */}
<LiveAIDemo />

{/* Component galery Priview Section */}
 <ComponentGallery/>

 {/* Demo galery section */}


 {/* What people are saying section */}
 <TestimonialsMarquee/>



 {/* Pricing plan section */} 
 <section>
  <StudentPricing/>
  <DemoPricing/>
  <SaktrixPricing/>
  <FreeForever/>
 </section>

{/* ROI calculator */}
 <ROICalculator/>

   {/* Features Grid Section */}
 <FeatureGrid/>


 {/* How it's Works section  */}
  <HowItWorks/>

  {/* Faq Section */}
  <FAQSection/>
   

   


</>



    
  )
}
