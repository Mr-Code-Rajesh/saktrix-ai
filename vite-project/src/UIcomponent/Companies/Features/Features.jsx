import React, { useState } from "react";
import { FeaturesDemoEight, FeaturesDemoFive, FeaturesDemoFour, FeaturesDemoOne, FeaturesDemoSeven, FeaturesDemoSix, FeaturesDemoThree, FeaturesDemoTwo } from "./FeaturesFunction";


export const FeaturesSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Core Capabilities
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Feature <span className="saktrix-aurora-text">Matrices</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance feature grids and capability matrices designed for data-rich AI applications and futuristic SaaS landing pages.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <FeaturesDemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <FeaturesDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <FeaturesDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <FeaturesDemoFour/>
     </section>

      <section className=" w-full min-h-min">
        <FeaturesDemoFive/>
     </section>

      <section className=" w-full min-h-min">
        <FeaturesDemoSix/>
     </section>

     <section className=" w-full min-h-min">
        <FeaturesDemoSeven/>
     </section>

    <section className=" w-full min-h-min">
       <FeaturesDemoEight/>
     </section>




     </section>

    </>
  );
};
