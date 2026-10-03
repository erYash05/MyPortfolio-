"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";
import gsap from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";

// GSAP plugin register
gsap.registerPlugin(ScrollToPlugin);

export function FloatingNavDemo() {
  const handleNavClick = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: id, offsetY: 80 }, // smooth scroll + navbar offset
      ease: "power2.inOut",
    });
  };

  const navItems = [
    { name: "Home", link: "#hero" },
    { name: "Services", link: "#services" },
    { name: "Projects", link: "#projects" },
    { name: "Skills", link: "#tech" },
    { name: "About", link: "#about" },
    { name: "Showcase", link: "#content" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div className="relative w-full">
      <FloatingNav
        navItems={navItems.map((item) => ({
          ...item,
          onClick: () => handleNavClick(item.link),
        }))}
      />
    </div>
  );
}
