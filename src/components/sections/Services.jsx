import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TitleHeader from "../TitleHeader";
import { ColourfulText } from "../ui/text";
import {
  FiGlobe,
  FiSmartphone,
  FiShare2,
  FiTrendingUp,
  FiLayers,
  FiSearch,
  FiTool,
  FiCpu,
  FiArrowRight,
  FiCheckCircle,
  FiX,
  FiSend,
} from "react-icons/fi";

export const servicesData = [
  {
    id: "web-dev",
    number: "01",
    name: "Web Development",
    shortDesc: "High-performance, responsive websites built with modern frameworks and scalable architecture.",
    icon: FiGlobe,
    accent: "from-blue-500 to-cyan-400",
    glowColor: "rgba(56, 189, 248, 0.15)",
    tag: "Core Engineering",
    details: [
      "Modern responsive websites with pixel-perfect layouts",
      "Business & corporate brand websites",
      "Interactive portfolio & agency websites",
      "E-commerce & custom online store architectures",
      "Full-stack web applications with robust backend APIs",
      "SEO-friendly semantic architecture & SSR/SSG",
      "Mobile-first development & performance optimization",
    ],
    timeline: "1-4 Weeks Average",
    technologies: ["React", "Next.js", "Node.js", "Tailwind CSS", "TypeScript"],
  },
  {
    id: "app-dev",
    number: "02",
    name: "App Development",
    shortDesc: "Native and cross-platform mobile applications engineered for seamless user flow and fluid responsiveness.",
    icon: FiSmartphone,
    accent: "from-purple-500 to-indigo-400",
    glowColor: "rgba(168, 85, 247, 0.15)",
    tag: "Mobile Ecosystem",
    details: [
      "Android & iOS mobile applications",
      "Cross-platform development with unified codebases",
      "Modern, fluid UI with intuitive gesture handling",
      "High-speed REST & GraphQL API integration",
      "Secure authentication, biometric logins & OAuth",
      "Real-time database sync & offline data caching",
      "End-to-end backend integration & push notifications",
    ],
    timeline: "2-6 Weeks Average",
    technologies: ["React Native", "Flutter", "Firebase", "Node.js", "REST APIs"],
  },
  {
    id: "social-media",
    number: "03",
    name: "Social Media Management",
    shortDesc: "Strategic visual storytelling and audience growth engines across modern social platforms.",
    icon: FiShare2,
    accent: "from-pink-500 to-rose-400",
    glowColor: "rgba(244, 63, 94, 0.15)",
    tag: "Audience Growth",
    details: [
      "Instagram & Facebook account management & branding",
      "Data-driven content calendar & campaign planning",
      "High-converting post creatives & carousel graphics",
      "High-retention Reels & Short-form video concepts",
      "Viral caption writing & targeted hashtag matrices",
      "Consistent, scheduled posting & community management",
      "Targeted promotional & influencer campaign workflows",
    ],
    timeline: "Monthly Retainer",
    technologies: ["Meta Suite", "Canva", "CapCut", "Analytics", "Buffer"],
  },
  {
    id: "digital-marketing",
    number: "04",
    name: "Digital Marketing",
    shortDesc: "Performance marketing, conversion-rate optimization, and targeted campaigns that yield measurable ROI.",
    icon: FiTrendingUp,
    accent: "from-amber-500 to-orange-400",
    glowColor: "rgba(245, 158, 11, 0.15)",
    tag: "Revenue Engine",
    details: [
      "Local market dominance & Google Business optimization",
      "Omnichannel campaign planning & budgeting",
      "High-engagement customer funnel architecture",
      "B2B & B2C qualified lead generation systems",
      "Real-time conversion tracking & performance analytics",
      "High-converting promotional strategies & A/B testing",
      "Audience retargeting & email marketing automation",
    ],
    timeline: "Continuous Optimization",
    technologies: ["Google Ads", "Meta Ads", "GA4", "Email Flows", "CRM Tools"],
  },
  {
    id: "ui-ux",
    number: "05",
    name: "UI/UX Design",
    shortDesc: "Human-centered interfaces, cohesive design systems, and engaging micro-interactions.",
    icon: FiLayers,
    accent: "from-emerald-500 to-teal-400",
    glowColor: "rgba(16, 185, 129, 0.15)",
    tag: "Visual Design",
    details: [
      "User-friendly, research-backed interface design",
      "Low-fidelity wireframes to interactive high-fidelity prototypes",
      "Modern, minimalist layouts with typographic harmony",
      "Fully responsive systems across mobile, tablet & desktop",
      "User journey mapping & friction-point elimination",
      "Scalable design tokens, components & atomic libraries",
      "Micro-interaction & transition design for developer handoff",
    ],
    timeline: "1-3 Weeks Average",
    technologies: ["Figma", "Design Systems", "Prototyping", "UX Research", "Wireframing"],
  },
  {
    id: "seo",
    number: "06",
    name: "SEO Optimization",
    shortDesc: "Technical search optimization and content architecture that drive qualified organic traffic.",
    icon: FiSearch,
    accent: "from-cyan-500 to-blue-400",
    glowColor: "rgba(6, 182, 212, 0.15)",
    tag: "Search Authority",
    details: [
      "Comprehensive on-page SEO & semantic HTML structuring",
      "Technical SEO auditing (Core Web Vitals, Crawlability, Sitemaps)",
      "Local SEO dominance & geo-targeted landing architectures",
      "Search visibility acceleration & rich snippet Schema.org markup",
      "Keyword gap research & competitive content blueprints",
      "Page speed optimization & asset compression protocols",
      "Organic ranking reporting & backlink profile auditing",
    ],
    timeline: "Monthly Audits",
    technologies: ["Search Console", "Ahrefs", "Semrush", "Lighthouse", "Schema.org"],
  },
  {
    id: "maintenance",
    number: "07",
    name: "Website Maintenance",
    shortDesc: "Reliable round-the-clock uptime, swift bug resolutions, and proactive performance health checks.",
    icon: FiTool,
    accent: "from-emerald-400 to-green-500",
    glowColor: "rgba(52, 211, 153, 0.15)",
    tag: "Uptime & Security",
    details: [
      "Priority bug fixes & cross-browser compatibility patches",
      "Regular content, banner & catalog updates",
      "Continuous performance tuning & code refactoring",
      "Security patching, dependency updates & SSL auditing",
      "Automated cloud backups & disaster recovery protocol",
      "Uptime monitoring & zero-downtime deployment pipelines",
      "Dedicated technical support & consultation channel",
    ],
    timeline: "Ongoing SLA",
    technologies: ["Git", "Cloudflare", "CI/CD", "Monitoring", "Docker"],
  },
  {
    id: "other-solutions",
    number: "08",
    name: "Other Digital Solutions",
    shortDesc: "Bespoke digital architecture, automated pipelines, and strategic technical consulting.",
    icon: FiCpu,
    accent: "from-violet-500 to-fuchsia-400",
    glowColor: "rgba(139, 92, 246, 0.15)",
    tag: "Custom Solutions",
    details: [
      "Custom API design, webhook integrations & third-party connectors",
      "Cloud infrastructure setup & serverless architecture",
      "Comprehensive performance & accessibility audits",
      "Brand identity alignment & technical strategy roadmaps",
      "Legacy codebase migration to modern frameworks",
      "Workflow automation using custom scripts & integrations",
      "Interactive 3D WebGL experiences & experiential landing pages",
    ],
    timeline: "Custom Scope",
    technologies: ["REST/GraphQL", "AWS/GCP", "Three.js", "Docker", "Stripe API"],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const handleClose = () => {
    setSelectedService(null);
  };

  React.useEffect(() => {
    if (!selectedService) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedService]);

  return (
    <div className="w-full section-padding relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center">
          <TitleHeader sub="⚡ Specialized Solutions & Capabilities 🚀" />
          <h2 className="mt-4 sm:mt-6 text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white font-sans leading-snug">
            High-Impact <ColourfulText text="Digital Services" /> <br />
            Engineered For Excellence
          </h2>
          <p className="mt-3 sm:mt-4 max-w-2xl text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed">
            From modern web and mobile applications to social media domination and
            conversion-driven marketing, click any discipline below to view
            comprehensive service deliverables.
          </p>
        </div>

        {/* Services Interactive Grid */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-5 md:gap-6">
          {servicesData.map((service) => {
            const Icon = service.icon;
            const isSelected = selectedService?.id === service.id;

            return (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service)}
                className={`group relative rounded-2xl p-4 sm:p-5 md:p-6 cursor-pointer border transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#181926] border-cyan-400 shadow-[0_0_24px_rgba(56,189,248,0.2)]"
                    : "bg-[#12131c]/90 hover:bg-[#181a27] border-white/10 hover:border-white/20"
                }`}
              >
                {/* Top Row: Index number & Category tag */}
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <span className="text-xs font-mono tracking-widest text-neutral-400">
                      {service.number}
                    </span>
                    <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-neutral-300 border border-white/10">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon with gradient badge */}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-3.5 sm:mb-4 group-hover:scale-105 transition-transform duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-cyan-300 transition-colors" />
                  </div>

                  {/* Service Title */}
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {service.name}
                  </h3>

                  {/* Short Description */}
                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-neutral-400 leading-relaxed">
                    {service.shortDesc}
                  </p>
                </div>

                {/* Bottom Action Hint */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t border-white/5 flex items-center justify-between text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    Explore Details
                  </span>
                  <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                    <FiArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Modal / Slide Drawer when a service is clicked */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[6000] flex items-center justify-center p-3 sm:p-6 md:p-10">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
              />

              {/* Modal Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96, y: 16 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="relative w-full max-w-3xl max-h-[88dvh] overflow-y-auto bg-[#141522] border border-white/15 rounded-2xl sm:rounded-3xl p-4 xs:p-5 sm:p-8 md:p-10 shadow-2xl z-10"
              >
                {/* Close Button */}
                <button
                  type="button"
                  onClick={handleClose}
                  aria-label="Close details"
                  className="absolute top-3.5 right-3.5 sm:top-5 sm:right-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <FiX className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-start gap-3 sm:gap-4 pr-9">
                  <div className="w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 flex items-center justify-center shrink-0">
                    {React.createElement(selectedService.icon, {
                      className: "w-5 h-5 sm:w-7 sm:h-7 text-cyan-400",
                    })}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono text-cyan-400">
                        {selectedService.number}
                      </span>
                      <span className="text-xs text-neutral-400">·</span>
                      <span className="text-xs text-neutral-400 font-medium">
                        {selectedService.tag}
                      </span>
                    </div>
                    <h3 className="text-lg xs:text-xl sm:text-3xl font-bold text-white leading-tight">
                      {selectedService.name}
                    </h3>
                  </div>
                </div>

                {/* One-Line Summary */}
                <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-neutral-300 leading-relaxed">
                  {selectedService.shortDesc}
                </p>

                {/* Key Deliverables & Scope */}
                <div className="mt-6 sm:mt-8">
                  <h4 className="text-xs sm:text-sm font-semibold text-white tracking-wide uppercase flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    Key Deliverables & Capabilities
                  </h4>
                  <div className="mt-3 sm:mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                    {selectedService.details.map((detail, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-2.5 sm:p-3 rounded-xl bg-white/[0.03] border border-white/5"
                      >
                        <FiCheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs sm:text-sm text-neutral-200">
                          {detail}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies & Timeline */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Standard Technologies
                    </h5>
                    <div className="mt-2 flex flex-wrap gap-1.5 sm:gap-2">
                      {selectedService.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h5 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
                      Typical Turnaround
                    </h5>
                    <p className="mt-2 text-sm font-medium text-cyan-300">
                      {selectedService.timeline}
                    </p>
                  </div>
                </div>

                {/* Bottom CTA Button */}
                <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-xs text-neutral-400 text-center sm:text-left">
                    Ready to build your {selectedService.name.toLowerCase()} solution? Let&apos;s discuss your requirements.
                  </p>
                  <a
                    href="#contact"
                    onClick={handleClose}
                    className="w-full sm:w-auto px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-lg shrink-0"
                  >
                    <span>Inquire About This Service</span>
                    <FiSend className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Services;
