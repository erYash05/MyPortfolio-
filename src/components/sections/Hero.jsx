import React, { useLayoutEffect } from "react";
import Spline from "@splinetool/react-spline";
import { words } from "../../constants";
import Button from "../Button";
import HeroExperience from "../HeroModels/HeroExperience";
import gsap from "gsap";
import AnimatedCounter from "../AnimatedCounter";
import { ColourfulText } from "../ui/text";

const Hero = () => {
  useLayoutEffect(() => {
    // GSAP context for scoped animations
    let ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.3,
          duration: 1.5,
          ease: "power2.out",
        }
      );
    });

    // cleanup to avoid duplicate animations on re-render
    return () => ctx.revert();
  }, []);

  return (
    <div>
      <section id="hero" className="relative overflow-hidden z-10">
        {/* Brand Logo - Responsive on mobile devices */}
        <div className="w-28 xs:w-36 sm:w-48 md:w-56 lg:w-64 max-w-[44vw] sm:max-w-none absolute top-3 left-3 sm:top-5 sm:left-5 md:top-6 md:left-8 pointer-events-none z-20 transition-all duration-300">
          <img
            className="w-full h-auto object-contain filter drop-shadow-[0_4px_20px_rgba(52,211,153,0.35)]"
            src="/images/mark.png"
            alt="Digital Growth Agency"
          />
        </div>
        <div className="absolute top-0 left-0 -z-10 pointer-events-none">
          <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
          {/* Left side text */}
          <header className="flex flex-col justify-center w-full max-w-full md:px-20 px-4 sm:px-6 z-10 pointer-events-none">
            <div className="flex flex-col gap-6 sm:gap-7 z-10">
              <div className="hero-text pointer-events-none">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word, index) => (
                        <span
                          key={`${word.text}-${index}`}
                          className="flex items-center md:gap-3 gap-1 p-1 sm:p-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-6 sm:size-7 md:p-2 p-1 rounded-full bg-white-50"
                          />
                          <span>{word.text}</span>
                        </span>
                      ))}
                    </span>
                  </span>
                </h1>

                <h1>into Real Project</h1>
                <h1>That deliver Result</h1>
              </div>
              
              <p className="text-white-50 text-base md:text-xl relative z-10 pointer-events-none max-w-xl">
                ✨ We are <ColourfulText text="Y2X" /> <br />
                your partner in <ColourfulText text="Digital Growth" />.
              </p>
            
              <div className="pointer-events-auto w-full">
                <Button
                  className="w-[30%] min-w-[190px] h-12 md:h-16"
                  id="button"
                  text="See my work"
                />
              </div>
            </div>
          </header>

          {/* 3D Model Experience */}
          <figure className="hero-3d-layout pointer-events-auto">
            <HeroExperience />
          </figure>
        </div>

        {/* Animated Counter */}
        <AnimatedCounter className="AnimatedCounter" />
      </section>
    </div>
  );
};

export default Hero;
