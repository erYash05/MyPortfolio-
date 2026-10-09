import React from "react";
import { counterItems } from "../constants";
import CountUp from "react-countup";
import { ColourfulText } from "./ui/text";

const AnimatedCounter = () => {
  return (
    <div className="animation-counter w-full max-w-full px-4 sm:px-6 md:px-8 lg:px-20 py-6 sm:py-10 md:py-14 z-10">
      {/* Heading */}
      <h2 className="text-lg xs:text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center text-white mt-2 sm:mt-6 md:mt-10 mb-6 sm:mb-10 leading-snug font-sans max-w-4xl mx-auto">
        Turning <ColourfulText text="ideas" /> <br />
        into interactive web experiences
      </h2>

      {/* Counter Grid */}
      <div
        id="counter"
        className="max-w-6xl mx-auto grid grid-cols-2 lg:grid-cols-4 z-10 gap-3 sm:gap-5 md:gap-6"
      >
        {counterItems.map((item, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-zinc-800/90 to-zinc-900/90 rounded-xl sm:rounded-2xl shadow-lg 
                       p-3.5 xs:p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center 
                       hover:scale-[1.03] transition-transform duration-300 ease-out
                       border border-zinc-700/80 z-10"
          >
            {/* Counter Number */}
            <div className="counter-number text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-1 sm:mb-2 tabular-nums">
              <CountUp
                suffix={item.suffix}
                end={item.value}
                duration={2.2}
                enableScrollSpy
                scrollSpyOnce
              />
            </div>

            {/* Label */}
            <div className="text-zinc-300 text-[11px] xs:text-xs sm:text-sm md:text-base font-medium text-center leading-tight">
              {item.label}
            </div>

            {/* Decorative underline */}
            <div className="w-7 sm:w-10 h-1 mt-2.5 sm:mt-3.5 bg-gradient-to-r from-cyan-500 to-emerald-500 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(AnimatedCounter);

