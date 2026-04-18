import React, { useState } from "react";
import { motion } from 'framer-motion';
import { ErrorDemoFive, ErrorDemoFour, ErrorDemoOne, ErrorDemoSix, ErrorDemoThree, ErrorDemoTwo } from "./ErrorFunction";


export const ErrorSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          System Collision
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Error <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance 404 and system failure layouts designed to manage user navigation through architectural anomalies with futuristic aesthetics.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <ErrorDemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <ErrorDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <ErrorDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <ErrorDemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <ErrorDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <ErrorDemoSix/>
     </section>

     <section className=" w-full min-h-min">
       
     </section>

    <section className=" w-full min-h-min">
       
     </section>




     </section>

    </>
  );
};
