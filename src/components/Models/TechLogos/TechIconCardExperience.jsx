import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { Smartphone3D, Instagram3D, UIUX3D } from "./Skill3DModels";
import WebGLErrorBoundary from "../../WebGLErrorBoundary";

const GLTFModel = ({ model }) => {
  const gltf = useGLTF(model.modelPath);

  useEffect(() => {
    if (model.name === "Interactive Developer" && gltf?.scene) {
      gltf.scene.traverse((child) => {
        if (child.isMesh && child.name === "Object_5") {
          child.material = new THREE.MeshStandardMaterial({ color: "white" });
        }
      });
    }
  }, [gltf, model.name]);

  if (!gltf?.scene) return null;

  return (
    <group scale={model.scale} rotation={model.rotation}>
      <primitive object={gltf.scene} />
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
  return (
    <WebGLErrorBoundary fallback={<div className="w-full h-full" />}>
      <Canvas
        gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <spotLight
          position={[10, 15, 10]}
          angle={0.3}
          penumbra={1}
          intensity={2}
        />
        <Environment preset="city" />

        <Float speed={4.5} rotationIntensity={0.6} floatIntensity={0.8}>
          <Suspense fallback={null}>
            <RenderModel model={model} />
          </Suspense>
        </Float>

        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </WebGLErrorBoundary>
  );
};

export default TechIconCardExperience;
