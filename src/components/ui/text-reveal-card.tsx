"use client";
import React, { useEffect, useRef, useState, useMemo, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "../../../lib/utils";
import { usePrefersReducedMotion } from "../../utils/usePerformance";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const boundsRef = useRef({ left: 0, width: 0 });
  const [isMouseOver, setIsMouseOver] = useState(false);

  const updateBounds = () => {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      boundsRef.current = { left, width };
    }
  };

  useEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds, { passive: true });
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX } = event;
    const { left, width } = boundsRef.current;
    if (width > 0) {
      const relativeX = clientX - left;
      setWidthPercentage(Math.max(0, Math.min(100, (relativeX / width) * 100)));
    }
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    updateBounds();
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    const clientX = event.touches[0]?.clientX;
    const { left, width } = boundsRef.current;
    if (typeof clientX === "number" && width > 0) {
      const relativeX = clientX - left;
      setWidthPercentage(Math.max(0, Math.min(100, (relativeX / width) * 100)));
    }
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;
  return (
    <div
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      ref={cardRef}
      className={cn(
        "bg-[#1d1c20] border border-white/[0.08] w-full max-w-[38rem] rounded-xl relative overflow-hidden mx-auto",
        className
      )}
    >
      {children}
      <div className="h-20 xs:h-24 sm:h-32 relative flex items-center px-3 xs:px-4 sm:px-6 w-full">
        <motion.div
          style={{
            width: "100%",
          }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
          }
          transition={isMouseOver ? { duration: 0 } : { duration: 0.35 }}
          className="absolute inset-y-0 left-0 px-3 xs:px-4 sm:px-6 flex items-center bg-[#1d1c20] z-20 will-change-[clip-path,opacity]"
        >
          <p
            style={{
              textShadow: "4px 4px 15px rgba(0,0,0,0.5)",
            }}
            className="text-base xs:text-lg sm:text-2xl md:text-4xl font-bold text-white bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-300 truncate w-full text-center"
          >
            {revealText}
          </p>
        </motion.div>
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: widthPercentage > 0 ? 1 : 0,
          }}
          transition={isMouseOver ? { duration: 0 } : { duration: 0.35 }}
          className="h-20 xs:h-24 sm:h-32 w-[4px] sm:w-[6px] bg-gradient-to-b from-transparent via-cyan-400 to-transparent absolute z-50 will-change-transform"
        />

        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]">
          <p className="text-base xs:text-lg sm:text-2xl md:text-4xl font-bold bg-clip-text text-transparent bg-[#525260] truncate w-full text-center">
            {text}
          </p>
          <MemoizedStars />
        </div>
      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2 className={twMerge("text-white text-base sm:text-lg mb-2", className)}>
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p className={twMerge("text-[#a9a9a9] text-xs sm:text-sm", className)}>
      {children}
    </p>
  );
};

const Stars = () => {
  const prefersReducedMotion = usePrefersReducedMotion();
  const starPositions = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        top: `${(i * 19 + 7) % 92}%`,
        left: `${(i * 29 + 11) % 96}%`,
        delay: `${(i % 5) * 0.6}s`,
      })),
    []
  );

  return (
    <div className="absolute inset-0 pointer-events-none">
      {starPositions.map((star) => (
        <span
          key={`star-${star.id}`}
          style={{
            top: star.top,
            left: star.left,
            animationDelay: star.delay,
          }}
          className={cn(
            "absolute inline-block w-[2px] h-[2px] bg-white/70 rounded-full z-[1]",
            !prefersReducedMotion && "animate-pulse"
          )}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);

