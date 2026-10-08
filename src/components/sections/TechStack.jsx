import React from "react";
import TitleHeader from "../TitleHeader";
import { techStackIcons } from "../../constants";
import { BackgroundGradient } from "../ui/background-gradient";
import TechIconCardExperience from "../Models/TechLogos/TechIconCardExperience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const TechStack = () => {
  // Animate the tech cards when scrolled into view
  useGSAP(() => {
    gsap.fromTo(
      ".tech-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.15,
        scrollTrigger: {
          trigger: "#skills",
          start: "top 80%",
        },
      }
    );
  });

  return (
    <div id="skills" className="w-full section-padding">
      {/* Section Header */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-20 text-center">
        <TitleHeader sub="🥉 Skills That Will Build My Future 💻" />
      </div>

      {/* Tech Grid */}
      <div className="w-full h-full md:px-10 px-3 sm:px-5 mt-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 place-items-center max-w-7xl mx-auto">
          {techStackIcons.map((techStackIcon) => (
            <BackgroundGradient
              key={techStackIcon.name}
              radiusClassName="rounded-2xl sm:rounded-3xl"
              containerClassName="w-full max-w-[145px] xs:max-w-[160px] sm:max-w-[185px] aspect-[4/5] sm:aspect-square flex items-center justify-center"
              className="bg-[#0e0e13] border border-white/10 tech-card overflow-hidden group flex flex-col items-center justify-between p-3 sm:p-4 h-full w-full"
            >
              <div className="tech-card-content flex flex-col items-center justify-center h-full w-full">
                {/* 3D Tech Icon */}
                <div className="tech-icon-wrapper w-full h-24 sm:h-28 flex items-center justify-center mb-1">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* Tech Name */}
                <p className="text-xs sm:text-sm font-semibold text-white text-center tracking-tight truncate w-full">
                  {techStackIcon.name}
                </p>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
