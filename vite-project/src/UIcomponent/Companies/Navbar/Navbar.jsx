import React, { useState } from "react";
import { motion } from 'framer-motion';
import { NavbarEight, NavbarFive, NavbarFour, NavbarOne, NavbarSeven, NavbarSix, NavbarThree, NavbarTwo } from "./NavbarFunction";


export const NavbarSection = () =>
{

  return (
    <>
      <section className="w-full py-24 px-12 bg-slate-950 neural-grid">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black tracking-[0.3em] uppercase mb-6">
            Navigation Protocols
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            Header <span className="saktrix-aurora-text">Interfaces</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mb-16">
            Premium collection of responsive navigation bars and mega-menus engineered with futuristic neural aesthetics for seamless portal access.
          </p>
        </div>


        {/*CTA Component's Start  */}

        <section className=" w-full min-h-min">
          <NavbarOne />
        </section>

        <section className=" w-full min-h-min">
          <NavbarTwo />
        </section>

        <section className=" w-full min-h-min">
          <NavbarThree />
        </section>

        <section className=" w-full min-h-min">
          <NavbarFour />
        </section>

        <section className=" w-full min-h-min">
          <NavbarFive />
        </section>

        <section className=" w-full min-h-min">
          <NavbarSix />
        </section>

        <section className=" w-full min-h-min">
          <NavbarSeven />
        </section>

        <section className=" w-full min-h-min">
          <NavbarEight />
        </section>




      </section>

    </>
  );
};







