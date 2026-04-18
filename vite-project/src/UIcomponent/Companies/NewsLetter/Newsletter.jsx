import React, { useState } from "react";
import { motion } from 'framer-motion';
import { NewsEight, NewsFive, NewsFour, NewsOne, NewsSeven, NewsSix, NewsThree, NewsTwo } from "./NewsLetterFunction";

export const NewsSection = () => {
 
  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Intelligence Sync
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Newsletter <span className="saktrix-aurora-text">Transmissions</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance opt-in components designed for seamless periodic intelligence synchronization and community growth.
        </p>
      </div>


      {/*Newsletter Component's Start  */}

      <section className=" w-full min-h-min">
        <NewsOne/>
      </section>

     <section className=" w-full min-h-min">
       <NewsTwo/>
     </section>

     <section className=" w-full min-h-min">
       <NewsThree/>
     </section>

     <section className=" w-full min-h-min">
       <NewsFour/>
     </section>

      <section className=" w-full min-h-min">
       <NewsFive/>
     </section>

      <section className=" w-full min-h-min">
       <NewsSix/>
     </section>

     <section className=" w-full min-h-min">
       <NewsSeven/>
     </section>

    <section className=" w-full min-h-min">
       <NewsEight/> 
     </section>




     </section>

    </>
  );
};
