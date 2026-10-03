import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox } from "@react-three/drei";
import * as THREE from "three";

// 3D Smartphone Model for "App Development"
export const Smartphone3D = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.25;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.6) * 0.1;
    }
  });

  return (
    <group ref={groupRef} scale={1.2}>
      {/* Phone Outer Chassis */}
      <RoundedBox args={[1.5, 2.8, 0.16]} radius={0.14} smoothness={4}>
        <meshStandardMaterial
          color="#12131a"
          metalness={0.9}
          roughness={0.2}
        />
      </RoundedBox>

      {/* Screen Bezel / Edge Frame */}
      <RoundedBox position={[0, 0, 0.082]} args={[1.4, 2.7, 0.02]} radius={0.12} smoothness={4}>
        <meshStandardMaterial
          color="#050608"
          roughness={0.1}
          metalness={0.8}
        />
      </RoundedBox>

      {/* Inner Active Screen */}
      <mesh position={[0, 0, 0.095]}>
        <planeGeometry args={[1.32, 2.58]} />
        <meshStandardMaterial
          color="#0d1527"
          roughness={0.2}
          metalness={0.1}
        />
      </mesh>

      {/* Dynamic Island / Camera Notch */}
      <RoundedBox position={[0, 1.15, 0.106]} args={[0.38, 0.09, 0.02]} radius={0.04} smoothness={4}>
        <meshBasicMaterial color="#000000" />
      </RoundedBox>

      {/* Screen UI Card 1 (Hero Mobile App Widget) */}
      <RoundedBox position={[0, 0.45, 0.106]} args={[1.15, 0.9, 0.02]} radius={0.06} smoothness={3}>
        <meshStandardMaterial
          color="#1d2847"
          emissive="#2563eb"
          emissiveIntensity={0.25}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Mini UI elements inside Card 1 */}
      <mesh position={[-0.32, 0.65, 0.12]}>
        <circleGeometry args={[0.1, 16]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>
      <mesh position={[0.1, 0.67, 0.12]}>
        <planeGeometry args={[0.5, 0.04]} />
        <meshBasicMaterial color="#93c5fd" />
      </mesh>
      <mesh position={[0.05, 0.58, 0.12]}>
        <planeGeometry args={[0.4, 0.03]} />
        <meshBasicMaterial color="#64748b" />
      </mesh>

      {/* Screen UI Card 2 (Bottom Grid Widget A) */}
      <RoundedBox position={[-0.31, -0.35, 0.106]} args={[0.52, 0.55, 0.02]} radius={0.05} smoothness={3}>
        <meshStandardMaterial
          color="#1f2937"
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Screen UI Card 3 (Bottom Grid Widget B) */}
      <RoundedBox position={[0.31, -0.35, 0.106]} args={[0.52, 0.55, 0.02]} radius={0.05} smoothness={3}>
        <meshStandardMaterial
          color="#1f2937"
          emissive="#ec4899"
          emissiveIntensity={0.2}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Bottom Home Indicator Bar */}
      <RoundedBox position={[0, -1.18, 0.106]} args={[0.45, 0.03, 0.01]} radius={0.015} smoothness={2}>
        <meshBasicMaterial color="#e2e8f0" />
      </RoundedBox>

      {/* Rear Camera Bump */}
      <RoundedBox position={[-0.38, 0.9, -0.1]} args={[0.52, 0.52, 0.06]} radius={0.08} smoothness={3}>
        <meshStandardMaterial color="#1a1c24" metalness={0.8} roughness={0.3} />
      </RoundedBox>
    </group>
  );
};

// 3D Instagram / Social Media Model
export const Instagram3D = () => {
  const groupRef = useRef();

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.9) * 0.35;
      groupRef.current.rotation.x = Math.cos(state.clock.elapsedTime * 0.7) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.1}>
      {/* Outer Squircle Camera Body with Instagram Gradient Color */}
      <RoundedBox args={[2.2, 2.2, 0.35]} radius={0.55} smoothness={6}>
        <meshStandardMaterial
          color="#d62976"
          emissive="#962fbf"
          emissiveIntensity={0.3}
          metalness={0.5}
          roughness={0.25}
        />
      </RoundedBox>

      {/* Front Recessed Plate */}
      <RoundedBox position={[0, 0, 0.12]} args={[2.0, 2.0, 0.15]} radius={0.48} smoothness={5}>
        <meshStandardMaterial
          color="#e1306c"
          emissive="#fa7e1e"
          emissiveIntensity={0.2}
          metalness={0.3}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Main Outer Lens Ring */}
      <mesh position={[0, 0, 0.22]}>
        <torusGeometry args={[0.62, 0.08, 16, 64]} />
        <meshStandardMaterial
          color="#ffffff"
          metalness={0.9}
          roughness={0.1}
          emissive="#ffffff"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Center Lens Glass */}
      <mesh position={[0, 0, 0.2]}>
        <cylinderGeometry args={[0.48, 0.48, 0.08, 32]} rotation={[Math.PI / 2, 0, 0]} />
        <meshStandardMaterial
          color="#180b2c"
          metalness={0.95}
          roughness={0.05}
        />
      </mesh>

      {/* Inner Lens Reflection Aperture */}
      <mesh position={[0.1, 0.1, 0.25]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#38bdf8"
          emissiveIntensity={0.8}
          roughness={0.1}
        />
      </mesh>

      {/* Camera Flash Dot */}
      <mesh position={[0.62, 0.62, 0.22]}>
        <sphereGeometry args={[0.12, 16, 16]} />
        <meshStandardMaterial
          color="#ffffff"
          emissive="#ffffff"
          emissiveIntensity={0.9}
        />
      </mesh>

      {/* Ambient Floating Orbit Ring */}
      <mesh rotation={[Math.PI / 3, Math.PI / 4, 0]}>
        <torusGeometry args={[1.55, 0.02, 16, 64]} />
        <meshStandardMaterial
          color="#fccc63"
          emissive="#fa7e1e"
          emissiveIntensity={0.6}
          roughness={0.2}
        />
      </mesh>
    </group>
  );
};

// 3D UI/UX Design Model (Artboard, Wireframe Layouts & Stylized Cursor)
export const UIUX3D = () => {
  const groupRef = useRef();
  const cursorRef = useRef();

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * 0.7) * 0.25;
      groupRef.current.rotation.x = 0.15 + Math.cos(t * 0.5) * 0.1;
    }
    if (cursorRef.current) {
      cursorRef.current.position.x = 0.4 + Math.sin(t * 1.5) * 0.18;
      cursorRef.current.position.y = -0.2 + Math.cos(t * 1.8) * 0.15;
    }
  });

  return (
    <group ref={groupRef} scale={1.15}>
      {/* Design Artboard / Canvas Backdrop */}
      <RoundedBox args={[2.5, 1.8, 0.1]} radius={0.1} smoothness={4}>
        <meshStandardMaterial
          color="#13141f"
          metalness={0.7}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Artboard Surface Screen */}
      <mesh position={[0, 0, 0.052]}>
        <planeGeometry args={[2.35, 1.65]} />
        <meshStandardMaterial
          color="#1a1c2d"
          roughness={0.4}
        />
      </mesh>

      {/* UI Header Navigation Bar */}
      <RoundedBox position={[0, 0.65, 0.07]} args={[2.1, 0.2, 0.02]} radius={0.03} smoothness={2}>
        <meshStandardMaterial
          color="#29304a"
          emissive="#3b82f6"
          emissiveIntensity={0.2}
        />
      </RoundedBox>

      {/* UI Logo Block */}
      <mesh position={[-0.85, 0.65, 0.09]}>
        <planeGeometry args={[0.2, 0.08]} />
        <meshBasicMaterial color="#38bdf8" />
      </mesh>

      {/* Nav Link Indicators */}
      <mesh position={[0.4, 0.65, 0.09]}>
        <planeGeometry args={[0.15, 0.03]} />
        <meshBasicMaterial color="#94a3b8" />
      </mesh>
      <mesh position={[0.65, 0.65, 0.09]}>
        <planeGeometry args={[0.15, 0.03]} />
        <meshBasicMaterial color="#94a3b8" />
      </mesh>

      {/* Hero Banner Component in Artboard */}
      <RoundedBox position={[-0.35, 0.15, 0.07]} args={[1.35, 0.62, 0.02]} radius={0.04} smoothness={2}>
        <meshStandardMaterial
          color="#2e1065"
          emissive="#a855f7"
          emissiveIntensity={0.35}
        />
      </RoundedBox>

      {/* Sidebar Tool Palette Widget */}
      <RoundedBox position={[0.75, 0.05, 0.07]} args={[0.55, 0.82, 0.02]} radius={0.04} smoothness={2}>
        <meshStandardMaterial
          color="#064e3b"
          emissive="#10b981"
          emissiveIntensity={0.3}
        />
      </RoundedBox>

      {/* Bottom Split Cards */}
      <RoundedBox position={[-0.68, -0.45, 0.07]} args={[0.65, 0.38, 0.02]} radius={0.03} smoothness={2}>
        <meshStandardMaterial color="#1e293b" emissive="#0ea5e9" emissiveIntensity={0.25} />
      </RoundedBox>
      <RoundedBox position={[-0.01, -0.45, 0.07]} args={[0.65, 0.38, 0.02]} radius={0.03} smoothness={2}>
        <meshStandardMaterial color="#1e293b" emissive="#f59e0b" emissiveIntensity={0.25} />
      </RoundedBox>

      {/* Stylized 3D Vector Cursor Arrow */}
      <group ref={cursorRef} position={[0.3, -0.15, 0.16]} rotation={[0, 0, -Math.PI / 6]}>
        <mesh>
          <coneGeometry args={[0.16, 0.38, 3]} rotation={[0, 0, Math.PI]} />
          <meshStandardMaterial
            color="#ec4899"
            emissive="#f43f5e"
            emissiveIntensity={0.8}
            metalness={0.6}
            roughness={0.2}
          />
        </mesh>
      </group>
    </group>
  );
};
