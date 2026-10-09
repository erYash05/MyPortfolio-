import React, { Suspense, useEffect, useMemo } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Smartphone3D, Instagram3D, UIUX3D } from "./Skill3DModels";
import WebGLErrorBoundary from "../../WebGLErrorBoundary";
import { useInView, usePrefersReducedMotion } from "../../../utils/usePerformance";

const GLTFModel = ({ model }) => {
  const gltf = useGLTF(model.modelPath);
  const clonedScene = useMemo(
    () => (gltf?.scene ? gltf.scene.clone() : null),
    [gltf?.scene]
  );

  useEffect(() => {
    if (model.name === "Interactive Developer" && clonedScene) {
      clonedScene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [clonedScene, model.name]);

  if (!clonedScene) return null;

  return (
    <group scale={model.scale} rotation={model.rotation}>
      <primitive object={clonedScene} />
    </group>
  );
};

const RenderModel = ({ model }) => {
  if (model.customType === "smartphone") {
    return <Smartphone3D />;
  }
  if (model.customType === "instagram") {
    return <Instagram3D />;
  }
  if (model.customType === "uiux") {
    return <UIUX3D />;
  }
  if (model.modelPath) {
    return <GLTFModel model={model} />;
  }
  return null;
};

const TechIconCardExperience = ({ model }) => {
  const { ref, inView, hasBeenInView } = useInView({ rootMargin: "200px 0px" });
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div ref={ref} className="w-full h-full">
      {hasBeenInView ? (
        <WebGLErrorBoundary fallback={<div className="w-full h-full" />}>
          <Canvas
            frameloop={inView && !prefersReducedMotion ? "always" : "demand"}
            dpr={[1, 1.5]}
            gl={{
              alpha: true,
              antialias: true,
              powerPreference: "high-performance",
            }}
            camera={{ position: [0, 0, 5], fov: 45 }}
            style={{ background: "transparent", touchAction: "pan-y" }}
          >
            <ambientLight intensity={0.9} />
            <hemisphereLight
              skyColor="#e0f2fe"
              groundColor="#1e1b4b"
              intensity={1.1}
            />
            <directionalLight position={[5, 5, 5]} intensity={1.8} />
            <directionalLight position={[-5, 3, -3]} intensity={0.9} color="#38bdf8" />
            <spotLight
              position={[8, 12, 8]}
              angle={0.35}
              penumbra={1}
              intensity={1.5}
            />

            <Float
              speed={prefersReducedMotion ? 0 : 3.5}
              rotationIntensity={prefersReducedMotion ? 0 : 0.5}
              floatIntensity={prefersReducedMotion ? 0 : 0.7}
            >
              <Suspense fallback={null}>
                <RenderModel model={model} />
              </Suspense>
            </Float>

            <OrbitControls enableZoom={false} enablePan={false} />
          </Canvas>
        </WebGLErrorBoundary>
      ) : (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-6 h-6 rounded-full border-2 border-cyan-400/40 border-t-transparent animate-spin" />
        </div>
      )}
    </div>
  );
};

export default React.memo(TechIconCardExperience);

