import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { ColourfulText } from "./ui/text";

const AnimatedCounter = () => {
  return (
    <div className="animation-counter w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-20 py-10 sm:py-14 md:py-16 z-10">
      {/* Heading */}
      <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mt-6 sm:mt-10 md:mt-14 mb-8 sm:mb-10 leading-snug font-sans max-w-4xl mx-auto">
        Turning <ColourfulText text="ideas" /> <br />
        into interactive web experiences
      </h2>

      {/* Counter Grid */}
      <div
        id="counter"
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 z-10 gap-3 sm:gap-6"
      >
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 rounded-2xl shadow-lg 
                       p-4 sm:p-7 md:p-10 flex flex-col items-center justify-center 
                       hover:scale-105 transition-transform duration-300 ease-in-out
                       border border-zinc-700/80 z-10 backdrop-blur-md"
          >
            {/* Counter Number */}
            <div className="counter-number text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-1.5 sm:mb-2 drop-shadow-md">
              <CountUp suffix={item.suffix} end={item.value} duration={3} />
            </div>

            {/* Label */}
            <div className="text-zinc-300 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center leading-tight">
              {item.label}
            </div>

            {/* Decorative underline */}
            <div className="w-8 sm:w-12 h-1 mt-3 sm:mt-4 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
