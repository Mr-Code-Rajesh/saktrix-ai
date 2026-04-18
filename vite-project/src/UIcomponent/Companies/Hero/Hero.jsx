import React, { useState } from "react";
import { motion } from 'framer-motion';
import { Heroone } from "./Heroone";
import { HeroDemoEight, HeroDemoFive, HeroDemoFour, HeroDemoOne, HeroDemoSeven, HeroDemoSix, HeroDemoThree, HeroDemoTwo } from "./HeroFunction";


export const Hero = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          First Impression
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Hero <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Premium collection of Hero Section layouts crafted for startups, SaaS platforms, and high-converting landing pages. 
          Elevate your brand’s presence with pixel-perfect neural design.
        </p>
      </div>


      {/*Hero Component's Start  */}

      <section className=" w-full min-h-min">
       <HeroDemoOne/>
     </section>

     <section className=" w-full min-h-min">
       <HeroDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <HeroDemoThree/>
     </section>

      <section className=" w-full min-h-min">
       <HeroDemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <HeroDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <HeroDemoSix/>
     </section>

       <section className=" w-full min-h-min">
       <HeroDemoSeven/>
     </section>

       <section className=" w-full min-h-min">
       <HeroDemoEight/>
     </section>


     </section>

    





    </>
  );
};
