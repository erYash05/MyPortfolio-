import React, { useEffect, useRef } from "react";
import Hero from "./components/sections/Hero";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contect";
import { FloatingNavDemo } from "./components/sections/NEvbar";
import { ThreeDMarqueeDemo } from "./components/sections/Project";
import { StickyScrollRevealDemo } from "./components/sections/content";
import { BackgroundBoxesDemo } from "./components/Models/TechLogos/BackgroundDemo";
import Footer from "./components/sections/Footer";
import gsap from "gsap";

const App = () => {
  const cursorRef = useRef(null); // reference to cursor div
  const mainRef = useRef(null);   // reference to main div

  useEffect(() => {
    const main = mainRef.current;
    const cursor = cursorRef.current;

    if (!main || !cursor) return;

    const moveCursor = (e) => {
      gsap.to(cursor, {
        x: e.clientX - cursor.offsetWidth / 2,
        y: e.clientY - cursor.offsetHeight / 2,
        duration: 1.4,
        ease:"back.out(1.7)"
      });
    };

    main.addEventListener("mousemove", moveCursor);

    // Cleanup on unmount
    return () => {
      main.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main ref={mainRef} className="relative">
      <div
        ref={cursorRef}
        className="cursor z-20 w-6 h-6 bg-white fixed rounded-full pointer-events-none"
      ></div>

      {/* Full body background */}
      <div className="fixed inset-0 -z-10 w-full">
        <BackgroundBoxesDemo />
      </div>

      {/* Foreground Content */}
      <FloatingNavDemo />
      <section id="hero">
        <Hero />
      </section>
      <section id="projects">
        <StickyScrollRevealDemo />
      </section>
      <section id="tech">
        <TechStack />
      </section>
      <section id="content">
        <ThreeDMarqueeDemo />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  );
};

export default App;
