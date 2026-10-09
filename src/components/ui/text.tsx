"use client";
import React, { useState, useEffect, memo } from "react";
import { motion } from "motion/react";
import { useInView, usePrefersReducedMotion } from "../../utils/usePerformance";

const PALETTE = [
  "rgb(131, 179, 32)",
  "rgb(47, 195, 106)",
  "rgb(42, 169, 210)",
  "rgb(56, 189, 248)",
  "rgb(129, 140, 248)",
  "rgb(183, 0, 218)",
  "rgb(218, 0, 171)",
  "rgb(230, 64, 92)",
  "rgb(232, 98, 63)",
  "rgb(249, 129, 47)",
];

function ColourfulTextComponent({ text }: { text: string }) {
  const { ref, inView } = useInView({ rootMargin: "100px 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const [currentColors, setCurrentColors] = useState(PALETTE);

  useEffect(() => {
    if (!inView || prefersReducedMotion) return;

    const interval = setInterval(() => {
      setCurrentColors((prev) => {
        const next = [...prev];
        const first = next.shift();
        if (first) next.push(first);
        return next;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [inView, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span ref={ref} className="inline-block font-sans tracking-tight text-cyan-400">
        {text}
      </span>
    );
  }

  return (
    <span ref={ref} className="inline">
      {text.split("").map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          animate={{
            color: currentColors[index % currentColors.length],
          }}
          transition={{
            duration: 0.6,
            delay: index * 0.03,
          }}
          className="inline-block whitespace-pre font-sans tracking-tight"
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

export const ColourfulText = memo(ColourfulTextComponent);

