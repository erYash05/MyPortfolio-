import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { ColourfulText } from "./ui/text";
import { BackgroundBoxesDemo } from "./Models/TechLogos/BackgroundDemo";

const AnimatedCounter = () => {

  

  return (
    <div className=" animation-counter w-full px-4 md:px-8 lg:px-20 py-16 z-10">
      

      {/* Heading */}
      <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-center  text-white mt-15 mb-10 leading-snug font-sans">
        Turning <ColourfulText text="ideas" /> <br /> 
        into interactive web experiences
      </h1>
      
      {/* Counter Grid */}
      <div
        id="counter"
        className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 z-10 gap-6"
      >
        
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl shadow-lg 
                       p-10 flex flex-col items-center justify-center 
                       hover:scale-105 transition-transform duration-300 ease-in-out
                       border border-zinc-700 z-10"
          >
            {/* Counter Number */}
            <div className="counter-number text-white text-4xl md:text-5xl lg:text-6xl font-extrabold mb-2 drop-shadow-md">
              <CountUp suffix={item.suffix} end={item.value} duration={3} />
            </div>

            {/* Label */}
            <div className="text-zinc-300 text-base md:text-lg lg:text-xl font-medium text-center">
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
