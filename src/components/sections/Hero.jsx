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
        { y: 50, opacity: 0 }, // starting state
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
        {/* Background */}
        <div className="w-[9rem]  absolute p-10  ">
          <img  className=" rounded-4xl"
          src="../../../public/images/C1.png" alt="" />
        </div>
        <div className="absolute top-0 left-0 -z-10">
          <img src="/images/bg.png" alt="background" />
        </div>

        <div className="hero-layout">
          {/* Left side */}
          <header
            className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5"
          >
            <div className="flex flex-col gap-7 z-10">
              <div className="hero-text">
                <h1>
                  Shaping
                  <span className="slide">
                    <span className="wrapper">
                      {words.map((word) => (
                        <span
                          key={word.text}
                          className="flex items-center md:gap-3 gap-1 p-2"
                        >
                          <img
                            src={word.imgPath}
                            alt={word.text}
                            className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
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

              <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
                 
                        ✨ Hi, I am <ColourfulText text="YASH" /> <br />
                        and I park all of my 
                        <ColourfulText text="Experience" /> into this site.
              </p>

              <Button
                className="md:w-80 md:h-16 w-60 h-12"
                id="button"
                text="See my work"
              />
            </div>
          </header>

          {/* Right: 3D Model */}
          <figure>
            <div className="hero-3d-layout z-10">
              <HeroExperience />
            </div>
          </figure>
        </div>

        {/* Animated Counter */}
        <AnimatedCounter className='AnimatedCounter' />
      </section>
    </div>
  );
};

export default Hero;
