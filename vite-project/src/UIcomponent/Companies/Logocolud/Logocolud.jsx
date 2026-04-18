import React, { useState } from "react";
import { motion } from 'framer-motion';
import { LogoColudEight, LogoColudFive, LogoColudFour, LogoColudOne, LogoColudSeven, LogoColudSix, LogoColudThree, LogoColudTwo } from "./LogoColudFunction";


export const LogoColudSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Ecosystem Partners
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Trust <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance logo clouds and partner grids designed to manifest institutional credibility through futuristic neural layouts.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <LogoColudOne/>
      </section>

     <section className=" w-full min-h-min">
        <LogoColudTwo/>
     </section>

     <section className=" w-full min-h-min">
       <LogoColudThree />
     </section>

     <section className=" w-full min-h-min">
       <LogoColudFour/>
     </section>

      <section className=" w-full min-h-min">
       <LogoColudFive/>
     </section>

      <section className=" w-full min-h-min">
       <LogoColudSix/>
     </section>

     <section className=" w-full min-h-min">
       <LogoColudSeven/>
     </section>

    <section className=" w-full min-h-min">
       {/* <LogoColudEight/> */}
     </section>




     </section>

    </>
  );
};
