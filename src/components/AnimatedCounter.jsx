import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { ColourfulText } from "./ui/text";
import { BackgroundBoxesDemo } from "./Models/TechLogos/BackgroundDemo";

const AnimatedCounter = () => {

  

  return (
    <div className="animation-counter z-10 w-full px-4 py-10 sm:px-8 sm:py-14 lg:px-20">
      

      {/* Heading */}
      <h1 className="mb-6 mt-4 text-center font-sans text-xl font-bold leading-snug text-white sm:mb-10 sm:text-3xl lg:text-5xl">
        Turning <ColourfulText text="ideas" /> <br /> 
        into interactive web experiences
      </h1>
      
      {/* Counter Grid */}
      <div
        id="counter"
        className="mx-auto grid max-w-6xl grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-4"
      >
        
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="z-10 flex min-w-0 flex-col items-center justify-center rounded-xl border border-zinc-700 bg-gradient-to-br from-zinc-800 to-zinc-900 p-4 shadow-lg transition-transform duration-300 ease-in-out hover:scale-105 sm:rounded-2xl sm:p-6"
          >
            {/* Counter Number */}
            <div className="counter-number mb-1 text-3xl font-extrabold text-white drop-shadow-md sm:text-4xl lg:text-6xl">
              <CountUp suffix={item.suffix} end={item.value} duration={3} />
            </div>

            {/* Label */}
            <div className="text-center text-xs font-medium text-zinc-300 sm:text-sm lg:text-xl">
              {item.label}
            </div>

            {/* Decorative underline */}
            <div className="w-12 h-1 mt-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
