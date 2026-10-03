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
        stagger: 0.2,
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
      <div className="w-full h-full md:px-10 px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 place-items-center max-w-7xl mx-auto">
          {techStackIcons.map((techStackIcon) => (
            <BackgroundGradient
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg w-full max-w-[160px] sm:max-w-[180px]"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content flex flex-col items-center p-4">
                {/* 3D Tech Icon */}
                <div className="tech-icon-wrapper mb-2">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* Tech Name */}
                <p className="text-sm font-medium text-white">{techStackIcon.name}</p>
              </div>
            </BackgroundGradient>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
