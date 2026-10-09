import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";
import { OrbitControls } from "@react-three/drei";
import { Room } from "./Room";
import HeroLight from "./HeroLight";
import Particles from "./Particles";
import WebGLErrorBoundary from "../WebGLErrorBoundary";
import { useInView, usePrefersReducedMotion } from "../../utils/usePerformance";

const HeroExperience = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const prefersReducedMotion = usePrefersReducedMotion();
  const { ref, inView } = useInView({ rootMargin: "200px 0px" });

  const fallbackUI = (
    <div className="w-full h-full flex items-center justify-center p-6">
      <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-[#161829] to-[#0e0e14] flex items-center justify-center shadow-2xl">
        <img
          src="/images/project1.png"
          alt="3D Workspace Preview"
          className="w-full h-full object-cover opacity-80"
          loading="eager"
        />
      </div>
    </div>
  );

  return (
    <div ref={ref} className="w-full h-full relative">
      <WebGLErrorBoundary fallback={fallbackUI}>
        <Canvas
          frameloop={inView ? "always" : "never"}
          dpr={isMobile ? [1, 1.25] : [1, 1.5]}
          gl={{
            powerPreference: "high-performance",
            antialias: !isMobile,
          }}
          camera={{ position: [0, 0, 14], fov: 45 }}
          style={{ width: "100%", height: "100%", touchAction: "pan-y" }}
        >
          <OrbitControls
            enablePan={false}
            enableZoom={!isTablet}
            enableRotate={!prefersReducedMotion}
            maxDistance={20}
            minDistance={5}
            minPolarAngle={Math.PI / 5}
            maxPolarAngle={Math.PI / 2}
          />
          <HeroLight />
          {!prefersReducedMotion && (
            <Particles count={isMobile ? 35 : 80} />
          )}
          <group
            scale={isMobile ? 0.78 : isTablet ? 0.88 : 1}
            position={[0, isMobile ? -2.8 : -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Suspense fallback={null}>
              <Room enableBloom={!isMobile && !prefersReducedMotion} />
            </Suspense>
          </group>
        </Canvas>
      </WebGLErrorBoundary>
    </div>
  );
};

export default React.memo(HeroExperience);

