import React, { useState } from "react";
import { motion } from "framer-motion";
import TitleHeader from "../TitleHeader";
import { ColourfulText } from "../ui/text";
import { FiArrowUpRight, FiCheckCircle, FiLayers, FiZap } from "react-icons/fi";

import studioWorkspaceImg from "../../assets/images/y2x_studio_workspace_1791036991194.jpg";
import studioCollabImg from "../../assets/images/y2x_creative_collaboration_1791037007389.jpg";

const AboutUs = () => {
  const [activeStackIndex, setActiveStackIndex] = useState(0);

  const toggleStack = () => {
    setActiveStackIndex((prev) => (prev === 0 ? 1 : 0));
  };

  return (
    <section id="about" className="w-full section-padding relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subtle section kicker */}
        <div className="flex justify-center mb-8">
          <TitleHeader sub="🌐 Creative Technology & Collective Studio 🚀" />
        </div>

        {/* Editorial Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Editorial Narrative & Studio Profile (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Editorial Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
              A little bit <br />
              about <ColourfulText text="Y2X" />
            </h2>

            {/* Paragraph 1 */}
            <p className="mt-8 text-base sm:text-lg text-neutral-300 leading-relaxed font-normal">
              We are <strong className="text-white font-semibold">Y2X</strong>, a creative technology studio and digital engineering collective. We build modern, high-impact digital experiences, scalable web applications, and high-retention brand engines.
            </p>

            {/* Paragraph 2 */}
            <p className="mt-5 text-sm sm:text-base text-neutral-400 leading-relaxed">
              In terms of our approach, we fuse architectural engineering precision with bold visual direction. From interactive 3D WebGL interfaces to conversion-optimized platforms, we collaborate with ambitious businesses and innovative teams to turn complex ideas into digital realities that perform.
            </p>

            {/* Paragraph 3 */}
            <p className="mt-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              Beyond software delivery, we construct cohesive digital ecosystems—pairing fluid UI/UX design systems, targeted performance marketing, and rock-solid cloud infrastructure to sustain long-term digital authority.
            </p>

            {/* Editorial 3-Column Meta Information Block */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {/* Column 1: Studio Focus */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Studio Focus
                </h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li className="text-neutral-300">Creative Web Engineering</li>
                  <li>Cross-Platform Mobile</li>
                  <li>Interactive 3D WebGL</li>
                  <li>UI/UX Design Systems</li>
                  <li>Digital Growth Engines</li>
                </ul>
              </div>

              {/* Column 2: Tech Ecosystem */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Tech Ecosystem
                </h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li className="text-neutral-300">React & Next.js</li>
                  <li>Three.js & Drei</li>
                  <li>Tailwind CSS</li>
                  <li>Node.js & Cloud APIs</li>
                  <li>Framer Motion & GSAP</li>
                </ul>
              </div>

              {/* Column 3: Studio Ethos */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                  Studio Ethos
                </h4>
                <ul className="space-y-1 text-xs text-neutral-400">
                  <li className="text-cyan-400 flex items-center gap-1.5">
                    <span>Precision First</span>
                    <FiArrowUpRight className="w-3 h-3" />
                  </li>
                  <li className="text-neutral-300">Zero Compromise on Speed</li>
                  <li>Human-Centered UX</li>
                  <li>Production Reliability</li>
                  <li>Measurable Outcomes</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Editorial Photo Stack (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center pt-4 lg:pt-8">
            <div
              onClick={toggleStack}
              className="relative w-full max-w-md aspect-[4/3] sm:aspect-[5/4] cursor-pointer group select-none"
              title="Click to interact with our studio photos"
            >
              {/* Layer 1: Ambient Background Depth Shadow */}
              <div className="absolute inset-0 bg-cyan-500/10 rounded-3xl blur-2xl transform scale-95 pointer-events-none" />

              {/* Layer 2: Back Stacked Image Card */}
              <motion.div
                animate={{
                  rotate: activeStackIndex === 0 ? 5 : -4,
                  scale: activeStackIndex === 0 ? 0.94 : 1,
                  x: activeStackIndex === 0 ? 12 : -10,
                  y: activeStackIndex === 0 ? -10 : 8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/15 shadow-2xl bg-[#161826]"
              >
                <img
                  src={studioCollabImg}
                  alt="Y2X Studio Collaboration"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-[1.05] brightness-90 group-hover:brightness-100 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-xs font-mono text-neutral-300 flex items-center justify-between">
                  <span>Collaborative Sprint</span>
                  <span className="text-cyan-400">Y2X Lab</span>
                </div>
              </motion.div>

              {/* Layer 3: Front Primary Stacked Image Card */}
              <motion.div
                animate={{
                  rotate: activeStackIndex === 0 ? -3 : 4,
                  scale: activeStackIndex === 0 ? 1 : 0.94,
                  x: activeStackIndex === 0 ? -6 : 10,
                  y: activeStackIndex === 0 ? 6 : -8,
                }}
                transition={{ type: "spring", stiffness: 260, damping: 25 }}
                className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/20 shadow-2xl bg-[#13141f]"
              >
                <img
                  src={studioWorkspaceImg}
                  alt="Y2X Creative Technology Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter contrast-[1.05] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                {/* Overlaid Editorial Tag on Front Card */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-cyan-400 block mb-1">
                      Studio Environment
                    </span>
                    <h5 className="text-base font-bold text-white tracking-tight leading-tight">
                      Engineering & Design
                    </h5>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-[11px] text-neutral-300 font-mono">
                    0{activeStackIndex + 1} / 02
                  </span>
                </div>
              </motion.div>

              {/* Layer 4: Floating Studio Badge (Corner Overlay) */}
              <div className="absolute -bottom-4 -left-3 sm:-bottom-5 sm:-left-4 z-20 px-3.5 py-2 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-semibold text-white">Y2X Studio</span>
                <span className="text-[10px] text-neutral-400">· Creative Tech</span>
              </div>
            </div>

            {/* Click to flip caption */}
            <div className="mt-8 text-center">
              <button
                onClick={toggleStack}
                className="text-xs text-neutral-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Click photo to switch perspective</span>
                <span className="text-cyan-400">⇄</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
