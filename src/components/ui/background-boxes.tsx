"use client";
import React, { useState, useEffect } from "react";
import { cn } from "../../../lib/utils";

const HOVER_COLORS = [
  "hover:bg-sky-300/30",
  "hover:bg-pink-300/30",
  "hover:bg-emerald-300/30",
  "hover:bg-amber-300/30",
  "hover:bg-purple-300/30",
  "hover:bg-indigo-300/30",
];

export const BoxesCore = ({ className, ...rest }: { className?: string; [key: string]: any }) => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(min-width: 768px) and (pointer: fine)");
    setIsDesktop(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // On mobile/touch screens, render a zero-JS, GPU-friendly CSS grid pattern
  if (!isDesktop) {
    return (
      <div
        className={cn(
          "absolute inset-0 z-0 opacity-25 pointer-events-none",
          "bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)]",
          "bg-[size:36px_36px]",
          className
        )}
        {...rest}
      />
    );
  }

  const rows = 18;
  const cols = 14;

  return (
    <div
      style={{
        transform:
          "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.75) rotate(0deg) translateZ(0)",
      }}
      className={cn(
        "absolute -top-1/4 left-1/4 z-0 flex h-full w-full -translate-x-1/2 -translate-y-1/2 p-4",
        className
      )}
      {...rest}
    >
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={`row-${i}`}
          className="relative h-10 w-20 border-l border-slate-800/80"
        >
          {Array.from({ length: cols }).map((_, j) => {
            const colorClass = HOVER_COLORS[(i + j) % HOVER_COLORS.length];
            return (
              <div
                key={`col-${j}`}
                className={cn(
                  "relative h-10 w-20 border-t border-r border-slate-800/80 transition-colors duration-700 hover:duration-0",
                  colorClass
                )}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
};

export const Boxes = React.memo(BoxesCore);

