import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { techStackIcons } from "../../constants";
import TechIconCardExperience from "../Models/TechLogos/TechIconCardExperience";
import { BackgroundGradient } from "../ui/background-gradient";
import { ColourfulText } from "../ui/text";
import TitleHeader from "../TitleHeader";

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
          start: "top center",
        },
      }
    );
  });

  return (
    <section id="skills" className="section-padding">
      {/* Section Header */}
      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-20  text-center">
        <TitleHeader
          sub="🥉Skills That Will Build My Future💻"
        />
      </div>

      {/* Section Title */}
      <div className="text-center mb-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-sans leading-snug">
          Modern
          <ColourfulText text="Skills" /> <br /> I Work With
        </h1>
      </div>

      {/* Tech Grid */}
      <div className="w-full h-full md:px-10 px-5">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 place-items-center">
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
    </section>
  );
};

export default TechStack;
