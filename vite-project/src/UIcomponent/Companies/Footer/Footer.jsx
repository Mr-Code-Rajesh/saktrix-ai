import React, { useState } from "react";
import { motion } from 'framer-motion';
import { FooterDemoFive, FooterDemoFour, FooterDemoOne, FooterDemoSeven, FooterDemoSix, FooterDemoThree, FooterDemoTwo } from "./FooterFunction";

export const FooterSection = () =>
{

  return (
    <>
      <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Terminal Outputs
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Footer <span className="saktrix-aurora-text">Protocols</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-16">
            Sophisticated footer layouts and system status hubs designed to anchor your application with futuristic intelligence and clear structural hierarchy.
          </p>
        </div>


        {/*Footer Component's Start  */}

        <section className=" w-full min-h-min">
          <FooterDemoOne />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoTwo />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoThree />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoFour />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoFive />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoSix />
        </section>

        <section className=" w-full min-h-min">
          <FooterDemoSeven />
        </section>

        <section className=" w-full min-h-min">

        </section>




      </section>

    </>
  );
};
