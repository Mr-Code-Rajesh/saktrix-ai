import React, { useState } from "react";
import { motion } from 'framer-motion';
import { ServiceEight, ServiceFive, ServiceFour, ServiceOne, ServiceSeven, ServiceSix, ServiceThre, ServiceTwo } from "./ServicesFuntion";

export const ServicesSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Strategic Solutions
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Service <span className="saktrix-aurora-text">Architectures</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Premium service and capability layouts designed for agencies, consultancy firms, and product studios in the 2026 AI era.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <ServiceOne/>
      </section>

     <section className=" w-full min-h-min">
       <ServiceTwo/>
     </section>

     <section className=" w-full min-h-min">
       <ServiceThre/>
     </section>

     <section className=" w-full min-h-min">
       <ServiceFour/>
     </section>

      <section className=" w-full min-h-min">
       <ServiceFive/>
     </section>

      <section className=" w-full min-h-min">
       <ServiceSix/>
     </section>

     <section className=" w-full min-h-min">
       <ServiceSeven/>
     </section>

    <section className=" w-full min-h-min">
       <ServiceEight/>
     </section>




     </section>

    </>
  );
};
