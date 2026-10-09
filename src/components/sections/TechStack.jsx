import React, { useRef } from "react";
import TitleHeader from "../TitleHeader";
import { techStackIcons } from "../../constants";
import { BackgroundGradient } from "../ui/background-gradient";
import TechIconCardExperience from "../Models/TechLogos/TechIconCardExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TechStack = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const prefersReducedMotion =
        typeof window !== "undefined" &&
        window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) return;

      gsap.fromTo(
        ".tech-card-item",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.75,
          ease: "power2.out",
          stagger: 0.12,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 82%",
            once: true,
          },
        }
      );
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} id="skills" className="w-full section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="w-full flex justify-center text-center">
          <TitleHeader sub="🥉 Skills That Will Build My Future 💻" />
        </div>

        {/* Tech Grid */}
        <div className="w-full mt-8 sm:mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-5 md:gap-6 place-items-center">
            {techStackIcons.map((techStackIcon, idx) => (
              <div
                key={techStackIcon.name}
                className={`tech-card-item w-full flex justify-center ${
                  idx === techStackIcons.length - 1
                    ? "col-span-2 sm:col-span-1"
                    : ""
                }`}
              >
                <BackgroundGradient
                  radiusClassName="rounded-2xl sm:rounded-3xl"
                  containerClassName="w-full max-w-[145px] xs:max-w-[160px] sm:max-w-[190px] aspect-[4/5] sm:aspect-square flex items-center justify-center"
                  className="bg-[#0e0e13] border border-white/10 overflow-hidden group flex flex-col items-center justify-between p-3 sm:p-4 h-full w-full"
                >
                  <div className="tech-card-content flex flex-col items-center justify-between h-full w-full">
                    {/* 3D Tech Icon */}
                    <div className="tech-icon-wrapper w-full h-24 xs:h-28 sm:h-32 flex items-center justify-center">
                      <TechIconCardExperience model={techStackIcon} />
                    </div>
                    {/* Tech Name */}
                    <p className="text-xs sm:text-sm font-semibold text-white text-center tracking-tight truncate w-full pt-1">
                      {techStackIcon.name}
                    </p>
                  </div>
                </BackgroundGradient>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;

