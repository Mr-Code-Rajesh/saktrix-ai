import React, { useState } from "react";
import { motion } from 'framer-motion';
import { ProcessEight, ProcessFive, ProcessFour, ProcessOne, ProcessSeven, ProcessSix, ProcessThree, ProcessTwo } from "./ProcessFunction";


export const ProcessSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Operational Flow
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Process <span className="saktrix-aurora-text">Workflows</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Premium collection of procedural and workflow layouts designed to illuminate the complexity of neural system operations.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <ProcessOne/>
      </section>

     <section className=" w-full min-h-min">
       <ProcessTwo/>
     </section>

     <section className=" w-full min-h-min">
       <ProcessThree/>
     </section>

     <section className=" w-full min-h-min">
       <ProcessFour/>
     </section>

      <section className=" w-full min-h-min">
       <ProcessFive/>
     </section>

      <section className=" w-full min-h-min">
       <ProcessSix/>
     </section>

     <section className=" w-full min-h-min">
       <ProcessSeven/>
     </section>

    <section className=" w-full min-h-min">
       <ProcessEight/>
     </section>


     </section>

    </>
  );
};
