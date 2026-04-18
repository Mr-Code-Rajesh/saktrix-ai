import React, { useState } from "react";
import { motion } from 'framer-motion';
import { CTAdemoEight, CTAdemoFive, CTAdemoFour, CTAdemoOne, CTAdemoSeven, CTAdemoSix, CTAdemoThree, CTAdemoTwo } from "./CTAfunction";


export const CTA = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Conversion Protocol
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          CTA <span className="saktrix-aurora-text">Accelerators</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance call-to-action sections engineered with futuristic neural aesthetics to maximize your application's growth vectors.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <CTAdemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <CTAdemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <CTAdemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <CTAdemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <CTAdemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <CTAdemoSix/>
     </section>

     <section className=" w-full min-h-min">
       <CTAdemoSeven/>
     </section>

    <section className=" w-full min-h-min">
       <CTAdemoEight/>
     </section>




     </section>

    </>
  );
};
