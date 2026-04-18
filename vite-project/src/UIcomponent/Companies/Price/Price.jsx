import React, { useState } from "react";
import { motion } from 'framer-motion';
import { PricingDemoEight, PricingDemoFive, PricingDemoFour, PricingDemoOne, PricingDemoSeven, PricingDemoSix, PricingDemoThree, PricingDemoTwo } from "./PriceFunction";


export const PriceSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Monetization Strategy
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Pricing <span className="saktrix-aurora-text">Architectures</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Ready-to-deploy pricing tables and billing toggles optimized for maximum conversion in the SaaS and AI intelligence market.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <PricingDemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <PricingDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <PricingDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <PricingDemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <PricingDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <PricingDemoSix/>
     </section>

     <section className=" w-full min-h-min">
       <PricingDemoSeven/>
     </section>

    <section className=" w-full min-h-min">
       <PricingDemoEight/>
     </section>



     </section>

    </>
  );
};
