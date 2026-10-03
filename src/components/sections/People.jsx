import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleHeader from "../TitleHeader";
import { ColourfulText } from "../ui/text";
import {
  FiArrowRight,
  FiCode,
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiRepeat,
  FiTwitter,
  FiUserCheck,
} from "react-icons/fi";

import yashPortrait from "../../assets/images/profile_yash_portrait_1791035586159.jpg";
import sarahPortrait from "../../assets/images/profile_sarah_portrait_1791035599754.jpg";
import marcusPortrait from "../../assets/images/profile_marcus_portrait_1791035611411.jpg";

export const peopleData = [
  {
    id: "yash-suryavanshi",
    name: "Yash Suryavanshi",
    role: "Frontend Developer & 3D Specialist",
    tagline: "Bridging the gap between creative visual artistry and production-grade engineering.",
    bio: "Obsessed with interactive web systems, WebGL rendering, and fluid micro-interactions. Over the past 3+ years, I have architected high-performance digital products that blend immersive 3D experiences with rigorous engineering standards to help modern brands stand out.",
    image: yashPortrait,
    stats: [
      { label: "Experience", value: "3+ Years" },
      { label: "Projects Delivered", value: "24+" },
      { label: "Client Satisfaction", value: "99%" },
    ],
    skills: [
      "React & Next.js",
      "Three.js & WebGL",
      "Tailwind CSS",
      "GSAP & Framer Motion",
      "TypeScript & Performance Tuning",
    ],
    quote: "Every pixel must carry intent, and every interaction must feel naturally human.",
    socials: {
      github: "https://github.com/erYashSurywanshi",
      linkedin: "https://www.linkedin.com/in/yash-surywanshi-81714a366/",
      twitter: "https://x.com/Su_yash05",
    },
    location: "Global / Remote",
    status: "Available for High-Impact Projects",
  },
  {
    id: "sarah-chen",
    name: "Sarah Chen",
    role: "Lead UI/UX Designer",
    tagline: "Crafting intuitive digital ecosystems that simplify complexity and captivate audiences.",
    bio: "With a background in cognitive psychology and visual communications, Sarah transforms complex customer workflows into elegant, friction-free interfaces. She specializes in design systems, accessible typography, and interactive prototyping from zero to scale.",
    image: sarahPortrait,
    stats: [
      { label: "Design Systems", value: "18+" },
      { label: "Global Clients", value: "30+" },
      { label: "User Retention Lift", value: "+42%" },
    ],
    skills: [
      "Figma Systems & Tokens",
      "User Journey Mapping",
      "Interaction Architecture",
      "Rapid Wireframing",
      "WCAG 2.1 AA Accessibility",
    ],
    quote: "Great design is not just what looks good—it is what removes friction effortlessly.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://x.com/",
      instagram: "https://instagram.com/",
    },
    location: "San Francisco / Remote",
    status: "Leading Design Sprints",
  },
  {
    id: "marcus-vance",
    name: "Marcus Vance",
    role: "Digital Marketing & Growth Specialist",
    tagline: "Engineering measurable customer acquisition loops and organic brand authority.",
    bio: "Marcus drives digital visibility and revenue growth through omnichannel performance marketing, deep technical SEO, and compelling content strategy. He aligns paid and organic funnels to build scalable brand equity and sustainable inbound pipelines.",
    image: marcusPortrait,
    stats: [
      { label: "Ad Spend Managed", value: "$1.4M+" },
      { label: "Avg. ROAS", value: "4.8x" },
      { label: "Organic Search Growth", value: "+210%" },
    ],
    skills: [
      "Technical SEO & Content Hubs",
      "Paid Search & Social Campaigns",
      "Conversion Rate Optimization (CRO)",
      "Omnichannel Attribution",
      "Analytics & GA4 Architecture",
    ],
    quote: "Visibility without conversion is vanity; real growth is measured in authentic engagement.",
    socials: {
      linkedin: "https://www.linkedin.com/",
      twitter: "https://x.com/",
      github: "https://github.com/",
    },
    location: "New York / Remote",
    status: "Scaling Strategic Campaigns",
  },
];

const People = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const activePerson = peopleData[currentIndex];
  const nextPerson1 = peopleData[(currentIndex + 1) % peopleData.length];
  const nextPerson2 = peopleData[(currentIndex + 2) % peopleData.length];

  const handleNextPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % peopleData.length);
  };

  const handleSelectPerson = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section id="about" className="w-full section-padding relative z-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <TitleHeader sub="👥 Creative Leadership & Profiles 🌟" />
          <h2 className="mt-6 text-2xl md:text-4xl lg:text-5xl font-extrabold text-white font-sans leading-snug">
            A Little Bit About <ColourfulText text="Our Team" /> <br />
            Behind Every Launch
          </h2>
          <p className="mt-4 max-w-2xl text-neutral-400 text-sm md:text-base">
            Click the card stack or select a team member below to cycle
            through our multidisciplinary leads and discover our approach to
            building next-generation digital products.
          </p>
        </div>

        {/* Profile Tabs Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {peopleData.map((person, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={person.id}
                onClick={() => handleSelectPerson(idx)}
                className={`flex items-center gap-2.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-white text-black font-semibold shadow-lg shadow-white/10"
                    : "bg-white/5 text-neutral-300 hover:bg-white/10 hover:text-white border border-white/5"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    isActive ? "bg-cyan-500" : "bg-neutral-500"
                  }`}
                />
                <span className="truncate">{person.name}</span>
                <span className="hidden sm:inline text-[11px] opacity-60">
                  / {person.role.split("&")[0].trim()}
                </span>
              </button>
            );
          })}
        </div>

        {/* Editorial Split Layout */}
        <div className="bg-[#12131e]/90 border border-white/10 rounded-3xl p-6 sm:p-8 lg:p-12 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Column 1: Interactive Stack of Cards (Cards clearly peek out underneath) */}
            <div className="lg:col-span-5 flex flex-col items-center justify-center">
              <div
                onClick={handleNextPerson}
                className="group relative w-full max-w-[300px] sm:max-w-[340px] aspect-[3/4] cursor-pointer select-none my-6 mx-auto"
                title="Click card stack to view next profile"
              >
                {/* Ambient Radial Glow */}
                <div className="absolute inset-0 bg-cyan-500/20 rounded-3xl blur-3xl transform scale-110 pointer-events-none" />

                {/* Card 3: Deepest under-card (peeks out visibly to TOP-RIGHT) */}
                <motion.div
                  key={`stack-back-2-${nextPerson2.id}`}
                  animate={{
                    x: 24,
                    y: -22,
                    rotate: 8,
                    scale: 0.94,
                  }}
                  whileHover={{
                    x: 32,
                    y: -28,
                    rotate: 11,
                    scale: 0.96,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-amber-400/50 bg-[#1a1829] shadow-[0_20px_50px_rgba(0,0,0,0.85)] z-0"
                >
                  <img
                    src={nextPerson2.image}
                    alt={nextPerson2.name}
                    className="w-full h-full object-cover object-top filter brightness-80 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />

                  {/* Peeking Badge on top right of deepest card */}
                  <div className="absolute top-3 right-3 px-2 py-1 rounded-md bg-amber-400 text-black text-[10px] font-bold font-mono shadow-md">
                    03 · {nextPerson2.name.split(" ")[0]}
                  </div>
                </motion.div>

                {/* Card 2: Middle under-card (peeks out visibly to BOTTOM-LEFT) */}
                <motion.div
                  key={`stack-back-1-${nextPerson1.id}`}
                  animate={{
                    x: -22,
                    y: 16,
                    rotate: -6,
                    scale: 0.97,
                  }}
                  whileHover={{
                    x: -30,
                    y: 22,
                    rotate: -9,
                    scale: 0.99,
                  }}
                  transition={{ type: "spring", stiffness: 280, damping: 22 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-purple-400/60 bg-[#161726] shadow-[0_25px_60px_rgba(0,0,0,0.9)] z-10"
                >
                  <img
                    src={nextPerson1.image}
                    alt={nextPerson1.name}
                    className="w-full h-full object-cover object-top filter brightness-90 contrast-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

                  {/* Peeking Badge on left of middle card */}
                  <div className="absolute bottom-4 left-3 px-2 py-1 rounded-md bg-purple-500 text-white text-[10px] font-bold font-mono shadow-md">
                    02 · {nextPerson1.name.split(" ")[0]}
                  </div>
                </motion.div>

                {/* Card 1: Front Active Card */}
                <motion.div
                  key={`stack-front-${activePerson.id}`}
                  initial={{ scale: 0.92, y: 15, opacity: 0.8 }}
                  animate={{
                    x: 0,
                    y: 0,
                    rotate: -1,
                    scale: 1,
                    opacity: 1,
                  }}
                  whileHover={{
                    rotate: 0,
                    scale: 1.02,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-cyan-400/80 bg-[#11121d] shadow-[0_30px_70px_rgba(0,0,0,0.95)] z-20 group-hover:border-cyan-300 transition-colors"
                >
                  <img
                    src={activePerson.image}
                    alt={activePerson.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Scrim gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-transparent" />

                  {/* Top Stack Indicator Badge */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/75 backdrop-blur-md border border-white/20 text-[11px] text-white font-medium shadow-lg">
                    <FiRepeat className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
                    <span>Click stack to cycle</span>
                    <span className="text-neutral-400">·</span>
                    <span className="font-mono text-cyan-300 font-bold">
                      0{currentIndex + 1} / 0{peopleData.length}
                    </span>
                  </div>

                  {/* Front Card Overlay Details */}
                  <div className="absolute bottom-4 left-4 right-4 z-10 p-4 rounded-xl bg-black/85 backdrop-blur-md border border-white/15 shadow-xl">
                    <h4 className="text-lg font-bold text-white leading-tight">
                      {activePerson.name}
                    </h4>
                    <p className="text-xs text-cyan-300 font-medium mt-0.5">
                      {activePerson.role}
                    </p>
                    <div className="mt-2 flex items-center gap-2 text-[11px] text-neutral-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span>{activePerson.status}</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Click prompt beneath image */}
              <button
                onClick={handleNextPerson}
                className="mt-6 flex items-center gap-2 text-xs text-neutral-400 hover:text-cyan-300 transition-colors cursor-pointer group"
              >
                <span>Cycle through stacked cards</span>
                <FiArrowRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Column 2: Editorial Text Content & Career Narrative */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`content-${activePerson.id}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Persona Kicker & Designation */}
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    <FiUserCheck className="w-4 h-4" />
                    <span>Core Discipline</span>
                    <span className="text-neutral-500">·</span>
                    <span className="text-neutral-400">{activePerson.location}</span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                    {activePerson.name}
                  </h3>

                  <p className="mt-1 text-base sm:text-lg font-semibold text-cyan-300">
                    {activePerson.role}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-neutral-300 italic font-serif leading-relaxed border-l-2 border-cyan-400/50 pl-4 py-1">
                    "{activePerson.quote}"
                  </p>

                  {/* Biography Prose */}
                  <p className="mt-5 text-sm sm:text-base text-neutral-300 leading-relaxed">
                    {activePerson.bio}
                  </p>

                  {/* Quantitative Track Record Metrics */}
                  <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
                    {activePerson.stats.map((stat, sIdx) => (
                      <div key={sIdx} className="text-center sm:text-left">
                        <div className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums">
                          {stat.value}
                        </div>
                        <div className="text-[11px] sm:text-xs text-neutral-400 mt-0.5">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Core Competencies */}
                  <div className="mt-8">
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-2">
                      <FiCode className="w-3.5 h-3.5 text-cyan-400" />
                      Key Competencies & Toolkit
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {activePerson.skills.map((skill, skIdx) => (
                        <span
                          key={skIdx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Connect & Social Channels */}
                  <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-neutral-400 font-medium">
                        Connect with {activePerson.name.split(" ")[0]}:
                      </span>
                      {activePerson.socials.github && (
                        <a
                          href={activePerson.socials.github}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                          aria-label="GitHub profile"
                        >
                          <FiGithub className="w-4 h-4" />
                        </a>
                      )}
                      {activePerson.socials.linkedin && (
                        <a
                          href={activePerson.socials.linkedin}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                          aria-label="LinkedIn profile"
                        >
                          <FiLinkedin className="w-4 h-4" />
                        </a>
                      )}
                      {activePerson.socials.twitter && (
                        <a
                          href={activePerson.socials.twitter}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                          aria-label="Twitter profile"
                        >
                          <FiTwitter className="w-4 h-4" />
                        </a>
                      )}
                      {activePerson.socials.instagram && (
                        <a
                          href={activePerson.socials.instagram}
                          target="_blank"
                          rel="noreferrer"
                          className="w-8 h-8 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors"
                          aria-label="Instagram profile"
                        >
                          <FiInstagram className="w-4 h-4" />
                        </a>
                      )}
                    </div>

                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <span>Collaborate With Us</span>
                      <FiArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
