import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FAQdemoFive, FAQdemoFour, FAQdemoOne, FAQdemoThree, FAQdemoTwo } from "./FAQFunction";


export const FAQSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Knowledge Base
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          FAQ <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          Premium collection of interactive FAQ layouts and support consoles designed for seamless knowledge retrieval and user assistance.
        </p>
      </div>


      {/*FAQ Component's Start  */}

      <section className=" w-full min-h-min">
        <FAQdemoOne/>
      </section>

     <section className=" w-full min-h-min">
       <FAQdemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <FAQdemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <FAQdemoFour/>
     </section>

      <section className=" w-full min-h-min">
       <FAQdemoFive/>
     </section>

      <section className=" w-full min-h-min">
       
     </section>

     <section className=" w-full min-h-min">
       
     </section>

    <section className=" w-full min-h-min">
       
     </section>




     </section>

    </>
  );
};
