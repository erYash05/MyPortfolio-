import React, { useRef, useEffect, useState } from "react";
import { Application } from "@splinetool/runtime";
import { useInView } from "../utils/usePerformance";

const SafeSpline = ({ scene, className = "", style = {}, onLoad }) => {
  const { ref: inViewRef, hasBeenInView } = useInView({
    rootMargin: "250px 0px",
    once: true,
  });
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const appRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Merge refs
  const setContainerRefs = (node) => {
    containerRef.current = node;
    inViewRef.current = node;
  };

  useEffect(() => {
    if (!hasBeenInView) return;

    let isMounted = true;
    let splineApp = null;

    const loadScene = async () => {
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas) return;

      const initialWidth = container?.clientWidth || 600;
      const initialHeight = container?.clientHeight || 360;
      canvas.width = Math.max(initialWidth, 100);
      canvas.height = Math.max(initialHeight, 100);

      try {
        splineApp = new Application(canvas, {
          renderer: "webgl",
        });
        appRef.current = splineApp;

        await splineApp.load(scene);

        if (!isMounted) {
          try {
            splineApp.dispose();
          } catch {
            // Ignore unmount race
          }
          return;
        }

        setIsLoading(false);
        if (onLoad) {
          onLoad(splineApp);
        }
      } catch (err) {
        console.warn("Spline load notice (handled):", err?.message || err);
        if (isMounted) {
          setIsLoading(false);
          setHasError(true);
        }
      }
    };

    loadScene();

    return () => {
      isMounted = false;
      if (splineApp) {
        try {
          splineApp.dispose();
        } catch {
          // Swallow any dispose error on unmount
        }
        appRef.current = null;
      }
    };
  }, [scene, hasBeenInView]);

  return (
    <div
      ref={setContainerRefs}
      className={`relative w-full h-full overflow-hidden ${className}`}
      style={style}
    >
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="w-8 h-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin opacity-70" />
        </div>
      )}
      {hasBeenInView && (
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "100%",
            display: hasError ? "none" : "block",
            touchAction: "pan-y",
          }}
        />
      )}
      {hasError && (
        <div className="w-full h-full flex flex-col items-center justify-center text-xs text-neutral-400 p-4 text-center">
          <p className="font-medium text-neutral-300">Interactive 3D Experience</p>
        </div>
      )}
    </div>
  );
};

export default React.memo(SafeSpline);

