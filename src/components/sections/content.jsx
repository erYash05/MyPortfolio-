"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ColourfulText } from "../ui/text";
import TitleHeader from "../TitleHeader";
import {
  FiCheckCircle,
  FiArrowRight,
  FiArrowLeft,
  FiCpu,
  FiLayers,
  FiCode,
  FiZap,
  FiActivity,
} from "react-icons/fi";

const processMilestones = [
  {
    step: "01",
    phase: "Phase 01 · Strategy & Blueprint",
    title: "Discovery & Architectural Blueprint",
    subtitle: "Deconstructing complexity into a battle-tested technical roadmap.",
    description:
      "We begin by reverse-engineering your project goals, user behaviors, and scalability demands. From defining microservice boundaries to selecting the optimal WebGL render pipelines, every decision is calibrated for velocity and production stability.",
    image: "/images/T1.jpeg",
    tag: "Blueprint & Strategy",
    metrics: { label: "Architecture Readiness", value: "100%" },
    deliverables: [
      "User Journey Mapping & Information Architecture",
      "Full-Stack Technical Spec & Component Tree",
      "Interactive 3D Pipeline & Performance Budget",
    ],
    tools: ["Figma", "System Design", "TypeScript", "Next.js"],
  },
  {
    step: "02",
    phase: "Phase 02 · Design Systems & 3D",
    title: "UI/UX & 3D Spatial Prototyping",
    subtitle: "Crafting fluid visual hierarchy, tactile motion, and 3D scenes.",
    description:
      "Design is more than aesthetics—it is a functional communication engine. We sculpt ergonomic UI layouts, define strict design tokens, and model interactive 3D assets that captivate audiences without sacrificing browser framerates.",
    image: "/images/T3.jpeg",
    tag: "Creative Direction",
    metrics: { label: "Target Framerate", value: "60 FPS" },
    deliverables: [
      "High-Fidelity Interactive Prototypes in Figma",
      "Custom 3D Meshes, Shaders & Camera Choreography",
      "Ergonomic Dark-Mode Design System & Tokens",
    ],
    tools: ["Spline", "Three.js", "Tailwind CSS", "Framer Motion"],
  },
  {
    step: "03",
    phase: "Phase 03 · Engineering & Integration",
    title: "Full-Stack Reactive Engineering",
    subtitle: "Writing modular, performant, and maintainable production code.",
    description:
      "We transform wireframes into lightning-fast, reactive web applications. Leveraging React, Three.js, and modern cloud APIs, we implement fluid state machines, strict type contracts, and instant UI feedback loops.",
    image: "/images/T4.png",
    tag: "Core Engineering",
    metrics: { label: "Build Velocity", value: "Zero Bottlenecks" },
    deliverables: [
      "Modular React Architecture with TypeScript",
      "Seamless Canvas & WebGL Experience Integration",
      "Serverless APIs, Real-Time Sync & Fast Hydration",
    ],
    tools: ["React 19", "Vite", "Node.js", "WebGL / Drei"],
  },
  {
    step: "04",
    phase: "Phase 04 · Optimization & Launch",
    title: "Performance Tuning & Global Launch",
    subtitle: "Relentless speed audits, cross-device QA, and seamless deployment.",
    description:
      "Before release, every asset is compressed, bundle sizes are audited, and WebGL rendering passes are tuned across desktop, tablet, and mobile viewports. We deliver a polished, production-grade product ready for global scale.",
    image: "/images/T5.png",
    tag: "Deployment & Scale",
    metrics: { label: "Lighthouse Score", value: "98+" },
    deliverables: [
      "Automated Cross-Device QA & Responsive Stress Testing",
      "Asset Tree-Shaking, Compression & Lazy-Loading",
      "Global CDN Edge Deployment with CI/CD Pipelines",
    ],
    tools: ["Lighthouse", "Docker", "CI/CD", "Vercel / Cloud Run"],
  },
];

export function StickyScrollRevealDemo() {
  const [activeStep, setActiveStep] = useState(0);
  const current = processMilestones[activeStep];

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % processMilestones.length);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + processMilestones.length) % processMilestones.length);
  };

  return (
    <div className="w-full section-padding relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12">
          <TitleHeader sub="⚡ Engineered For Precision & Impact 🚀" />
          <h2 className="mt-4 sm:mt-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-sans leading-snug">
            ✨ Showcasing <ColourfulText text="Our Process" /> <br />
            From Blueprint to Launch
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
            Explore our methodical, 4-stage development framework engineered to transform ambitious
            ideas into high-performance digital products that scale.
          </p>
        </div>

        {/* Interactive Milestone Navigation Stepper */}
        <div className="mb-6 sm:mb-10">
          {/* Milestone Tabs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4">
            {processMilestones.map((item, idx) => {
              const isActive = activeStep === idx;
              return (
                <button
                  type="button"
                  key={item.step}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative text-left p-3 sm:p-4 rounded-xl sm:rounded-2xl transition-all duration-300 border cursor-pointer ${
                    isActive
                      ? "bg-white/10 border-cyan-400/60 shadow-[0_0_20px_rgba(6,182,212,0.15)]"
                      : "bg-[#111320]/60 border-white/5 hover:border-white/15 hover:bg-white/[0.03]"
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5 sm:mb-2">
                    <span
                      className={`text-[11px] sm:text-xs font-mono font-bold px-2 py-0.5 rounded-md ${
                        isActive
                          ? "bg-cyan-500 text-black font-extrabold"
                          : "bg-white/5 text-neutral-400 group-hover:text-white"
                      }`}
                    >
                      {item.step}
                    </span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider ${
                        isActive ? "text-cyan-300" : "text-neutral-500"
                      }`}
                    >
                      Step 0{idx + 1}
                    </span>
                  </div>
                  <h4
                    className={`text-xs sm:text-sm font-semibold truncate ${
                      isActive ? "text-white" : "text-neutral-300 group-hover:text-white"
                    }`}
                  >
                    {item.title.split("&")[0].trim()}
                  </h4>
                  {/* Active bottom accent line */}
                  {isActive && (
                    <div className="absolute bottom-0 left-3 right-3 h-[2px] bg-gradient-to-r from-cyan-400 via-sky-400 to-emerald-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dual-Stage Interactive Showcase Hub */}
        <div className="bg-[#111322]/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          {/* Subtle Ambient Background Gradient */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Milestone Narrative, Deliverables & Toolkit (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.step}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  {/* Step Kicker */}
                  <div className="flex items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2 sm:mb-3">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    <span>{current.phase}</span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
                    {current.title}
                  </h3>

                  {/* Subtitle */}
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-base font-medium text-cyan-300">
                    {current.subtitle}
                  </p>

                  {/* Description */}
                  <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
                    {current.description}
                  </p>

                  {/* Key Deliverables List */}
                  <div className="mt-5 sm:mt-6 space-y-2">
                    <h5 className="text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-400 mb-1.5">
                      Key Milestones & Artifacts:
                    </h5>
                    {current.deliverables.map((deliv, dIdx) => (
                      <div
                        key={dIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-neutral-200"
                      >
                        <FiCheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tools & Metric Row */}
                  <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4">
                    {/* Tool Badges */}
                    <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                      <span className="text-xs text-neutral-400 mr-1 font-mono">Stack:</span>
                      {current.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-white/5 border border-white/10 text-[11px] sm:text-xs text-neutral-300 font-mono"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Metric Chip */}
                    <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-[11px] sm:text-xs text-cyan-300">
                      <FiActivity className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span className="text-neutral-400">{current.metrics.label}:</span>
                      <strong className="text-white font-bold tabular-nums">{current.metrics.value}</strong>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Column: Responsive Image Showcase Frame (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-black/50 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={current.step}
                    initial={{ opacity: 0, scale: 1.03 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={current.image}
                      alt={current.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                    {/* Top Status Pill */}
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex items-center gap-1.5 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-full bg-black/75 border border-white/15 text-[10px] sm:text-[11px] text-white">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      <span>{current.tag}</span>
                    </div>

                    {/* Top Right Counter */}
                    <div className="absolute top-3 right-3 sm:top-4 sm:right-4 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg bg-black/75 border border-white/15 text-[11px] sm:text-xs font-mono text-cyan-300 font-bold tabular-nums">
                      {current.step} / 04
                    </div>

                    {/* Bottom Image Caption Card */}
                    <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 p-2.5 sm:p-3.5 rounded-xl bg-black/85 border border-white/10">
                      <div className="flex items-center justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">
                            Verified Execution
                          </p>
                          <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                            {current.title}
                          </h5>
                        </div>
                        <span className="text-[11px] font-mono text-emerald-400 font-semibold px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 shrink-0">
                          Active
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Prev / Next Navigation Controls */}
              <div className="mt-4 sm:mt-6 flex items-center justify-between w-full gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="flex items-center gap-1.5 px-3 py-2 sm:px-4 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-xs text-neutral-300 hover:text-white transition-all cursor-pointer shrink-0"
                >
                  <FiArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {processMilestones.map((_, i) => (
                    <button
                      type="button"
                      key={i}
                      onClick={() => setActiveStep(i)}
                      aria-label={`Jump to step ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                        activeStep === i ? "w-5 sm:w-6 bg-cyan-400" : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  className="flex items-center gap-1.5 px-3 py-2 sm:px-4 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-400/40 text-xs text-cyan-300 hover:text-cyan-200 transition-all cursor-pointer font-medium shrink-0"
                >
                  <span>Next Step</span>
                  <FiArrowRight className="w-3.5 h-3.5 text-cyan-400" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StickyScrollRevealDemo;
