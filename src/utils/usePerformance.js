import { useState, useEffect, useRef } from "react";

/**
 * Tracks whether a DOM element is within (or near) the viewport.
 * Used to pause WebGL render loops, canvas animations, and intervals when offscreen,
 * and to lazy-mount heavy 3D/Spline scenes only when needed.
 */
export function useInView({ rootMargin = "150px 0px", threshold = 0, once = false } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  const [hasBeenInView, setHasBeenInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setInView(true);
      setHasBeenInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
        setInView(isIntersecting);
        if (isIntersecting) {
          setHasBeenInView(true);
          if (once) {
            observer.unobserve(node);
          }
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin, threshold, once]);

  return { ref, inView, hasBeenInView };
}

/**
 * Respects user OS/browser prefers-reduced-motion setting.
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window === "undefined" || !window.matchMedia) return false;
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = (e) => setPrefersReducedMotion(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return prefersReducedMotion;
}
