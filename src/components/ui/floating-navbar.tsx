"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";
import { cn } from "../../../lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - (scrollYProgress.getPrevious() ?? 0);

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.25,
          ease: "easeInOut",
        }}
        className={cn(
          "flex max-w-[96vw] sm:max-w-fit fixed top-3 sm:top-6 inset-x-0 mx-auto border border-white/10 rounded-full bg-[#11121d]/90 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.6)] z-[5000] px-3 sm:px-6 py-2 items-center justify-between sm:justify-center gap-1.5 sm:gap-4 overflow-x-auto scrollbar-none",
          className
        )}
      >
        <a
          href="#hero"
          className="flex items-center gap-1.5 shrink-0 pl-1 pr-1.5 py-0.5 rounded-full hover:bg-white/5 transition-colors"
          title="Y2X Digital Growth Agency"
        >
          <img
            src="/images/mark.png"
            alt="Y2X Logo"
            className="h-5 sm:h-6 w-auto object-contain drop-shadow-[0_2px_8px_rgba(52,211,153,0.35)]"
          />
        </a>

        <div className="flex items-center gap-1 sm:gap-3 shrink-0">
          {navItems.map((navItem, idx) => (
            <a
              key={`link-${idx}`}
              href={navItem.link}
              onClick={navItem.onClick}
              className="relative text-neutral-300 hover:text-white px-2 py-1 rounded-full text-[11px] sm:text-xs md:text-sm font-medium transition-colors hover:bg-white/10 whitespace-nowrap"
            >
              {navItem.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="shrink-0 text-[11px] sm:text-xs font-semibold bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 sm:px-4 py-1.5 rounded-full hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all whitespace-nowrap"
        >
          Let's Talk
        </a>
      </motion.div>
    </AnimatePresence>
  );
};
