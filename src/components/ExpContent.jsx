import React from "react";
import SafeSpline from "./SafeSpline";

const ExpContent = () => {
  return (
    <div className="relative bg-[#12131d] border border-white/10 rounded-2xl p-4 sm:p-6 overflow-hidden shadow-lg w-full max-w-full">
      {/* Title */}
      <h1 className="font-semibold bg-amber-500 text-black px-4 py-2.5 rounded-2xl text-base sm:text-lg relative z-10 w-fit">
        Frontend Developer Intern
      </h1>

      {/* Gradient Image as Background */}
      <img
        src="/gradient.png"
        alt="Gradient-img"
        className="absolute top-0 right-0 w-1/2 opacity-40 pointer-events-none"
      />

      {/* Glow Shadow */}
      <div className="h-0 w-[40rem] absolute top-[20%] right-[-5%] shadow-[0_0_900px_20px_#e99b63] pointer-events-none"></div>

      {/* Spline Model with exact native 50rem x 30rem viewport */}
      <div className="relative w-[50rem] h-[30rem] mt-2 mr-8 scale-[0.6] xs:scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-top-left -mb-28 xs:-mb-20 sm:-mb-12 lg:mb-0 pointer-events-auto">
        <SafeSpline scene="https://prod.spline.design/ahexc547vhkBfQdC/scene.splinecode" />
      </div>
    </div>
  );
};

export default ExpContent;
