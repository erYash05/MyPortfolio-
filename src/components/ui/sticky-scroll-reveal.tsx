"use client";
import React, { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../../../lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    container: ref,
    offset: ["start start", "end start"],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce((acc, breakpoint, index) => {
      const distance = Math.abs(latest - breakpoint);
      if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
        return index;
      }
      return acc;
    }, 0);
    setActiveCard(closestBreakpointIndex);
  });

  const backgroundColors = [
    "#0b0c16",
    "#10121e",
    "#0f1322",
    "#121020",
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, rgba(6,182,212,0.2), rgba(16,185,129,0.2))",
    "linear-gradient(to bottom right, rgba(236,72,153,0.2), rgba(99,102,241,0.2))",
    "linear-gradient(to bottom right, rgba(249,115,22,0.2), rgba(234,179,8,0.2))",
    "linear-gradient(to bottom right, rgba(168,85,247,0.2), rgba(236,72,153,0.2))",
  ];

  const [backgroundGradient, setBackgroundGradient] = useState(linearGradients[0]);

  useEffect(() => {
    setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
  }, [activeCard]);

  return (
    <motion.div
      animate={{
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
      }}
      className="relative flex flex-col lg:flex-row h-[36rem] lg:h-[32rem] justify-center lg:space-x-12 overflow-y-auto rounded-2xl p-4 sm:p-8 border border-white/10 shadow-2xl scrollbar-thin scrollbar-thumb-white/10"
      ref={ref}
    >
      {/* Scrollable Text Content */}
      <div className="relative flex items-start w-full lg:w-1/2 px-2 sm:px-4">
        <div className="max-w-xl w-full">
          {content.map((item, index) => (
            <div key={item.title + index} className="my-12 sm:my-20">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.4,
                }}
                className="transition-opacity duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="flex items-center justify-center w-7 h-7 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-xs font-mono font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-xs uppercase font-mono tracking-wider text-cyan-400">
                    Step {index + 1}
                  </span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-sans">
                  {item.title}
                </h2>

                <p className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Mobile / Tablet Responsive Image (shown inline under description for screens < lg) */}
                <div className="block lg:hidden mt-6 w-full aspect-[16/10] max-h-64 rounded-xl overflow-hidden border border-white/15 shadow-xl bg-black/40">
                  {item.content ?? null}
                </div>
              </motion.div>
            </div>
          ))}
          <div className="h-20 lg:h-36" />
        </div>
      </div>

      {/* Desktop Sticky Visual Image Container (screens >= lg) */}
      <div className="hidden lg:flex items-center justify-center lg:w-1/2">
        <div
          style={{ background: backgroundGradient }}
          className={cn(
            "sticky top-8 w-full max-w-md xl:max-w-lg aspect-[16/10] overflow-hidden rounded-2xl border border-white/15 p-2 backdrop-blur-md shadow-2xl transition-all duration-500",
            contentClassName
          )}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCard}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="w-full h-full rounded-xl overflow-hidden"
            >
              {content[activeCard]?.content ?? null}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};
