import React, { useLayoutEffect } from "react";
import { words } from "../../constants";
import Button from "../Button";
import HeroExperience from "../HeroModels/HeroExperience";
import gsap from "gsap";
import AnimatedCounter from "../AnimatedCounter";
import { ColourfulText } from "../ui/text";

const Hero = () => {
  useLayoutEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 36, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 1.1,
          ease: "power2.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative overflow-hidden z-10">
      {/* Desktop Corner Brand Mark (hidden on mobile/tablet where FloatingNav displays the brand logo) */}
      <div className="hidden xl:block w-48 2xl:w-56 absolute top-5 left-8 pointer-events-none z-20">
        <img
          className="w-full h-auto object-contain filter drop-shadow-[0_4px_20px_rgba(52,211,153,0.35)]"
          src="/images/mark.png"
          alt="Digital Growth Agency"
          width={224}
          height={64}
        />
      </div>

      {/* Background decorative texture */}
      <div className="absolute top-0 left-0 -z-10 pointer-events-none opacity-80">
        <img
          src="/images/bg.png"
          alt=""
          width={1440}
          height={900}
          fetchPriority="high"
          className="w-full h-auto object-cover"
        />
      </div>

      <div className="hero-layout max-w-7xl xl:max-w-none mx-auto">
        {/* Left side text */}
        <header className="flex flex-col justify-center w-full xl:w-[52%] md:px-12 xl:px-20 px-4 sm:px-6 z-10 pointer-events-none">
          <div className="flex flex-col gap-4 sm:gap-6 z-10">
            <div className="hero-text pointer-events-none">
              <h1 className="flex flex-wrap items-center gap-x-2">
                <span>Shaping</span>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={`${word.text}-${index}`}
                        className="flex items-center md:gap-3 gap-1.5 h-[32px] xs:h-[36px] sm:h-[48px] md:h-[64px] lg:h-[72px]"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          width={40}
                          height={40}
                          className="xl:size-11 md:size-9 sm:size-7 size-5 md:p-1.5 p-1 rounded-full bg-white-50 shrink-0"
                        />
                        <span className="whitespace-nowrap">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>

              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 text-sm xs:text-base md:text-xl relative z-10 pointer-events-none max-w-xl leading-relaxed">
              ✨ We are <ColourfulText text="Y2X" /> — your partner in{" "}
              <ColourfulText text="Digital Growth" />.
            </p>

            <div className="pointer-events-auto w-full pt-1">
              <Button
                className="w-48 sm:w-56 md:w-64 h-12 sm:h-14"
                id="button"
                text="See my work"
              />
            </div>
          </div>
        </header>

        {/* 3D Model Experience - cleanly stacked below text on mobile/tablet, split right on xl desktop */}
        <figure className="hero-3d-layout pointer-events-auto">
          <HeroExperience />
        </figure>
      </div>

      {/* Animated Counter */}
      <AnimatedCounter />
    </div>
  );
};

export default Hero;

