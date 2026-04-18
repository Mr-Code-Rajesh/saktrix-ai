import React, { useState } from "react";
import { motion } from 'framer-motion';
import { StatsDemoEight, StatsDemoFive, StatsDemoFour, StatsDemoOne, StatsDemoSeven, StatsDemoSix, StatsDemoThree, StatsDemoTwo } from "./StatsFunction";


export const StatsSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Performance Metrics
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Stats <span className="saktrix-aurora-text">Telemetry</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Data-driven layout components designed to visualize growth, reach, and performance benchmarks with high-fidelity neural aesthetics.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <StatsDemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <StatsDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <StatsDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <StatsDemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <StatsDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <StatsDemoSix/>
     </section>

     <section className=" w-full min-h-min">
       <StatsDemoSeven/>
     </section>

    <section className=" w-full min-h-min">
       <StatsDemoEight/>
     </section>




     </section>

    </>
  );
};
