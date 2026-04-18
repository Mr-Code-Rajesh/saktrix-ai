import React, { useState } from "react";
import { motion } from 'framer-motion';
import { AboutDemoEight, AboutDemoFive, AboutDemoFour, AboutDemoNine, AboutDemoOne, AboutDemoSeven, AboutDemoSix, AboutDemoThree, AboutDemoTwo } from "./AboutFunction";


export const AboutSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          System Identity
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          About <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Premium collection of About and Team layouts designed to showcase your organizational DNA with high-performance neural aesthetics.
        </p>
      </div>


      {/*About Component's Start  */}

      <section className=" w-full min-h-min">
        <AboutDemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <AboutDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
        <AboutDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <AboutDemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <AboutDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <AboutDemoSix/>
     </section>

     <section className=" w-full min-h-min">
       <AboutDemoSeven/>
     </section>

    <section className=" w-full min-h-min">
       <AboutDemoEight/>
     </section>

     <section className=" w-full min-h-min">
       <AboutDemoNine/>
     </section>




     </section>

    </>
  );
};
