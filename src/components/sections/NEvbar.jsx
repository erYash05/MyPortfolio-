"use client";
import React, { useCallback } from "react";
import { FloatingNav } from "../ui/floating-navbar";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// GSAP plugin register
gsap.registerPlugin(ScrollToPlugin);

const NAV_ITEMS = [
  { name: "Home", link: "#hero" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#tech" },
  { name: "About", link: "#about" },
  { name: "Showcase", link: "#content" },
  { name: "Contact", link: "#contact" },
];

export function FloatingNavDemo() {
  const handleNavClick = useCallback((e, id) => {
    const target = document.querySelector(id);
    if (!target) return;
    if (e && e.preventDefault) e.preventDefault();

    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      target.scrollIntoView({ behavior: "auto" });
      return;
    }

    gsap.to(window, {
      duration: 0.85,
      scrollTo: { y: target, offsetY: 64 },
      ease: "power2.out",
      overwrite: "auto",
    });
  }, []);

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={NAV_ITEMS.map((item) => ({
          ...item,
          onClick: (e) => handleNavClick(e, item.link),
        }))}
      />
    </div>
  );
}

