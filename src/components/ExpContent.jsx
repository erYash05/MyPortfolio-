import React from "react";
import SafeSpline from "./SafeSpline";

const ExpContent = () => {
  return (
    <div className="relative bg-[#12131d] border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden shadow-lg w-full max-w-full h-full flex flex-col justify-between">
      {/* Title */}
      <div className="relative z-10 flex items-center justify-between gap-2">
        <span className="font-semibold bg-amber-500 text-black px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl sm:rounded-2xl text-xs sm:text-sm md:text-base w-fit">
          Frontend Developer Intern
        </span>
      </div>

      {/* Gradient Image as Background */}
      <img
        src="/gradient.png"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute top-0 right-0 w-1/2 opacity-35 pointer-events-none select-none"
      />

      {/* GPU-friendly Ambient Glow */}
      <div className="w-64 h-64 sm:w-80 sm:h-80 absolute top-1/4 -right-10 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Responsive Spline Viewport */}
      <div className="relative w-full h-[240px] xs:h-[270px] sm:h-[340px] md:h-[400px] lg:h-[430px] mt-3 pointer-events-auto">
        <SafeSpline scene="https://prod.spline.design/ahexc547vhkBfQdC/scene.splinecode" />
      </div>
    </div>
  );
};

export default React.memo(ExpContent);

