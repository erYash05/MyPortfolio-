import React from "react";
import { motion } from "motion/react";
import { cn } from "../../../lib/utils";
import { useInView, usePrefersReducedMotion } from "../../utils/usePerformance";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  radiusClassName = "rounded-2xl sm:rounded-3xl",
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  radiusClassName?: string;
  animate?: boolean;
}) => {
  const { ref, inView } = useInView({ rootMargin: "100px 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const shouldAnimate = animate && inView && !prefersReducedMotion;

  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };

  return (
    <div
      ref={ref}
      className={cn("relative p-[2px] sm:p-[3px] group", radiusClassName, containerClassName)}
    >
      {/* Blurred ambient glow layer */}
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] opacity-35 group-hover:opacity-80 blur-md transition-opacity duration-500 pointer-events-none",
          radiusClassName,
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      {/* Sharp gradient border layer matching exact radius */}
      <motion.div
        variants={shouldAnimate ? variants : undefined}
        initial={shouldAnimate ? "initial" : undefined}
        animate={shouldAnimate ? "animate" : undefined}
        transition={
          shouldAnimate
            ? {
                duration: 6,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: shouldAnimate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 z-[1] pointer-events-none",
          radiusClassName,
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]"
        )}
      />

      {/* Inner card with identical border radius and solid background */}
      <div className={cn("relative z-10 w-full h-full", radiusClassName, className)}>
        {children}
      </div>
    </div>
  );
};

export default BackgroundGradient;

