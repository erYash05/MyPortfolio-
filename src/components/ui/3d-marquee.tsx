"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";
import { useInView, usePrefersReducedMotion } from "../../utils/usePerformance";

export const ThreeDMarquee = ({
  images,
  className,
}: {
  images: string[];
  className?: string;
}) => {
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = inView && !prefersReducedMotion;

  // Split the images array into 4 equal parts
  const chunkSize = Math.ceil(images.length / 4);
  const chunks = Array.from({ length: 4 }, (_, colIndex) => {
    const start = colIndex * chunkSize;
    return images.slice(start, start + chunkSize);
  });

  return (
    <div
      ref={ref}
      className={cn(
        "mx-auto block h-[260px] xs:h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden rounded-2xl relative",
        className
      )}
    >
      <div className="flex size-full items-center justify-center">
        <div className="size-[1320px] sm:size-[1520px] lg:size-[1720px] shrink-0 scale-[0.38] xs:scale-[0.44] sm:scale-[0.65] md:scale-75 lg:scale-95">
          <div
            style={{
              transform: "rotateX(55deg) rotateY(0deg) rotateZ(-45deg)",
            }}
            className="relative top-72 sm:top-80 lg:top-96 right-[46%] sm:right-[50%] grid size-full origin-top-left grid-cols-4 gap-6 sm:gap-8 transform-3d"
          >
            {chunks.map((subarray, colIndex) => (
              <motion.div
                animate={
                  shouldAnimate
                    ? { y: colIndex % 2 === 0 ? 80 : -80 }
                    : { y: 0 }
                }
                transition={
                  shouldAnimate
                    ? {
                        duration: colIndex % 2 === 0 ? 12 : 16,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                      }
                    : { duration: 0 }
                }
                key={colIndex + "marquee"}
                className="flex flex-col items-start gap-6 sm:gap-8 will-change-transform"
              >
                <GridLineVertical className="-left-4" offset="80px" />
                {subarray.map((image, imageIndex) => (
                  <div className="relative" key={`${colIndex}-${imageIndex}`}>
                    <GridLineHorizontal className="-top-4" offset="20px" />
                    <img
                      src={image}
                      alt={`Project showcase ${colIndex * chunkSize + imageIndex + 1}`}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      className="aspect-[970/700] rounded-lg object-cover ring ring-gray-950/5 transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[#161826]"
                      width={485}
                      height={350}
                    />
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


const GridLineHorizontal = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "1px",
          "--width": "5px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "200px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute left-[calc(var(--offset)/2*-1)] h-[var(--height)] w-[calc(100%+var(--offset))]",
        "bg-[linear-gradient(to_right,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_left,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_right,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_right,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};

const GridLineVertical = ({
  className,
  offset
}) => {
  return (
    <div
      style={
        {
          "--background": "#ffffff",
          "--color": "rgba(0, 0, 0, 0.2)",
          "--height": "5px",
          "--width": "1px",
          "--fade-stop": "90%",

          //-100px if you want to keep the line inside
          "--offset": offset || "150px",

          "--color-dark": "rgba(255, 255, 255, 0.2)",
          maskComposite: "exclude"
        }
      }
      className={cn(
        "absolute top-[calc(var(--offset)/2*-1)] h-[calc(100%+var(--offset))] w-[var(--width)]",
        "bg-[linear-gradient(to_bottom,var(--color),var(--color)_50%,transparent_0,transparent)]",
        "[background-size:var(--width)_var(--height)]",
        "[mask:linear-gradient(to_top,var(--background)_var(--fade-stop),transparent),_linear-gradient(to_bottom,var(--background)_var(--fade-stop),transparent),_linear-gradient(black,black)]",
        "[mask-composite:exclude]",
        "z-30",
        "dark:bg-[linear-gradient(to_bottom,var(--color-dark),var(--color-dark)_50%,transparent_0,transparent)]",
        className
      )}></div>
  );
};
