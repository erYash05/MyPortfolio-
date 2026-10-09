import React, { useEffect, useRef, Suspense, lazy } from "react";
import Hero from "./components/sections/Hero";
import { FloatingNavDemo } from "./components/sections/NEvbar";
import { BackgroundBoxesDemo } from "./components/Models/TechLogos/BackgroundDemo";
import gsap from "gsap";

const Services = lazy(() => import("./components/sections/Services"));
const StickyScrollRevealDemo = lazy(() => import("./components/sections/content"));
const TechStack = lazy(() => import("./components/sections/TechStack"));
const People = lazy(() => import("./components/sections/People"));
const ThreeDMarqueeDemo = lazy(() =>
  import("./components/sections/Project").then((m) => ({
    default: m.ThreeDMarqueeDemo,
  }))
);
const Contact = lazy(() => import("./components/sections/Contect"));
const Footer = lazy(() => import("./components/sections/Footer"));

const SectionFallback = () => (
  <div className="w-full py-16 flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-cyan-400/30 border-t-cyan-400 animate-spin" />
  </div>
);

const App = () => {
  const cursorRef = useRef(null);
  const mainRef = useRef(null);

  useEffect(() => {
    const main = mainRef.current;
    const cursor = cursorRef.current;
    if (!main || !cursor) return;

    // Only attach custom cursor on desktop devices with fine pointer and no reduced motion
    const canUseCustomCursor =
      typeof window !== "undefined" &&
      window.matchMedia?.("(min-width: 768px) and (pointer: fine)").matches &&
      !window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (!canUseCustomCursor) return;

    const xTo = gsap.quickTo(cursor, "x", { duration: 0.45, ease: "power3.out" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.45, ease: "power3.out" });

    const moveCursor = (e) => {
      xTo(e.clientX - 12);
      yTo(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <main ref={mainRef} className="relative overflow-x-clip w-full max-w-full">
      <div
        ref={cursorRef}
        className="cursor z-20 w-6 h-6 fixed rounded-full pointer-events-none hidden md:block"
      />

      {/* Full body background */}
      <div className="fixed inset-0 -z-10 w-full pointer-events-none">
        <BackgroundBoxesDemo />
      </div>

      {/* Foreground Content */}
      <FloatingNavDemo />
      <section id="hero">
        <Hero />
      </section>

      <Suspense fallback={<SectionFallback />}>
        <section id="services">
          <Services />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="projects">
          <StickyScrollRevealDemo />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="tech">
          <TechStack />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="about">
          <People />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="content">
          <ThreeDMarqueeDemo />
        </section>
      </Suspense>

      <Suspense fallback={<SectionFallback />}>
        <section id="contact">
          <Contact />
        </section>
      </Suspense>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </main>
  );
};

export default App;

