import React, { useState } from "react";
import { motion } from 'framer-motion';
import CardType32 from "../UIcomponent/Cards/CardEight";
import CardType31 from "../UIcomponent/Cards/Cardfive";
import CardType30 from "../UIcomponent/Cards/CardFour";
import CardType29 from "../UIcomponent/Cards/CardNine";
import CardType28 from "../UIcomponent/Cards/Cardone";
import CardType27 from "../UIcomponent/Cards/Cardproeight";
import CardType26 from "../UIcomponent/Cards/CardProFive";
import CardType25 from "../UIcomponent/Cards/CardProfour";
import CardType23 from "../UIcomponent/Cards/CardProNine";
import CardType22 from "../UIcomponent/Cards/CardProOne";
import CardType24 from "../UIcomponent/Cards/CardProLeven";
import CardType21 from "../UIcomponent/Cards/CardproSeven";
import CardType20 from "../UIcomponent/Cards/CardProsix";
import CardType19 from "../UIcomponent/Cards/CardProTen";
import CardType18 from "../UIcomponent/Cards/CardProthree";
import CardType17 from "../UIcomponent/Cards/CardProTwele";
import CardType1 from "../UIcomponent/Cards/CardProtwo";
import CardType2 from "../UIcomponent/Cards/Cardseven";
import CardType3 from "../UIcomponent/Cards/Cardsix";
import CardType4 from "../UIcomponent/Cards/Cardten";
import CardType5 from "../UIcomponent/Cards/Cardthree";
import CardType6 from "../UIcomponent/Cards/Cardtwo";
import CardType7 from "../UIcomponent/Cards/CardUltraeight";
import CardType8 from "../UIcomponent/Cards/CardUltrafive";
import CardType9 from "../UIcomponent/Cards/CardUltrafour";
import CardType10 from "../UIcomponent/Cards/CardUltraNine";
import CardType11 from "../UIcomponent/Cards/CardultraOne";
import CardType12 from "../UIcomponent/Cards/CardUltraSeven";
import CardType13 from "../UIcomponent/Cards/CardUltrasix";
import CardType14 from "../UIcomponent/Cards/CardUltraTen";
import CardType15 from "../UIcomponent/Cards/Cardultrathree";
import CardType16 from "../UIcomponent/Cards/CardultraTwo";



export const CardList = () => {
 
  return (
    <>
    <section className="w-full py-22 px-15 bg-white dark:bg-gradient-to-br dark:from-black dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-6xl mx-auto ">
       <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-purple-300 dark:via-pink-400 dark:to-indigo-300 mb-4">
        Card Sections
        </h2>
       <p className="text-gray-700 dark:text-gray-300 text-lg max-w-3xl">
         Unlock a premium collection of Hero Section layouts crafted for startups, SaaS platforms, and high-converting landing pages. 
         Elevate your brand’s first impression with pixel-perfect design and performance-optimized components.
       </p>
      </div>


      {/*Card Component's Start  */}

      <section className=" w-full min-h-min">
        <CardType32/>
        <CardType31/>
        <CardType30/>
        <CardType29/>
        <CardType28/>
        <CardType27/>
        <CardType26/>
        <CardType25/>
        <CardType24/>
        <CardType23/>
        <CardType22/>
        <CardType21/>
        <CardType20/>
        <CardType19/>
        <CardType18/>
        <CardType17/>
        <CardType1/>
        <CardType2/>
        <CardType3/>
        <CardType4/>
        <CardType5/>
        <CardType6/>
        <CardType7/>
        <CardType8/>
        <CardType9/>
        <CardType10/>
        <CardType11/>
        <CardType12/>
        <CardType13/>
        <CardType14/>
        <CardType15/>
        <CardType16/>


      </section>

    
     </section>

    </>
  );
};





