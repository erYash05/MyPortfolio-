"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import { ColourfulText } from "../ui/text";
import TitleHeader from "../TitleHeader";
import { BackgroundBoxesDemo } from "../Models/TechLogos/BackgroundDemo";

const content = [
  {
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Share ideas, update documents instantly, and boost productivity with seamless collaboration.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white text-lg font-semibold rounded-xl shadow-lg">
       <img
          src="../../../public/images/T1.jpeg"
          width={400}
          height={400}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Real time changes",
    description:
      "Track every modification as it happens. No more confusion over versions — always stay up to date with real-time updates and smooth syncing.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white rounded-xl overflow-hidden shadow-md">
        <img
          src="../../../public/images/T3.jpeg"
          width={400}
          height={400}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Version control",
    description:
      "Say goodbye to versioning chaos! Always work on the latest build and keep your team aligned without the hassle of manual updates.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white text-lg font-semibold rounded-xl shadow-lg">
        <img
          src="../../../public/images/T@.jpeg"
          width={400}
          height={400}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Smooth Workflow",
    description:
      "Keep your projects organized, your team in sync, and your workflow stress-free. Built to make your development journey smoother.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--pink-500))] text-white text-lg font-semibold rounded-xl shadow-lg">
        <img
          src="../../../public/images/T1.jpeg"
          width={400}
          height={400}
          className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export function StickyScrollRevealDemo() {
  return (
    <section id="projects" className="w-full section-padding">
       
      {/* Section Header */}
      <div className="flex flex-col items-center text-center px-4 sm:px-6 lg:px-20">
        <TitleHeader sub="📂 My Development Journey
         💻" />
         
         
        {/* Section Title */}
        <h1 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-extrabold text-white font-sans leading-snug">
        ✨ Showcasing  <ColourfulText text="Process" /> <br />
          My Creations
        </h1>
        <p className="mt-4 max-w-2xl text-neutral-400 text-sm md:text-base">
          Here are some of the <span className="text-amber-400">projects</span> that I’ve built —  
          blending <span className="text-cyan-400">design</span>, 
          <span className="text-emerald-400"> creativity</span>, and 
          <span className="text-pink-400"> code</span>.
        </p>
      </div>

      {/* Sticky Scroll Section */}
      <div className="w-full mt-12">
        <StickyScroll content={content} />
      </div>
    </section>
  );
}
