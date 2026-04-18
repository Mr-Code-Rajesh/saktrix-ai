import React, { useState } from "react";
import { motion } from 'framer-motion';
import { BlogDemoFive, BlogDemoFour, BlogDemoone, BlogDemoThree, BlogDemoTwo, BlogDemSix } from "./BlogFunction";


export const BlogSection = () => {

  return (
    <>
    <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
      <div className="max-w-6xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
          Intelligence Feed
        </div>
        <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
          Blog <span className="saktrix-aurora-text">Protocols</span>
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mb-16">
          High-performance blog and transmission layouts designed for deep-tech storytelling and futuristic knowledge distribution.
        </p>
      </div>


      {/*CTA Component's Start  */}

      <section className=" w-full min-h-min">
        <BlogDemoone/>
      </section>

     <section className=" w-full min-h-min">
       <BlogDemoTwo/>
     </section>

     <section className=" w-full min-h-min">
       <BlogDemoThree/>
     </section>

     <section className=" w-full min-h-min">
       <BlogDemoFour/>
     </section>

      <section className=" w-full min-h-min">
        <BlogDemoFive/>
     </section>

      <section className=" w-full min-h-min">
       <BlogDemSix/>
     </section>

     <section className=" w-full min-h-min">
       
     </section>

    <section className=" w-full min-h-min">
       
     </section>




     </section>

    </>
  );
};
