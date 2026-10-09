"use client";
import React from "react";
import TitleHeader from "../TitleHeader";
import { ThreeDMarquee } from "../ui/3d-marquee";
import { ColourfulText } from "../ui/text";

const SHOWCASE_IMAGES = [
  "/images/project1.png",
  "/images/T1.jpeg",
  "/images/T6.jpeg",
  "/images/T8.jpeg",
  "/images/project2.png",
  "/images/T3.jpeg",
  "/images/T7.jpeg",
  "/images/T10.jpeg",
  "/images/project3.png",
  "/images/T4.png",
  "/images/T5.png",
  "/images/T8.jpeg",
  "/images/T1.jpeg",
  "/images/project1.png",
  "/images/T6.jpeg",
  "/images/T7.jpeg",
];

export function ThreeDMarqueeDemo() {
  return (
    <div className="w-full section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full flex justify-center text-center">
          <TitleHeader sub="🚀 Turning Ideas into Reality 💻" />
        </div>

        {/* Section Title */}
        <div className="text-center mt-5 sm:mt-6 mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white font-sans leading-snug">
            From <ColourfulText text="Concept" /> <br /> to Deployment
          </h2>
        </div>

        <div className="mx-auto my-4 sm:my-8 max-w-7xl rounded-2xl sm:rounded-3xl bg-neutral-900/60 p-1.5 sm:p-2 ring-1 ring-white/10">
          <ThreeDMarquee images={SHOWCASE_IMAGES} />
        </div>
      </div>
    </div>
  );
}

